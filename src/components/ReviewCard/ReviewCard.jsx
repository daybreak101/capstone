import React from "react";
import "./ReviewCard.css";

export default function ReviewCard({ rating, name, image, review }) {
  return (
    <article className="review-card">
      <h2 className="review-card__rating-large">{rating}/5 ⭐</h2>
      <div className="review-card__reviewer">
        <img className="review-card__image" src={image} alt="Reviewer" />
        <div className="review-card__box">
          <h3 className="review-card__name">{name}</h3>
          <h2 className="review-card__rating-small">{rating}/5 ⭐</h2>
        </div>
      </div>
      <p className="review-card__review">{review}</p>
    </article>
  );
}
