import React, {useState, useReducer} from 'react'
import './BookingPage.css'
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import BookingHero from "../../components/BookingHero/BookingHero";
import BookingForm from "../../components/BookingForm/BookingForm";

function initializeTimes() {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]
}

function updateTimes(state, action){
  return state;
}

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  )

  return (
    <>
      <Header />
      <Main>
        <BookingHero />
        <BookingForm 
          availableTimes={availableTimes}
          dispatch={dispatch}
        />
      </Main>
      <Footer />
    </>
  );
}
