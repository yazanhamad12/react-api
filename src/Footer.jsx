import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
    <div className="container">
      <p>&copy; pizza.</p>
      <ul className="list-unstyled d-flex justify-content-center">
        <li><a href="#home" className="text-white mx-3">Home</a></li>
        <li><a href="#about" className="text-white mx-3">About</a></li>
        <li><a href="#contact" className="text-white mx-3">Contact</a></li>
      </ul>
    </div>
  </footer>
  
  )
}
