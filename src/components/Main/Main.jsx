import React from 'react'
import './Main.css'

export default function Main({children}) {
  return (
    // Created container for page content
    // Container serves as a responsive wrapper
    <main className="main">
      {children}
    </main>
  )
}
