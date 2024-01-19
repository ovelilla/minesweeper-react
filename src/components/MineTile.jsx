// Components
import MineIcon from "../icons/MineIcon";

const MineTile = () => {
  return (
    <div className="aspect-square w-full max-h-full flex justify-center items-center sm:[&>svg]:w-8 sm:[&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10 lg:[&>svg]:w-12 lg:[&>svg]:h-12">
      <MineIcon />
    </div>
  );
};

export default MineTile;
