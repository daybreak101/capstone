import React from "react";
import "./Specials.css";
import SpecialsCard from "../SpecialsCard/SpecialsCard";
import YellowButton from "../YellowButton/YellowButton";

export default function Specials() {
  return (
    <section className="specials__margin">
      <div className="specials">
        <div className="specials__header">
          <h2 className="specials__title">This Week's Specials</h2>
          <YellowButton text="Online Menu" styles={undefined} />
        </div>
        <div className="specials__container">
          <SpecialsCard
            image="/images/greek-salad.jpg"
            title="Greek Salad"
            description="The famous greek salad of crispy lettuce,
            peppers, olives, and our Chicago-style feta cheese,
            garnished with crunchy garlic and rosemary croutons."
            price="$12.99"
          />
          <SpecialsCard
            image="/images/bruchetta.svg"
            title="Bruchetta"
            description="Our Bruschetta is made from grilled bread
            that has been smeared with garlic and seasoned with salt
            and olive oil."
            price="$5.99"
          />
          <SpecialsCard
            image="/images/lemon-dessert.jpg"
            title="Lemon Dessert"
            description="This comes straight from grandma's recipe, every
            last ingredient has been sourced and is as authentic as
            can be imagined."
            price="$5.00"
          />
        </div>
      </div>
    </section>
  );
}
