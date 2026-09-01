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
  setSelected
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
        <div
          id={id}
          className={`dropdown ${selected && !isOpen ? "dropdown__open" : ""}`}
          value={selected}
        >
          {selected && !isOpen ? selected : emptyValue}
        </div>
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
