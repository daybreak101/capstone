import React from "react";
import "./SpecialsCard.css";

export default function SpecialsCard({ image, title, description, price }) {
  return (
    <article className="specials-card">
      <div className="specials-card__content">
        <div
          className="specials-card__image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="specials-card__text">
          <div className="specials-card__header">
            <div className="specials-card__title">{title}</div>
            <div className="specials-card__price">{price}</div>
          </div>
          <div className="specials-card__description">{description}</div>
        </div>
      </div>

      <div className="specials-card__button-container">
        <h3>Order Delivery </h3>
        <img className="scooter" src="/images/scooter.svg" alt="Scooter" />
      </div>
    </article>
  );
}
