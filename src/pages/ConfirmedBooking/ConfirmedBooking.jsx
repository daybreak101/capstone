import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import ConfirmationHero from "../../components/ConfirmationHero/ConfirmationHero";
import YellowButton from "../../components/YellowButton/YellowButton";
import { useNavigate, useLocation } from "react-router-dom";
import "./ConfirmedBooking.css";

export default function ConfirmedBooking() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;


  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate =  new Date(data.date).toLocaleDateString("en-US", options);
  return (
    <>
      <Header />
      <Main>
        <ConfirmationHero />
        {/* confirmation details here */}
        <section className="confirmation-details__margin">
          <div className="confirmation-details">
            <h2 className="confirmation-details__title">
              Confirmation Details
            </h2>

            <div className="confirmation-details__container">
              <span className="confirmation-details__subtitle">Date: </span>
              <span className="confirmation-details__text">{formattedDate}</span>

              <span className="confirmation-details__subtitle">Time:</span>
              <span className="confirmation-details__text">{data.time}</span>

              <span className="confirmation-details__subtitle">First Name:</span>
              <span className="confirmation-details__text">{data.firstName}</span>

              <span className="confirmation-details__subtitle">Last Name:</span>
              <span className="confirmation-details__text">{data.lastName}</span>

              <span className="confirmation-details__subtitle">Phone Number:</span>
              <span className="confirmation-details__text">{data.phoneNumber}</span>

              <span className="confirmation-details__subtitle">Guests:</span>
              <span className="confirmation-details__text">{data.guests}</span>

              <span className="confirmation-details__subtitle">Occasion:</span>
              <span className="confirmation-details__text">
                {data.occasion}
              </span>
            </div>

            {/* return to home button */}
            <YellowButton
              text="Return to Home"
              onClick={() => {
                navigate("/");
              }}
              styles={{
                alignSelf: "center",
                marginBottom: "50px",
              }}
            />
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}
