import "./Input.css";
import PropTypes from "prop-types";

export const Input = ({ title, type, ...rest }) => {
  const id = `input-${title.replace(/\s+/g, "-").toLowerCase()}`; // Generate a unique ID

  return (
    <div className="input-container">
      <input placeholder="" className="custom-input" type={type} id={id} name={title} {...rest} />
      <label htmlFor={id} className="input-label">
        {title}
      </label>
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
