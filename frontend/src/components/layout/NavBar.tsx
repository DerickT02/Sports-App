import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/ClientLogo.png'

export default function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  // Helper function: checks if the current route is active
  const isActive = (path: string): boolean => location.pathname === path

  return (
    <div className="header-container">
      <div className="header-content">
        {/* Logo + Divider + Text */}
        <div
          className="logo-section"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          <img src={logo} alt="Logo" className="logo-image" />
          <svg
            className="divider"
            width="2"
            height="62"
            viewBox="0 0 2 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.946899 0.787964V61.5172"
              stroke="white"
              strokeWidth="1.67915"
            />
          </svg>
          <div className="logo-text">
            PLAYERS<br />CLUB<br />MANAGMENT
          </div>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <div
            className={`nav-item ${isActive('/about-us') ? 'active' : ''}`}
            onClick={() => navigate('/about-us')}
            style={{ cursor: 'pointer' }}
          >
            About Us
          </div>
          <div
            className={`nav-item ${isActive('/athletes') ? 'active' : ''}`}
            onClick={() => navigate('/athletes')}
            style={{ cursor: 'pointer' }}
          >
            Athletes
          </div>
          <div
            className={`nav-item ${isActive('/services') ? 'active' : ''}`}
            onClick={() => navigate('/services')}
            style={{ cursor: 'pointer' }}
          >
            Services
          </div>
          <div
            className={`nav-item ${isActive('/resources') ? 'active' : ''}`}
            onClick={() => navigate('/resources')}
            style={{ cursor: 'pointer' }}
          >
            Resources
          </div>
          <div
            className={`nav-item ${isActive('/contact-us') ? 'active' : ''}`}
            onClick={() => navigate('/contact-us')}
            style={{ cursor: 'pointer' }}
          >
            Contact Us
          </div>
        </div>

        {/* Sign In */}
        <div
          className="signin-button"
          onClick={() => navigate('/sign-in')}
          style={{ cursor: 'pointer' }}
        >
          <div className="signup-text">Sign In</div>
        </div>
      </div>
    </div>
  )
}
