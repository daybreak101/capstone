import React from "react";
import "./SpecialsCard.css";

export default function SpecialsCard({ image, title, description, price }) {
  return (
    <article className="specials-card">
      <div className="specials-card__content">
        <div
          className="specials-card__image"
          role="img"
          aria-label={title}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="specials-card__text">
          <div className="specials-card__header">
            <h2 className="specials-card__title">{title}</h2>
            <p className="specials-card__price">{price}</p>
          </div>
          <p className="specials-card__description">{description}</p>
        </div>
      </div>

      <div className="specials-card__button-container">
        <h3>Order Delivery </h3>
        <img className="scooter" src="/images/scooter.svg" alt="" />
      </div>
    </article>
  );
}
