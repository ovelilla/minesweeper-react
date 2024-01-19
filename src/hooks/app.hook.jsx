// Vendors
import { useState, useEffect } from "react";
// Handlers
import AppHandlers from "../handlers/app.handlers";

const AppHook = () => {
  const [board, setBoard] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [level, setLevel] = useState(0);

  const {
    handleCellClick,
    handleCellRightClick,
    handleFetchBoard,
    handleLevelClick,
  } = AppHandlers({
    board,
    gameOver,
    level,
    setBoard,
    setGameOver,
    setLevel,
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
  };
};

export default AppHook;
