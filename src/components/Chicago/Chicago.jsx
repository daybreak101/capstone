import React from "react";
import "./Chicago.css";

export default function Chicago() {
  return (
    <section className="chicago__margin">
      <div className="chicago">
        <div className="chicago__left">
          <h2 className="chicago__title">Little Lemon</h2>
          <h3 className="chicago__subtitle">Chicago</h3>
          <p className="chicago__text">
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. The restaurant
            features a locally-sourced menu with daily specials.
          </p>
        </div>
        <div className="chicago__right">
          <img
            className="chicago__image1"
            src="/images/restaurant.jpg"
            alt="view of the restaurant's outdoor patio seating area"
          />
          <img
            className="chicago__image2"
            src="/images/Mario-and-Adrian-A.jpg"
            alt="The owners, Mario and Adrian, discussing their latest creation"
          />
        </div>
      </div>
    </section>
  );
}
