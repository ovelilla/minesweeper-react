// Vendors
import PropTypes from "prop-types";
// Components
import BlankTile from "./blank-tile.component";
import FliagTile from "./flagged-tile.component";
import MineTile from "./mine-tile.component";
import NumberedTile from "./numbered-tile.component";
import UnopenedTile from "./unopened-tile.component";

const Orchestrator = ({
  cell,
  gameOver,
  handleCellClick,
  handleCellRightClick,
  level,
}) => {
  if (gameOver && cell.hasMine) {
    return <MineTile cell={cell} level={level} />;
  }

  if (cell.defused && cell.getSurroundingMinesCount() === 0) {
    return <BlankTile />;
  }

  if (cell.defused) {
    return (
      <NumberedTile level={level} number={cell.getSurroundingMinesCount()} />
    );
  }

  if (cell.flagged) {
    return (
      <FliagTile cell={cell} handleCellRightClick={handleCellRightClick} />
    );
  }

  return (
    <UnopenedTile
      cell={cell}
      handleCellClick={handleCellClick}
      handleCellRightClick={handleCellRightClick}
    />
  );
};

Orchestrator.propTypes = {
  cell: PropTypes.object.isRequired,
  gameOver: PropTypes.bool.isRequired,
  handleCellClick: PropTypes.func.isRequired,
  handleCellRightClick: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
};

export default Orchestrator;
