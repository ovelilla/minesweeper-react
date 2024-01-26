// Vendors
import PropTypes from "prop-types";
// Componets
import IconButton from "./icon-button.component";
import MineCounter from "./mine-counter.component";
import Timer from "./timer.component";
// Icons
import Level0Icon from "../icons/level0.icon";
import Level1Icon from "../icons/level1.icon";
import Level2Icon from "../icons/level2.icon";
import ReloadIcon from "../icons/reload-icon";

const Header = ({
  board,
  handleLevelClick,
  handleFetchBoard,
  level,
  timer,
}) => {
  const iconLevel = () => {
    switch (level) {
      case 0:
        return <Level0Icon />;
      case 1:
        return <Level1Icon />;
      case 2:
        return <Level2Icon />;
      default:
        return <Level0Icon />;
    }
  };

  return (
    <div className="flex justify-between border md:border-2 lg:border-4 border-stone-500 border-r-stone-300 border-b-stone-300 bg-stone-400">
      <MineCounter board={board} />
      <div className="flex">
        <IconButton onClick={handleLevelClick}>{iconLevel()}</IconButton>
        <IconButton onClick={handleFetchBoard}>
          <ReloadIcon />
        </IconButton>
      </div>
      <Timer timer={timer} />
    </div>
  );
};

Header.propTypes = {
  board: PropTypes.object,
  handleLevelClick: PropTypes.func.isRequired,
  handleFetchBoard: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired,
};

export default Header;
