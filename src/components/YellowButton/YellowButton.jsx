import React from "react";
import "./YellowButton.css";

export default function YellowButton({text, styles}) {
  return <button className="yellow-button" style={styles}>{text}</button>;
}
