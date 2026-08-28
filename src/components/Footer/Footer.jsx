import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footerLeft">
        <img src="images/secondaryLogo.png" alt="Footer Logo"  />
      </section>
      <section className="footerRight">
        <div className="footerRow">
          <h2>Doormat Navigation</h2>
          <ul className="footerList">
            <li className="footerLink">Home</li>
            <li className="footerLink">About</li>
            <li className="footerLink">Menu</li>
            <li className="footerLink">Reservations</li>
            <li className="footerLink">Order Online</li>
            <li className="footerLink">Login</li>
          </ul>
        </div>
        <div className="footerRow">
          <h2>Contact</h2>
          <ul className="footerList">
            <li className="footerLink">Address</li>
            <li className="footerLink">Phone Number</li>
            <li className="footerLink">Email</li>
          </ul>
        </div>
        <div className="footerRow">
          <h2>Social Media Links</h2>
          <ul className="footerList">
            <li className="footerLink">Instagram</li>
            <li className="footerLink">Facebook</li>
            <li className="footerLink">X</li>
            <li className="footerLink">Youtube</li>
            <li className="footerLink">Pinterest</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
