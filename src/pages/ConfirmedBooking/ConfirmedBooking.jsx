import React from 'react'
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import ConfirmationHero from "../../components/ConfirmationHero/ConfirmationHero";
import YellowButton from '../../components/YellowButton/YellowButton';
import { useNavigate, useLocation } from "react-router-dom";

export default function ConfirmedBooking() {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;

    
    const dateUS = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(data.date);  
  return (
    <>
        <Header />
        <Main>
          <ConfirmationHero />
          {/* confirmation details here */}
          <>
            <h2>Confirmation Details</h2>
            <span>Date: {dateUS}</span>
            <span>Time: {data.time}</span>
            <span>Guests: {data.guests}</span>
            <span>Occasion: {data.occasion}</span>
          </>
          {/* return to home button */}
          <YellowButton
            text="Return to Home"
            onClick={() => {
              navigate("/");
            }}
          />

        </Main>
        <Footer />
    </>
  )
}
