import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    // TODO: implement links, if required...
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">Home</li>
            <li className="nav__item">About</li>
            <li className="nav__item">Menu</li>
            <li className="nav__item">Reservations</li>
            <li className="nav__item">Order Online</li>
            <li className="nav__item">Login</li>
        </ul>
    </nav>
  )
}
