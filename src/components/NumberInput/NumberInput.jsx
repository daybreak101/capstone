import React from "react";
import Label from "../Label/Label";
import "./NumberInput.css";

export default function NumberInput({ num, setNum }) {

  return (
    <>
      <Label htmlFor="guests" text="Number of guests" />
      <div className="number-input__container">
        <span
          className="number-input__decrement"
          onClick={() => setNum(num > 1 ? num - 1 : num)}
        >
          -
        </span>
        <input
          className="number-input"
          type="number"
          value={num}
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <span
          className="number-input__increment"
          onClick={() => setNum(num < 10 ? num + 1 : num)}
        >
          +
        </span>
      </div>
    </>
  );
}
