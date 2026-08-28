import React from "react";
import Nav from "../Nav/Nav";
import "./Header.css";
export default function Header() {
  return (
      <header className="header">
        <img
          className="headerHamburger"
          src="images/icon _hamburger menu_.svg"
          alt="Menu"
        />
        <div className="headerLogoContainer">
          <img className="headerLogo" src="images/Logo.svg" alt="Header Logo" />
        </div>
        <Nav />
      </header>
  );
}
