import React from "react";
import Label from "../Label/Label";
import "./TextInput.css";

export default function TextInput({ id, label, placeholder, setValue, value }) {
  return (
    <>
      <Label htmlFor={id} text={label} />
      <input
        className="text-input"
        name={id}
        type="text"
        id={id}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </>
  );
}
