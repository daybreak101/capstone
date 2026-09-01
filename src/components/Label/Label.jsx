import React from 'react'
import "./Label.css"

export default function Label({htmlFor, text}) {
  return (
    <label htmlFor={htmlFor} className="label">{text}</label>
  )
}
