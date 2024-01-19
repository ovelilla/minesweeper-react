// Vendors
import PropTypes from "prop-types";
// Components
import FlagIcon from "../icons/FlagIcon";

const FliagTile = ({ cell, handleCellRightClick }) => (
  <div
    className="aspect-square w-full max-h-full flex justify-center items-center border-4 border-stone-500 border-t-stone-200 border-l-stone-200 bg-stone-400 sm:[&>svg]:w-8 sm:[&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10 lg:[&>svg]:w-12 lg:[&>svg]:h-12 [&>svg]:text-red-600"
    onContextMenu={(e) => handleCellRightClick(e, cell)}
  >
    <FlagIcon />
  </div>
);

FliagTile.propTypes = {
  cell: PropTypes.object.isRequired,
  handleCellRightClick: PropTypes.func.isRequired,
};

export default FliagTile;
