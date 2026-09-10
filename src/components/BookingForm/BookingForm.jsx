import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./BookingForm.css";
import DatePicker from "../DatePicker/DatePicker";
import YellowButton from "../YellowButton/YellowButton";
import NumberInput from "../NumberInput/NumberInput";
import TextInput from "../TextInput/TextInput";

// TODO: develop README file and setup instructions
// and for running the project
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
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  const phoneRegex = /^\+?[\d\s()-]{7,20}$/;
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;

  // check if the form is valid before submitting
  const validate = (e) => {
    e.preventDefault();
    const errors = {};
    //setting a date such as February 31 makes the date "empty"
    //so we set as invalid
    if (!date) errors.date = "Date is invalid";
    else {
      //if somehow either day, month or year is missing, we set as invalid
      const dateArr = date.split("-");
      if (dateArr.length !== 3) errors.date = "Date is invalid";
      else {       
        //focus on the date, check if it is in the past
        const year = parseInt(dateArr[0]);
        const month = parseInt(dateArr[1]);
        const day = parseInt(dateArr[2]);
        const today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);
        const dateParsed = new Date(year, month - 1, day);
        console.log(dateParsed.getTime());
        console.log(today.getTime());
        if (dateParsed.getTime() < today.getTime())
          errors.date = "Date is in the past";

        //edge case: if date is today, but selected time is in the past,
        //show the error under booking time dropdown 
        dateParsed.setHours(time.split(":")[0]);
        dateParsed.setMinutes(time.split(":")[1]);
        if (dateParsed.getTime() < today.getTime())
          errors.time = "Booking time is in the past";

        //otherwise, check if the date is generally valid
        if (year < 2026 || year > 3000) errors.date = "Date is invalid";
        else if (month < 1 || month > 12) errors.date = "Date is invalid";
        else if (day < 1 || day > 31) errors.date = "Date is invalid";
      }
    }
    // since time slot options are fed through API, it 
    // will always be valid. Therefore, we only check if
    // user has not selected a time slot
    if (!time) errors.time = "Timeslot is required";
    //HTML already checks length of first name and last name
    //and the inputted phone number.
    //Therefore, we only check if name is valid structure
    //using valid characters with a regex.
    if (!firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (!nameRegex.test(firstName.trim())) {
      errors.firstName = "Enter a valid first name";
    }
    if (!lastName.trim()) {
      errors.lastName = "Last name is required";
    } else if (!nameRegex.test(lastName.trim())) {
      errors.lastName = "Enter a valid last name";
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!phoneRegex.test(phoneNumber.trim())) {
      errors.phoneNumber = "Enter a valid phone number";
    }
    //guests input can only be a number, so we check if
    //it is in a correct range. 
    //It was not specified in the requirements, but
    //I chose to set the range as 1 to 10.
    if (guests < 1 || guests > 10) {
      errors.guests = "Number of guests must be between 1 and 10";
    }

    //if there are errors, display them
    setErrors(errors);
    //if there are no errors, submit the form
    if (Object.keys(errors).length === 0) onSubmit(e);
  };

  return (
    <section className="booking-form__margin">
      <form
        className="booking-form"
        aria-label="Booking Form"
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
          required={true}
        />
        {errors.date && <p className="error">{errors.date}</p>}
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
          required={true}
          max={50}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
        <TextInput
          id="lastName"
          label="Last Name"
          placeholder="Enter Last Name"
          setValue={setLastName}
          value={lastName}
          required={true}
          max={50}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
        <TextInput
          id="phoneNumber"
          label="Enter Phone Number"
          placeholder="Phone Number"
          setValue={setPhoneNumber}
          value={phoneNumber}
          required={true}
          type="tel"
          max={20}
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        <NumberInput num={guests} setNum={setGuests} required={true} />
        {errors.guests && <p className="error">{errors.guests}</p>}
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
