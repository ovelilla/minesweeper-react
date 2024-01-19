// Vendors
import PropTypes from "prop-types";

const ResponsiveSquare = ({ children }) => {
  return (
    <div className="flex justify-center items-center aspect-square w-full max-h-full">
      <div className="relative aspect-square h-full max-w-full">{children}</div>
    </div>
  );
};

ResponsiveSquare.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResponsiveSquare;
