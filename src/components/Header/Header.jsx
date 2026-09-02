import React from "react";
import Nav from "../Nav/Nav";
import "./Header.css";
export default function Header() {
  return (
    // TODO: implement hamburger menu functionality
    // TODO: implement logo as a link to homepage
    <header className="header">
      <div className="header__container">
        <img
          className="header__hamburger"
          src="images/icon _hamburger menu_.svg"
          alt="Menu"
        />
        <div className="header__logo-container">
          <img className="header__logo" src="images/Logo.svg" alt="Header Logo" />
        </div>
        <Nav />
      </div>
    </header>
  );
}
