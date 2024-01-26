// Vendors
import { useState, useEffect } from "react";
// Handlers
import AppHandlers from "../handlers/app.handlers";

const AppHook = () => {
  const [board, setBoard] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [level, setLevel] = useState(0);
  const [timer, setTimer] = useState(0);
  const [win, setWin] = useState(false);

  const {
    handleCellClick,
    handleCellRightClick,
    handleFetchBoard,
    handleLevelClick,
  } = AppHandlers({
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
  });

  useEffect(() => {
    handleFetchBoard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  return {
    board,
    gameOver,
    handleCellClick,
    handleCellRightClick,
    handleFetchBoard,
    handleLevelClick,
    level,
    timer,
    win,
  };
};

export default AppHook;
