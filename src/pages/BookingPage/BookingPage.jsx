import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import BookingHero from "../../components/BookingHero/BookingHero";
import BookingForm from "../../components/BookingForm/BookingForm";

// fetching from public API given by Coursera seems to fail
// so we are using a local API instead, hence the window.fetchAPI
// The api.js file is a direct copy of the API file; it is located in the public folder
export function initializeTimes() {
  // I could just use today's timeslots:
  return window.fetchAPI(new Date());

  // This was the code pre-API, just leaving it here for reference
  // return [
  //   '17:00',
  //   '18:00',
  //   '19:00',
  //   '20:00',
  //   '21:00',
  //   '22:00',
  // ]
}

// set state by "return", based on action executed elsewhere that gets
// sent here. Depending on action type and data passed, state is updated
export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return window.fetchAPI(new Date(action.date));
  }
  return state;
}

export default function BookingPage() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return (
    <>
      <Header />
      <Main>
        <BookingHero />
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          onSubmit={(e) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);

            for (const [key, value] of formData.entries()) {
              console.log(key, value, typeof value);
            }

            const result = window.submitAPI(formData);

            console.log("Submission successful:", result);
            navigate("/confirmation", {
              state: {
                date: formData.get("date"),
                time: formData.get("res-time"),
                firstName: formData.get("firstName"),
                lastName: formData.get("lastName"),
                phoneNumber: formData.get("phoneNumber"),
                guests: formData.get("guests"),
                occasion: formData.get("occasion"),
              }
            });

          }}
        />
      </Main>
      <Footer />
    </>
  );
}
