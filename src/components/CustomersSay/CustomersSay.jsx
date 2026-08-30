import React from "react";
import "./CustomersSay.css";
import ReviewCard from "../ReviewCard/ReviewCard";

export default function CustomersSay() {
  return (
    <section className="customers-say__background">
      <div className="customers-say__margin">
        <div className="customers-say">
          <div className="customers-say__header">
            <h1 className="customers-say__title">Testimonials</h1>
          </div>
          <div className="customers-say__container">
            <ReviewCard
              rating={4}
              name="John"
              image="/images/reviewers/john.jpg"
              review="The Lemon Dessert is deliciously sweet... 
              But not as sweet as my wife!"
            />
            <ReviewCard
              rating={5}
              name="Sarah"
              image="/images/reviewers/sarah.jpg"
              review="John keeps saying I'm his wife. I just go along with it for the free lemon dessert!"
            />
            <ReviewCard
              rating={4}
              name="Patrick"
              image="/images/reviewers/patrick.jpg"
              review="The bruchetta here is the best thing ever!"
            />
            <ReviewCard
              rating={4}
              name="Reina"
              image="/images/reviewers/reina.jpg"
              review="Greek Salad is as delicious as it is refreshing!"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
