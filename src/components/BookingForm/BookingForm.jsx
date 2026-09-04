import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Label from "../Label/Label";
import "./BookingForm.css";
import DatePicker from "../DatePicker/DatePicker";
import YellowButton from "../YellowButton/YellowButton";
import NumberInput from "../NumberInput/NumberInput";
import { Formik } from "formik";

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

  return (
    <section className="booking-form__margin">
      <Formik
        initialValues={{
          date: () => {
            const date = new Date();
            date.setDate(date.getDate());
            const yyyy = date.getFullYear();
            const mm = String(date.getMonth() + 1).padStart(2, "0");
            const dd = String(date.getDate()).padStart(2, "0");
            return `${yyyy}-${mm}-${dd}`;
          },
          time: "",
          guests: 1,
          occasion: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.phoneNumber) {
            errors.phoneNumber = "Required";
          }
          if (!values.date) {
            errors.date = "Required";
          }
          if (!values.time) {
            errors.time = "Required";
          }
          if (!values.guests) {
            errors.guests = "Required";
          }
          // occasion is not required
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => <>{/* insert form here; https://formik.org/docs/overview*/}</>}
      </Formik>
      <form
        className="booking-form"
        style={{
          display: "grid",
          maxWidth: "400px",
          gap: "20px",
        }}
        onSubmit={onSubmit}
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
