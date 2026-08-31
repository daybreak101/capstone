import React from "react";
import "./CallToAction.css";
import YellowButton from "../YellowButton/YellowButton";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="call-to-action__background">
      <div className="call-to-action__margin">
        <div className="call-to-action">
          <div className="call-to-action__left">
            <h2 className="call-to-action__title">Little Lemon</h2>
            <h3 className="call-to-action__subtitle">Chicago</h3>
            <p className="call-to-action__text">
              We are a family-owned Mediterranean restaurant, focusing on
              traditional recipes served with a modern twist.
            </p>
            <YellowButton
              text="Reserve a Table"
              styles={{ marginTop: "20px" }}
              onClick={() => navigate("/booking")}
            />
          </div>

          <div className="call-to-action__right">
            <img
              className="call-to-action__image"
              src="images/restauranfood.jpg"
              alt="Call to Action"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
