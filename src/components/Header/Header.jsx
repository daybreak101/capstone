import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <img
          className={`header__hamburger ${isOpen ? "header__hamburger__open" : ""}`}
          src="images/icon _hamburger menu_.svg"
          alt="Menu"
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className="header__logo-container">
          <Link to="/">
            <img
              className="header__logo"
              src="images/Logo.svg"
              alt="Header Logo"
            />
          </Link>
        </div>
        <Nav />
      </div>
      <div
        className={`menu__background ${isOpen ? "menu__background__open" : ""}`}
      >
        <div className="menu__container">
          <ul className="menu__list">
            <li className="menu__link">
              <Link to="/">Home</Link>
            </li>
            <li className="menu__link">About</li>
            <li className="menu__link">Menu</li>
            <li className="menu__link">
              <Link to="/booking">Reservation</Link>
            </li>
            <li className="menu__link">Order Online</li>
            <li className="menu__link">Login</li>
          </ul>
          <div className="menu__close">
            <img
              className="menu__close__icon"
              src="images/close.png"
              alt="Close Menu"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
