// Vendors
import PropTypes from "prop-types";

const UnopenedTile = ({ cell, handleCellClick, handleCellRightClick }) => (
  <div
    className="aspect-square w-full max-h-full border md:border-2 lg:border-4 border-stone-500 border-t-stone-300 border-l-stone-300 active:border-stone-500 active:border-r-stone-300 active:border-b-stone-300 cursor-pointer bg-stone-400"
    onClick={() => handleCellClick(cell)}
    onContextMenu={(e) => handleCellRightClick(e, cell)}
  ></div>
);

UnopenedTile.propTypes = {
  cell: PropTypes.object.isRequired,
  handleCellClick: PropTypes.func.isRequired,
  handleCellRightClick: PropTypes.func.isRequired,
};

export default UnopenedTile;
