// Vendors
import PropTypes from "prop-types";

const MineCounter = ({ board }) => {
  return (
    <div className="flex items-center px-4 md:px-6 lg:px-8 border md:border-2 lg:border-4 border-stone-500 border-r-stone-300 border-b-stone-300 bg-stone-950 text-white font-['vt323'] text-4xl md:text-5xl lg:text-6xl leading-none">
      {board.getRemainigMinesCount()}
    </div>
  );
};

MineCounter.propTypes = {
  board: PropTypes.object,
};

export default MineCounter;
