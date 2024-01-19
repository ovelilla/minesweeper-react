// Vendors
import PropTypes from "prop-types";
// Componets
import IconButton from "./IconButton";
// Icons
import Level0Icon from "../icons/Level0Icon";
import Level1Icon from "../icons/Level1Icon";
import Level2Icon from "../icons/Level2Icon";
import ReloadIcon from "../icons/ReloadIcon";

const Header = ({ handleLevelClick, handleFetchBoard, level }) => {
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
    <div className="flex border-4 border-stone-500 border-r-stone-300 border-b-stone-300 bg-stone-400">
      <IconButton onClick={handleLevelClick}>{iconLevel()}</IconButton>
      <IconButton onClick={handleFetchBoard}>
        <ReloadIcon />
      </IconButton>
    </div>
  );
};

Header.propTypes = {
  handleLevelClick: PropTypes.func.isRequired,
  handleFetchBoard: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
};

export default Header;
