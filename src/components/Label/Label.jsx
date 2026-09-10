import React from 'react'
import "./Label.css"

// Reusable component for labels on form inputs for CSS consistency
export default function Label({htmlFor, text}) {
  return (
    <label htmlFor={htmlFor} className="label">{text}</label>
  )
}
