import React from "react";
import "./DatePicker.css";
import Label from "../Label/Label";

export default function DatePicker({ date, setDate }) {
  const tomorrow = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const threeMonths = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 3);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <>
      <Label htmlFor="res-date" text="Choose date" />
      <input
        name="date"
        type="date"
        id="res-date"
        min={tomorrow()}
        max={threeMonths()}
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
    </>
  );
}
