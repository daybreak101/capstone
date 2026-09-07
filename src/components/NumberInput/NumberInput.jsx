import React, { useState } from "react";
import Label from "../Label/Label";
import "./NumberInput.css";

export default function NumberInput({ num, setNum, required }) {
  const [focus, setFocus] = useState(false);
  const [leftFocus, setLeftFocus] = useState(false);
  const [rightFocus, setRightFocus] = useState(false);
  const [decrementAnim, setDecrementAnim] = useState(false);
  const [incrementAnim, setIncrementAnim] = useState(false);

  const handleLeftAnim = (e) => {
    if (decrementAnim) return;
    setDecrementAnim(true);
    setTimeout(() => {
      setDecrementAnim(false);
    }, 200);
  };

  const handleRightAnim = (e) => {
    if (incrementAnim) return;
    setIncrementAnim(true);
    setTimeout(() => {
      setIncrementAnim(false);
    }, 200);
  };

  return (
    <>
      <Label htmlFor="guests" text="Number of guests" />
      <div
        className="number-input__container"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        <button
          type="button"
          className={`number-input__decrement ${leftFocus ? "number-input__decrement--focused" : ""} ${decrementAnim ? "number-input__decrement--anim" : ""}`}
          aria-label="Decrease the number of guests"
          onClick={() => {
            setNum(num > 1 ? num - 1 : num);
            handleLeftAnim();
          }}
          onFocus={() => setLeftFocus(true)}
          onBlur={() => setLeftFocus(false)}
        >
          -
        </button>
        <input
          name="guests"
          // className="number-input"
          className={`number-input ${focus ? "number-input__focus" : num ? "number-input__filled" : ""}`}
          type="number"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          required={required}
        />
        <button
          type="button"
          className={`number-input__increment ${rightFocus ? "number-input__increment--focused" : ""} ${incrementAnim ? "number-input__increment--anim" : ""}`}
          aria-label="Increase the number of guests"
          onClick={() => {
            setNum(num < 10 ? num + 1 : num);
            handleRightAnim();
          }}
          onFocus={() => setRightFocus(true)}
          onBlur={() => setRightFocus(false)}
        >
          +
        </button>
      </div>
    </>
  );
}
