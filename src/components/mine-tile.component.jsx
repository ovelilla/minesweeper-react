// Vendors
import PropTypes from "prop-types";
// Components
import MineIcon from "../icons/mine-icon";

const MineTile = ({ level }) => {
  const iconSize = {
    0: "[&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-8 sm:[&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10 lg:[&>svg]:w-12 lg:[&>svg]:h-12",
    1: "[&>svg]:w-2 [&>svg]:h-2 sm:[&>svg]:w-6 sm:[&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8 lg:[&>svg]:w-10 lg:[&>svg]:h-10",
    2: "[&>svg]:w-1 [&>svg]:h-1 sm:[&>svg]:w-3 sm:[&>svg]:h-3 md:[&>svg]:w-5 md:[&>svg]:h-5 lg:[&>svg]:w-6 lg:[&>svg]:h-6",
  };

  return (
    <div
      className={`aspect-square w-full max-h-full flex justify-center items-center ${iconSize[level]}`}
    >
      <MineIcon />
    </div>
  );
};

MineTile.propTypes = {
  level: PropTypes.number.isRequired,
};

export default MineTile;
