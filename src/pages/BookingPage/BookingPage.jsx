import React from 'react'
import './BookingPage.css'
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import BookingHero from "../../components/BookingHero/BookingHero";
import BookingForm from "../../components/BookingForm/BookingForm";

export default function BookingPage() {
  return (
    <>
      <Header />
      <Main>
        <BookingHero />
        <BookingForm />
      </Main>
      <Footer />
    </>
  );
}
