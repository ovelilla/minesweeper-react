// Vendors
import PropTypes from "prop-types";
// Components
import FlagIcon from "../icons/flag.icon";

const FliagTile = ({ cell, handleCellRightClick }) => (
  <div
    className="aspect-square w-full max-h-full flex justify-center items-center  border md:border-2 lg:border-4 border-stone-500 border-t-stone-300 border-l-stone-300 bg-stone-400 sm:[&>svg]:w-8 sm:[&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10 lg:[&>svg]:w-12 lg:[&>svg]:h-12 [&>svg]:text-red-600"
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
