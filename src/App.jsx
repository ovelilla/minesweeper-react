// Components
import Board from "./components/Board";
import Header from "./components/Header";
import LineSeparator from "./components/LineSeparator";
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
  } = AppHook();

  return (
    <div className="relative flex flex-col w-full h-full bg-stone-900 border-4 border-stone-400">
      <Header
        level={level}
        handleLevelClick={handleLevelClick}
        handleFetchBoard={handleFetchBoard}
      />
      <LineSeparator />
      <Board
        board={board}
        gameOver={gameOver}
        handleCellClick={handleCellClick}
        handleCellRightClick={handleCellRightClick}
      ></Board>
      {gameOver && <p className="font-press-start">¡Juego terminado!</p>}
    </div>
  );
}

export default App;
