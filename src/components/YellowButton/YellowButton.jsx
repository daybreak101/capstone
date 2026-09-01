import React from "react";
import "./YellowButton.css";

export default function YellowButton({text, styles, onClick, type}) {
  return <button className="yellow-button" style={styles} onClick={onClick} type={type}>{text}</button>;
}
