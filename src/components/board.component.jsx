// Vendors
import PropTypes from "prop-types";
// Components
import BackgroundGrid from "./background-grid.component";
import Grid from "./grid.component";
import ResponsiveSquare from "./responsive-square.component";

const Board = ({
  board,
  gameOver,
  handleCellClick,
  handleCellRightClick,
  level,
}) => {
  return (
    <div className="overflow-hidden flex-1 border md:border-2 lg:border-4 border-stone-500 border-r-stone-300 border-b-stone-300">
      <ResponsiveSquare>
        <BackgroundGrid board={board} />
        <Grid
          board={board}
          gameOver={gameOver}
          handleCellClick={handleCellClick}
          handleCellRightClick={handleCellRightClick}
          level={level}
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
  level: PropTypes.number.isRequired,
};

export default Board;
