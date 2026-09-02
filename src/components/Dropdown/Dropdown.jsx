import React, { useState } from "react";
import Label from "../Label/Label";
import "./Dropdown.css";

export default function Dropdown({
  id,
  label,
  options,
  emptyValue,
  defaultIcon,
  selected,
  setSelected,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Classnames include ternary operators to enable simple css animations */}
      <Label htmlFor={id} text={label} className="dropdown-label" />
      <div
        className="dropdown-container"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img
          className={`dropdown-image ${selected && !isOpen ? "dropdown-image__open" : ""}`}
          src={defaultIcon}
          alt="dropdown"
        />
        <button
          id={id}
          type="button" //prevent form submission aka page reload
          className={`dropdown ${selected && !isOpen ? "dropdown__open" : ""}`}
          value={selected}
          //aria labels for accessibility since it is not traditional form element
          aria-label={label}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          {selected && !isOpen ? selected : emptyValue}
        </button>
        <div
          className={`dropdown-icon ${selected && !isOpen ? "dropdown-icon__open" : ""}`}
        >
          ⏷
        </div>

        <div className={`dropdown-menu ${isOpen ? "dropdown-menu__open" : ""}`}>
          {options.map((option) => (
            <div
              className="dropdown-option"
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
