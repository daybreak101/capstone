import React, { useState, useEffect } from "react";
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
  const [focus, setFocus] = useState(false);

  // if selected option is not in options, set it to undefined
  // This is to prevent chosen timeslot from being selected
  // specifically when the date is changed through the DatePicker,
  // and the new date does not have that corresponding timeslot
  useEffect(() => {
    if (!options.includes(selected)) {
      setSelected("");
    }
  }, [options]);

  return (
    <>
      {/* Classnames include ternary operators to enable simple css animations */}
      <Label htmlFor={id} text={label} className="dropdown-label" />
      <div
        className="dropdown-container"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        onFocus={() => setFocus(true)}
        onBlur={(e) => {
          setFocus(false);

          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsOpen(false);
          }
        }}
      >
        {/* this is a hidden input to store the selected value, that way the form can read it */}
        <input type="hidden" value={selected} name={id} />
        <img
          className={`dropdown-image ${selected && !isOpen ? "dropdown-image__open" : ""}`}
          src={defaultIcon}
          alt="dropdown"
        />
        <button
          id={id}
          type="button" //prevent form submission aka page reload
          className={`dropdown ${selected && !isOpen ? "dropdown__open" : ""} ${focus ? "dropdown__focus" : ""}`}
          value={selected}
          //aria labels for accessibility since it is not traditional form element
          aria-label={label}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          {selected && !isOpen ? selected : isOpen ? emptyValue : emptyValue}
        </button>
        <div
          className={`dropdown-icon ${selected && !isOpen ? "dropdown-icon__open" : ""}`}
        >
          ⏷
        </div>

        <div className={`dropdown-menu ${isOpen ? "dropdown-menu__open" : ""}`}>
          {options.map((option) => (
            <button
              type="button"
              className="dropdown-option"
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
