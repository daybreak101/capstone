import React from 'react'
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import ConfirmationHero from "../../components/ConfirmationHero/ConfirmationHero";
import ConfirmationDetails from "../../components/ConfirmationDetails/ConfirmationDetails";
import YellowButton from '../../components/YellowButton/YellowButton';
import { useNavigate } from "react-router-dom";

export default function ConfirmedBooking() {
    const navigate = useNavigate();
  return (
    <>
        <Header />
        <Main>
          <ConfirmationHero />
          {/* confirmation details here */}
          <>
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
