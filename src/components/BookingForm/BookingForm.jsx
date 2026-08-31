import React from "react";
import Dropdown from "../Dropdown/Dropdown";

export default function BookingForm() {
  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" />
      <Dropdown
        id="res-time"
        label="Book Time"
        options={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}
      />
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <Dropdown
        id="occasion"
        label="Occasion"
        options={["Birthday","Engagement", "Anniversary"]}
      />
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
