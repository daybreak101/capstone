import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
        <ul className="navList">
            <li className="navItem">Home</li>
            <li className="navItem">About</li>
            <li className="navItem">Menu</li>
            <li className="navItem">Reservations</li>
            <li className="navItem">Order Online</li>
            <li className="navItem">Login</li>
        </ul>
    </nav>
  )
}
