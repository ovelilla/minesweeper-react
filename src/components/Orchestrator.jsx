// Vendors
import PropTypes from "prop-types";
// Components
import BlankTile from "./BlankTile";
import FliagTile from "./FlaggedTile";
import MineTile from "./MineTile";
import NumberedTile from "./NumberedTile";
import UnopenedTile from "./UnopenedTile";

const Orchestrator = ({
  cell,
  gameOver,
  handleCellClick,
  handleCellRightClick,
}) => {
  if (gameOver && cell.hasMine) {
    return <MineTile cell={cell} />;
  }

  if (cell.defused && cell.getSurroundingMinesCount() === 0) {
    return <BlankTile />;
  }

  if (cell.defused) {
    return <NumberedTile number={cell.getSurroundingMinesCount()} />;
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
};

export default Orchestrator;
