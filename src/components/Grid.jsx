// Vendors
import PropTypes from "prop-types";
// Components
import Orchestrator from "./Orchestrator";

const Grid = ({ board, gameOver, handleCellClick, handleCellRightClick }) => {
  const gridColumnsClass = {
    10: "grid-cols-10",
    25: "grid-cols-25",
    35: "grid-cols-35",
  };

  return (
    <div
      className={`z-10 absolute top-0 left-0 w-full h-full grid ${
        gridColumnsClass[board.columns.length]
      }`}
    >
      {board.columns.map((column) =>
        column.map((cell) => (
          <Orchestrator
            key={`${cell.row}-${cell.column}`}
            cell={cell}
            gameOver={gameOver}
            handleCellClick={handleCellClick}
            handleCellRightClick={handleCellRightClick}
          />
        ))
      )}
    </div>
  );
};

Grid.propTypes = {
  board: PropTypes.object,
  gameOver: PropTypes.bool.isRequired,
  handleCellClick: PropTypes.func.isRequired,
  handleCellRightClick: PropTypes.func.isRequired,
};

export default Grid;
