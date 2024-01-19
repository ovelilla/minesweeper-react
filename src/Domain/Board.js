import BoardCell from "./BoardCell";
import Mine from "./Mine";

export default class Board {
  /**
   * Builds a board based on the number of rows and columns passed as an argument and stores the mines.
   * Basically, it builds a matrix of columns and rows containing cells.
   * @param {number} rows - The number of rows of the board
   * @param {number} columns - The number of columns of the board
   * @param {Mine} mines - The mines of the board
   */
  constructor(rows, columns, mines, level) {
    this.mines = mines;
    this.level = level;
    this.columns = this.buildBoard(rows, columns);
    this.flaggedCount = 0;
  }

  /**
   * This method initializes the matrix of columns and rows of the board with cells
   * @param {number} The number of rows
   * @param {number} The number columns
   * @returns
   */
  buildBoard(rows, columns) {
    return this._buildColumns(rows, columns);
  }

  _buildColumns(rows, columns) {
    const matrix = [];

    for (let i = 0; i < columns; i++) {
      let row = this._buildRows(rows, i);

      matrix.push(row);
    }

    return matrix;
  }

  _buildRows = (rows, columnIndex) => {
    let column = [];

    for (let i = 0; i < rows; i++) {
      column.push(
        new BoardCell(i, columnIndex, this.cellHasMine(i, columnIndex))
      );
    }

    return column;
  };

  /**
   * Returns true/false whether there's a mine in that row+column
   * @param {number} row
   * @param {number} column
   * @returns True/false whether there's a mine in that row+column
   */
  cellHasMine(row, column) {
    return this.mines?.some(
      (mine) => mine.row === row && mine.column === column
    );
  }

  /**
   * Whether the cell present at [row[column]] can be defused or not (has a mine or not)
   * @param {number} row
   * @param {number} column
   * @returns True/false whether the cell present at [row[column]] can be defused or not (has a mine or not)
   */
  canBeDefused = (row, column) => {
    return !this.cellHasMine(row, column);
  };

  /**
   * Gets a cell by row and column
   * @param {number} row
   * @param {number} column
   * @returns The cell present at row/column
   */
  getCellBy(row, column) {
    let predicate = (y) => y.row === row && y.column === column;
    let foundColumn = this.columns.find((x) => x.some(predicate));
    let cell = foundColumn?.find(predicate);

    return cell;
  }

  /**
   *
   * @param {number} row
   * @param {number} column
   * @returns The surrounding cells on a coordinate.
   * 1 2 3
   * 4 5 6
   * 7 8 9
   * The surrounding cells for the 5 cell will be 1,2,3,4,6,7,8,9.
   */
  getSurroundingCellsRowsColumns(row, column) {
    return [
      //left
      { row: row, column: column - 1 },
      //right
      { row: row, column: column + 1 },
      //topleft
      { row: row - 1, column: column - 1 },
      //topright
      { row: row - 1, column: column + 1 },
      //top
      { row: row - 1, column: column },
      //bottom
      { row: row + 1, column: column },
      //bottom left
      { row: row + 1, column: column - 1 },
      //bottom right
      { row: row + 1, column: column + 1 },
    ];
  }

  _getSurroundingCellsUndefused(row, column) {
    const surroundingCoordinates = this.getSurroundingCellsRowsColumns(
      row,
      column
    );

    return surroundingCoordinates.reduce((result, coordinate) => {
      let cell = this.getCellBy(coordinate.row, coordinate.column);

      if (cell && !cell.defused) {
        result.push(cell);
      }

      return result;
    }, []);
  }

  /**
   *
   * @param {number} row
   * @param {number} column
   * @returns Returns the number of surrounding mines for a coordinate
   */
  countSurroundingMines(row, column) {
    let surroundingCellsCoordinates = this.getSurroundingCellsRowsColumns(
      row,
      column
    );

    const minesList = surroundingCellsCoordinates.map((x) =>
      this.cellHasMine(x.row, x.column) ? 1 : 0
    );

    const mineCount = minesList.reduce((partialSum, a) => partialSum + a, 0);

    return mineCount;
  }

  _flattenCells = () => {
    return [].concat(...this.columns);
  };

  _calculateRemainingMinesCount = () => {
    const cells = this._flattenCells();

    this.flaggedCount = cells.filter((x) => x.flagged).length;
  };

  getRemainigMinesCount = () => {
    return this.mines.length - this.flaggedCount;
  };

  /**
   *
   * @param {number} row
   * @param {number} column
   * @returns Marks a cell as flagged and recalculates the number of remaining mines
   */
  flag = (row, column) => {
    let cell = this.getCellBy(row, column);

    cell.flag();

    this._calculateRemainingMinesCount();

    return this;
  };

  /**
   * Defuses a cell.
   * If there's a mine in it it throws an error.
   * If there are no mines surrounding the cell, will defuse all the surrounding mines recursively.
   * @param {number} row
   * @param {number} column
   * @returns The board after the cell is defused
   */
  defuse = (row, column) => {
    let cell = this.getCellBy(row, column);

    if (cell.hasMine) {
      throw new Error(
        `cell at ${row}, ${column} can't be defused, it has a mine`
      );
    }

    cell.defuse(this.countSurroundingMines(row, column));

    this._calculateRemainingMinesCount();

    this._defuseSurroundingMines(cell);

    return this;
  };

  _defuseSurroundingMines = (cell) => {
    if (cell.getSurroundingMinesCount() === 0) {
      let toDefuse = this._getSurroundingCellsUndefused(cell.row, cell.column);

      toDefuse.forEach((x) => this.defuse(x.row, x.column));
    }
  };

  /**
   * If a cell with a mine is clicked, this method has to be called because the game is lost.
   * @param {number} row
   * @param {number} column
   * @returns The board with the exploded cell and the board marked as lost.
   */
  exploded = (row, column) => {
    let cell = this.getCellBy(row, column);

    cell.explode();

    this.lost = true;

    this.defuseAllNonMinedCells();

    return this;
  };

  /**
   * Checks if the game has been won.
   * The game is won if all mines are correctly flagged and all non-mine cells are defused.
   * Firstly, it verifies that the number of flagged cells matches the total number of mines.
   * Secondly, it iterates through all cells to ensure that every non-mine cell is defused.
   * @returns {boolean} True if the game is won, false otherwise.
   */
  checkWin = () => {
    this._calculateRemainingMinesCount();

    if (this.flaggedCount !== this.mines.length) {
      return false;
    }

    const cells = this._flattenCells();

    const allNonMinesDefused = cells.every((cell) =>
      !cell.hasMine ? cell.defused : true
    );

    return allNonMinesDefused;
  };

  /**
   * Defuses all cells on the board that do not contain a mine.
   * This method iterates through every cell in each column of the board.
   * If a cell does not have a mine, it is defused by setting its 'defused' status to true.
   * The method calls 'countSurroundingMines' for each non-mined cell to calculate the number of mines in adjacent cells.
   * This is useful for revealing all safe cells when the game is lost, without triggering the error logic for mined cells.
   * @returns The board instance, allowing method chaining.
   */
  defuseAllNonMinedCells = () => {
    this.columns.forEach((column) => {
      column.forEach((cell) => {
        if (!cell.hasMine) {
          cell.defuse(this.countSurroundingMines(cell.row, cell.column));
        }
      });
    });

    return this;
  };
}
