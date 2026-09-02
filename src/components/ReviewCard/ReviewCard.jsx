import React from "react";
import "./ReviewCard.css";

export default function ReviewCard({ rating, name, image, review }) {
  return (
    <article className="review-card">
      <h2 className="review-card__rating-large">{rating}/5 ⭐</h2>
      <div className="review-card__reviewer">
        <img className="review-card__image" src={image} alt={`${name} profile`} />
        <div className="review-card__box">
          <h3 className="review-card__name">{name}</h3>
          {/* aria-hidden is used to hide the text from screen readers, as it is a duplicate meant for responsive design */}
          <h2 className="review-card__rating-small" aria-hidden={true}>{rating}/5 ⭐</h2> 
        </div>
      </div>
      <p className="review-card__review">{review}</p>
    </article>
  );
}
