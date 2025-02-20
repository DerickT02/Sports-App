import React from 'react'

export default function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
      Sports-App
      </a>
      <ul>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
        <a href="/athletes">Athletes</a>
        </li>
        <li>
        <a href="/contact">Services</a>
        </li>
        <li>
        <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
