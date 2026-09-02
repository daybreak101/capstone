import React from 'react'
import './ConfirmationHero.css'

export default function ConfirmationHero() {
  return (
        <section className="confirmation-hero__background">
          <div className="confirmation-hero__margin">
            <div className="confirmation-hero">
              <div className="confirmation-hero__left">
                <h2 className="confirmation-hero__title">Thank You!</h2>
                <h3 className="confirmation-hero__subtitle">for reserving your table at 
                    Little Lemon Restaurant!
                </h3>
                <p className="confirmation-hero__text">
                  We hope to see you soon!
                  Please arrive 15 minutes before your 
                  reservation to ensure timely and
                  smooth service. 
                  We hope you enjoy your time here!
                </p>
              </div>
    
              <div className="confirmation-hero__right">
                <img
                  className="confirmation-hero__image"
                  src="images/reserved.jpg"
                  alt="Booking Hero"
                />
              </div>
    
            </div>
          </div>
        </section>
  )
}
