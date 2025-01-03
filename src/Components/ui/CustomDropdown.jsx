import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import PropTypes from "prop-types";
import "./CustomDropdown.css";
export const CustomDropdown = ({ toursList, selected,setSelected }) => {
  const [open, setOpen] = useState(false);
  const options = [
    { value: "recommended", label: "Recommended" },
    { value: "low", label: "Low to high price" },
    { value: "high", label: "High to low price" },
  ];
  const handleSelect = (option) => {
    setSelected(option.label);
    setOpen(false);
  };
  return (
    <div className="sort-container">
      <h5>{toursList.length} Tours found</h5>
      <div className="custom-container">
        <span>Sort by </span>
        <div>
          <div className="dropdown" onClick={() => setOpen((prev) => !prev)}>
            {selected}
            <FaAngleDown />
          </div>
          {open && (
            <ul className="dropdown-menu">
              {options.map((option) => (
                <li key={option.value} onClick={() => handleSelect(option)}>
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

CustomDropdown.propTypes = {
  toursList: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};
