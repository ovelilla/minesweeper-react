import PropTypes from "prop-types";

const NumberedTile = ({ number }) => {
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

  return (
    <div
      className={`aspect-square w-full max-h-full flex justify-center items-center text-md sm:text-lg md:text-xl lg:text-2xl leading-none font-bold ${colors[number]}`}
    >
      {number}
    </div>
  );
};

NumberedTile.propTypes = {
  number: PropTypes.number.isRequired,
};

export default NumberedTile;
