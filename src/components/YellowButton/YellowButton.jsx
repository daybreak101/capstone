import React, { useState } from "react";
import "./YellowButton.css";

// TODO: add a clicked effect/anim to the button
export default function YellowButton({ text, styles, onClick, type }) {
    const [anim, setAnim] = useState(false);


    const handleAnim = (e) => {
    if (anim) return;
    setAnim(true);
    setTimeout(() => {
      setAnim(false);
    }, 200);
  };

  return (
    <button
      // className="yellow-button"
      className={`yellow-button ${anim ? "yellow-button__anim" : ""}`}
      style={styles}
      onClick={() => {
        handleAnim();
        if(onClick) {
          onClick();
        }
      }}
      type={type}
    >
      {text}
    </button>
  );
}
