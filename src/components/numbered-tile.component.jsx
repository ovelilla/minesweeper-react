// Vendors
import PropTypes from "prop-types";

const NumberedTile = ({ level, number }) => {
  const colors = {
    1: "text-blue-600",
    2: "text-green-600",
    3: "text-red-600",
    4: "text-purple-600",
    5: "text-yellow-600",
    6: "text-pink-600",
    7: "text-gray-600",
    8: "text-gray-800",
  };

  const fontSize = {
    0: "text-base sm:text-lg md:text-2xl lg:text-4xl",
    1: "text-sm sm:text-base md:text-lg lg:text-xl",
    2: "text-xs sm:text-sm md:text-base lg:text-lg",
  };

  return (
    <div
      className={`aspect-square w-full max-h-full flex justify-center items-center leading-none font-bold ${colors[number]} ${fontSize[level]}`}
    >
      {number}
    </div>
  );
};

NumberedTile.propTypes = {
  level: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
};

export default NumberedTile;
