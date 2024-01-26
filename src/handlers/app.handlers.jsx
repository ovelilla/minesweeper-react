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

const cellClickHandler = ({
  board,
  cell,
  gameOver,
  intervalId,
  setBoard,
  setGameOver,
  setIntervalId,
  setTimer,
  setWin,
}) => {
  if (gameOver || !board) return;

  try {
    board.defuse(cell.row, cell.column);
    setBoard({ ...board });

    if (!intervalId) {
      const intervalId = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
      setIntervalId(intervalId);
    }

    if (board.checkWin()) {
      clearInterval(intervalId);
      setWin(true);
    }
  } catch (error) {
    board.exploded(cell.row, cell.column);
    setGameOver(true);
    clearInterval(intervalId);
  }
};

const cellRightClickHandler = ({
  e,
  board,
  cell,
  gameOver,
  intervalId,
  setBoard,
  setIntervalId,
  setTimer,
  setWin,
}) => {
  e.preventDefault();

  if (gameOver || !board) return;

  if (!intervalId) {
    const intervalId = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    setIntervalId(intervalId);
  }

  board.flag(cell.row, cell.column);
  setBoard({ ...board });

  if (board.checkWin()) {
    clearInterval(intervalId);
    setWin(true);
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
  intervalId,
  level,
  setBoard,
  setGameOver,
  setIntervalId,
  setLevel,
  setTimer,
  setWin,
}) => {
  return {
    handleCellClick: (cell) =>
      cellClickHandler({
        board,
        cell,
        gameOver,
        intervalId,
        setBoard,
        setGameOver,
        setIntervalId,
        setTimer,
        setWin,
      }),
    handleCellRightClick: (e, cell) =>
      cellRightClickHandler({
        e,
        board,
        cell,
        gameOver,
        intervalId,
        setBoard,
        setIntervalId,
        setTimer,
        setWin,
      }),
    handleFetchBoard: () => fetchBoardHandler({ level, setBoard, setGameOver }),
    handleLevelClick: () =>
      levelClickHandler({ level, setBoard, setGameOver, setLevel }),
  };
};

export default AppHandlers;
