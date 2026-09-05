import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Label from "../Label/Label";
import "./BookingForm.css";
import DatePicker from "../DatePicker/DatePicker";
import YellowButton from "../YellowButton/YellowButton";
import NumberInput from "../NumberInput/NumberInput";
import TextInput from "../TextInput/TextInput";

export default function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const [date, setDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate());
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  });
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  const phoneRegex = /^\+?[\d\s()-]{7,20}$/;

  // check if the form is valid before submitting
  const validate = (e) => {
    e.preventDefault();
    const errors = {};
    if (!time) errors.time = "Timeslot is required";
    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!phoneRegex.test(phoneNumber.trim())) {
      errors.phoneNumber = "Enter a valid phone number";
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) onSubmit(e);
  };

  return (
    <section className="booking-form__margin">
      <form
        className="booking-form"
        style={{
          display: "grid",
          maxWidth: "400px",
          gap: "20px",
        }}
        onSubmit={validate}
        noValidate
      >
        <DatePicker
          date={date}
          setDate={(newDate) => {
            setDate(newDate);
            dispatch({
              type: "UPDATE_TIMES",
              date: newDate,
            });
          }}
        />
        <Dropdown
          id="res-time"
          label="Book Time"
          options={availableTimes}
          emptyValue="Choose Time"
          defaultIcon="/images/time.png"
          setSelected={setTime}
          selected={time}
        />
        {errors.time && <p className="error">{errors.time}</p>}
        <TextInput
          id="firstName"
          label="First Name"
          placeholder="Enter First Name"
          setValue={setFirstName}
          value={firstName}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
        <TextInput
          id="lastName"
          label="Last Name"
          placeholder="Enter Last Name"
          setValue={setLastName}
          value={lastName}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
        <TextInput
          id="phoneNumber"
          label="Enter Phone Number"
          placeholder="Phone Number"
          setValue={setPhoneNumber}
          value={phoneNumber}
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
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
