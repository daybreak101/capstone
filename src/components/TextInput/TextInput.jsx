import React, { useState } from "react";
import Label from "../Label/Label";
import "./TextInput.css";

export default function TextInput({
  id,
  label,
  placeholder,
  setValue,
  value,
  required, 
  type
}) {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <Label htmlFor={id} text={label} />
      <input
        // className="text-input"
        className={`text-input ${focus ? "text-input__focus" : value ? "text-input__filled" : ""}`}
        name={id}
        type={type ? type : "text"}
        id={id}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        required={required}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </>
  );
}
