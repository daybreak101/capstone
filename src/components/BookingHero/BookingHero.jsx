import React from 'react'
import './BookingHero.css'

export default function BookingHero() {
  return (
        <section className="booking-hero__background">
          <div className="booking-hero__margin">
            <div className="booking-hero">
              <div className="booking-hero__left">
                <h2 className="booking-hero__title">Reservation</h2>
                <h3 className="booking-hero__subtitle">Book Your Table</h3>
                <p className="booking-hero__text">
                  We are excited to have you here!
                  Whether you are booking for a family gathering
                  or a lunch date, we look forward to serving you.
                  Please fill the required information so we can fulfill
                  your request accordingly.
                </p>
              </div>
    
              <div className="booking-hero__right">
                <img
                  className="booking-hero__image"
                  src="images/reserved.jpg"
                  alt="Booking Hero"
                />
              </div>
    
            </div>
          </div>
        </section>
  )
}
