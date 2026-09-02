import React from "react";
import Label from "../Label/Label";
import "./NumberInput.css";

export default function NumberInput({ num, setNum }) {
  return (
    <>
      <Label htmlFor="guests" text="Number of guests" />
      <div className="number-input__container">
        <button
          type="button"
          className="number-input__decrement"
          aria-label="Decrease the number of guests"
          onClick={() => setNum(num > 1 ? num - 1 : num)}
        >
          -
        </button>
        <input
          name="guests"
          className="number-input"
          type="number"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <button
          type="button"
          className="number-input__increment"
          aria-label="Increase the number of guests"
          onClick={() => setNum(num < 10 ? num + 1 : num)}
        >
          +
        </button>
      </div>
    </>
  );
}
