// Vendors
import PropTypes from "prop-types";

const BackgroundGrid = ({ board }) => {
  const gridColumnsClass = {
    10: "grid-cols-10",
    25: "grid-cols-25",
    35: "grid-cols-35",
  };

  return (
    <div
      className={`z-0 absolute top-0 left-0 w-full h-full grid ${
        gridColumnsClass[board.columns.length]
      } bg-stone-400`}
    >
      {board.columns.map((column) =>
        column.map((cell) => (
          <div
            key={`${cell.row}-${cell.column}`}
            className={`aspect-square w-full max-h-full border border-stone-500 ${
              cell?.exploded ? "bg-red-600" : ""
            }`}
          ></div>
        ))
      )}
    </div>
  );
};

BackgroundGrid.propTypes = {
  board: PropTypes.object.isRequired,
};

export default BackgroundGrid;
