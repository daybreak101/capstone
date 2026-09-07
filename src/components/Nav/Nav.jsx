import React from 'react'
import './Nav.css'
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item"><Link to="/">Home</Link></li>
            <li className="nav__item">About</li>
            <li className="nav__item">Menu</li>
            <li className="nav__item"><Link to="/booking">Reservation</Link></li>
            <li className="nav__item">Order Online</li>
            <li className="nav__item">Login</li>
        </ul>
    </nav>
  )
}
