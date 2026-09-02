import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    // TODO: implement footer links, if required...
    <footer className="footer__background">
      <div className="footer__margin">
        <div className="footer__container">
          <section className="footer__left">
            <img src="images/secondaryLogo.png" alt="Little Lemon Logo" />
          </section>
          <section className="footer__right">
            <div className="footer__row">
              <h2>Doormat Navigation</h2>
              <ul className="footer__list">
                <li className="footer__link">Home</li>
                <li className="footer__link">About</li>
                <li className="footer__link">Menu</li>
                <li className="footer__link">Reservations</li>
                <li className="footer__link">Order Online</li>
                <li className="footer__link">Login</li>
              </ul>
            </div>
            <div className="footer__row">
              <h2>Contact</h2>
              <ul className="footer__list">
                <li className="footer__link">Address</li>
                <li className="footer__link">Phone Number</li>
                <li className="footer__link">Email</li>
              </ul>
            </div>
            <div className="footer__row">
              <h2>Social Media Links</h2>
              <ul className="footer__list">
                <li className="footer__link">Instagram</li>
                <li className="footer__link">Facebook</li>
                <li className="footer__link">X</li>
                <li className="footer__link">Youtube</li>
                <li className="footer__link">Pinterest</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
