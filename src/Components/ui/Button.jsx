import PropTypes from "prop-types";

export const Button = ({
  as: Component = "button",
  type = "button",
  children,
  ...rest
}) => {
  return (
    <Component type={type} {...rest} className="btn">
      {children}
    </Component>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.elementType,
};
