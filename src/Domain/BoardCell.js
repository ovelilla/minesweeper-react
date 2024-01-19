class BoardCell {
  constructor(row, column, hasMine) {
    this.row = row;
    this.column = column;
    this.hasMine = hasMine;
  }

  /**
   * Defuses this cell
   * @param {number} surroundingMinesCount
   */
  defuse(surroundingMinesCount) {
    this.flagged = false;
    this.defused = true;
    this.surroundingMinesCount = surroundingMinesCount;
  }

  /**
   * Marks this cell as flagged
   * @returns this
   */
  flag() {
    this.flagged = !this.flagged;

    return this;
  }

  /**
   * Marks this cell as exploded, because it contains a mine.
   * @returns this
   */
  explode() {
    this.exploded = true;
    return this;
  }

  /**
   * Gets the number of surrounding mines around this cell.
   * @returns The number of surrounding mines on this cell
   */
  getSurroundingMinesCount() {
    return this.surroundingMinesCount;
  }
}

export default BoardCell;
