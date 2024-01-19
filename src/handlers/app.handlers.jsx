// Constants
import constants from "../constants/app.constants";
// Domain
import Board from "../Domain/Board";
// Services
import ApiClient from "../Services/ApiClient";

const fetchBoardHandler = async ({ level, setBoard, setGameOver }) => {
  try {
    const apiClient = new ApiClient(constants.API_URL);
    const { rows, columns, mines } = await apiClient.getLevel(level);
    const board = new Board(rows, columns, mines, level);
    setBoard(board);
    setGameOver(false);
  } catch (error) {
    console.error("Error fetching game data:", error);
  }
};

const cellClickHandler = ({ board, cell, gameOver, setBoard, setGameOver }) => {
  if (gameOver || !board) return;

  try {
    board.defuse(cell.row, cell.column);
    setBoard({ ...board });

    if (board.checkWin()) {
      console.log("¡Ganaste el juego!");
    }
  } catch (error) {
    board.exploded(cell.row, cell.column);
    setGameOver(true);
    console.error(error);
  }
};

const cellRightClickHandler = ({ e, board, cell, gameOver, setBoard }) => {
  e.preventDefault();

  if (gameOver || !board) return;

  board.flag(cell.row, cell.column);
  setBoard({ ...board });

  if (board.checkWin()) {
    console.log("¡Ganaste el juego!");
  }
};

const levelClickHandler = ({ level, setBoard, setGameOver, setLevel }) => {
  setBoard(null);
  setGameOver(false);
  setLevel((level + 1) % 3);
};

const AppHandlers = ({
  board,
  gameOver,
  level,
  setBoard,
  setGameOver,
  setLevel,
}) => {
  return {
    handleCellClick: (cell) =>
      cellClickHandler({ board, cell, gameOver, setBoard, setGameOver }),
    handleCellRightClick: (e, cell) =>
      cellRightClickHandler({ e, board, cell, gameOver, setBoard }),
    handleFetchBoard: () => fetchBoardHandler({ level, setBoard, setGameOver }),
    handleLevelClick: () =>
      levelClickHandler({ level, setBoard, setGameOver, setLevel }),
  };
};

export default AppHandlers;
