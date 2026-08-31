import React from "react";

export default function Dropdown({ id, label, options }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id}>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </>
  );
}
