import PropTypes from "prop-types";

export const ColorItem = ({ color, setColor }) => {
  return (
    <div
      onClick={setColor}
      className="color-item"
      style={{ "--bg-color": color }}
    ></div>
  );
};

ColorItem.propTypes = {
  color: PropTypes.string.isRequired,
  setColor: PropTypes.func.isRequired,
};
