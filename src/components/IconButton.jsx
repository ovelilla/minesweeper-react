// Vendors
import PropTypes from "prop-types";

const IconButton = ({ children, onClick }) => {
  return (
    <button
      className="flex justify-center items-center w-12 h-12  border-4 border-stone-500 border-t-stone-300 border-l-stone-300 bg-stone-400 active:border-stone-500 active:border-r-stone-300 active:border-b-stone-300 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
