import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/ClientLogo.png'

export default function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path: string): boolean => location.pathname === path

  const handleNavClick = (path: string) => {
    navigate(path)
    setMenuOpen(false) 
  }

  return (
    <nav className="navbar">
      <div className="nav-content">
        {/* Logo Section */}
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt="Logo" />
          <div className="logo-text">PLAYERS<br />CLUB<br />MANAGEMENT</div>
        </div>

        {/* Hamburger Button */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['/about-us', '/athletes', '/services', '/resources', '/contact-us'].map((path, index) => (
            <div
              key={index}
              className={`nav-item ${isActive(path) ? 'active' : ''}`}
              onClick={() => handleNavClick(path)}
            >
              {path.replace('/', '').replace('-', ' ').toUpperCase()}
            </div>
          ))}
        </div>

        {/* Sign In Button */}
        <div className="signin-button" onClick={() => navigate('/sign-in')}>
          Sign In
        </div>
      </div>
    </nav>
  )
}
