import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Label from "../Label/Label";
import "./BookingForm.css";
import DatePicker from "../DatePicker/DatePicker";
import YellowButton from "../YellowButton/YellowButton";
import NumberInput from "../NumberInput/NumberInput";

export default function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState(null);

  return (
    <section className="booking-form__margin">
      <form
        className="booking-form"
        style={{
          display: "grid",
          maxWidth: "400px",
          gap: "20px",
        }}
      >
        <DatePicker date={date} setDate={setDate} />
        <Dropdown
          id="res-time"
          label="Book Time"
          options={availableTimes}
          emptyValue="Choose Time"
          defaultIcon="/images/time.png"
          setSelected={setTime}
          selected={time}
        />
        <NumberInput num={guests} setNum={setGuests} />
        <Dropdown
          id="occasion"
          label="Occasion"
          options={["Birthday", "Engagement", "Anniversary"]}
          emptyValue="Occasion"
          defaultIcon="/images/cheers.png"
          setSelected={setOccasion}
          selected={occasion}
        />
        <YellowButton
          text="Make Your Reservation"
          styles={{
            width: "100%",
            height: "80px",
            fontSize: "24px",
            fontWeight: "700",
            borderRadius: "16px",
            marginTop: "50px",
            marginBottom: "50px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
          type="submit"
        />
      </form>
    </section>
  );
}
