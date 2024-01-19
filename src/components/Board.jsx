// Vendors
import PropTypes from "prop-types";
// Components
import BackgroundGrid from "./BackgroundGrid";
import Grid from "./Grid";
import ResponsiveSquare from "./ResponsiveSquare";

const Board = ({ board, gameOver, handleCellClick, handleCellRightClick }) => {
  if (!board) {
    return null;
  }

  return (
    <div className="overflow-hidden flex-1 border-4 border-stone-500 border-r-stone-300 border-b-stone-300">
      <ResponsiveSquare>
        <BackgroundGrid board={board} />
        <Grid
          board={board}
          gameOver={gameOver}
          handleCellClick={handleCellClick}
          handleCellRightClick={handleCellRightClick}
        />
      </ResponsiveSquare>
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.object,
  gameOver: PropTypes.bool.isRequired,
  handleCellClick: PropTypes.func.isRequired,
  handleCellRightClick: PropTypes.func.isRequired,
};

export default Board;
