import PropTypes from "prop-types";

export const Button = ({ type = "button", children, ...rest }) => {
  return (
    <button type={type} {...rest} className="btn">
      {children}
    </button>
  );
};


Button.propTypes = {
  type: PropTypes.string, 
  children: PropTypes.node, 
};
