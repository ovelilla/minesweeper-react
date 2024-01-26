// Components
import Board from "./components/board.component";
import GameOver from "./components/game-over.component";
import Header from "./components/header.component";
import LineSeparator from "./components/line-separator.component";
import Win from "./components/win.component";
// Hooks
import AppHook from "./hooks/app.hook";

function App() {
  const {
    board,
    gameOver,
    handleCellClick,
    handleCellRightClick,
    handleFetchBoard,
    handleLevelClick,
    level,
    timer,
    win,
  } = AppHook();

  if (!board) return null;

  return (
    <div className="relative flex flex-col w-full h-full bg-stone-900 border-4 border-stone-400">
      <Header
        board={board}
        handleLevelClick={handleLevelClick}
        handleFetchBoard={handleFetchBoard}
        level={level}
        timer={timer}
      />
      <LineSeparator />
      <Board
        board={board}
        gameOver={gameOver}
        handleCellClick={handleCellClick}
        handleCellRightClick={handleCellRightClick}
        level={level}
      ></Board>
      {gameOver && <GameOver />}
      {win && <Win />}
    </div>
  );
}

export default App;
