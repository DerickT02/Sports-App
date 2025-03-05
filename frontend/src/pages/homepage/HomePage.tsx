import React from 'react';
import logo from './assets/ClientLogo.png';
import sliderImage from './assets/SlideNumber.png'; // Import the slider image
import backgroundImage from './assets/logoBackground.png'; // Import the background image
import Slider from './Slider'; // Import the Slider component
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      {/* Background Photo */}
      <div
        className="background-photo"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Header Section */}
      <div className="header-container">
        <div className="header-content">
          {/* Logo and Text Section */}
          <div className="logo-section">
            <img
              src={logo}
              alt="Logo"
              className="logo-image"
            />
            <svg
              className="divider"
              width="2"
              height="62"
              viewBox="0 0 2 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.946899 0.787964V61.5172" stroke="white" strokeWidth="1.67915" />
            </svg>
            <div className="logo-text">
              PLAYERS<br />CLUB<br />MANAGMENT
            </div>
          </div>

          {/* Navigation Links */}
          <div className="nav-links">
            <div className="nav-item">About</div>
            <div className="nav-item">Athletes</div>
            <div className="nav-item">Contacts</div>
          </div>

          {/* Sign Up Button */}
          <div className="signup-button">
            <div className="signup-text">Sign Up</div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="main-content">
        <div className="scrollable-content">
          {/* Text Container */}
          <div className="responsive-text-container">
            <span className="unlock-text">
              UNLOCK YOUR FULL POTENTIAL<br />IN THE{' '}
            </span>
            <span className="nil-text">
              NIL
            </span>
            <span className="space-text">
              {' '}SPACE
            </span>
            <span className="team-text">
              -“A team that puts athletes first”
            </span>
          </div>

          {/* Slider Image */}
          <div className="slider-image-container">
            <img
              src={sliderImage} // Use the imported image or a URL
              alt="Slider"
              className="slider-image"
            />
          </div>

          {/* Card Slider */}
          <Slider />

          {/* WHY CHOOSE US? Text */}
          <div className="why-choose-us">
            WHY CHOOSE US?
          </div>

          {/* Three-column Layout for Athlete-first Approach Sections */}
          <div className="athlete-first-container">
            {/* Left Section */}
            <div className="athlete-first-section left">
              <div className="athlete-first-content">
                <div className="athlete-first-title">
                  Athlete-first Approach
                </div>
                <svg
                  className="divider-line"
                  width="463"
                  height="2"
                  viewBox="0 0 463 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1L463 0.99996" stroke="#C55A2B" />
                </svg>
                <div className="athlete-first-description">
                  We prioritize the long-term success and well-being of our athletes.
                </div>
              </div>
            </div>

            {/* Middle Section */}
            <div className="athlete-first-section middle">
              <div className="athlete-first-content">
                <div className="athlete-first-title">
                  Middle Section Title
                </div>
                <svg
                  className="divider-line"
                  width="463"
                  height="2"
                  viewBox="0 0 463 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1L463 0.99996" stroke="#C55A2B" />
                </svg>
                <div className="athlete-first-description">
                  This is the middle section description.
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="athlete-first-section right">
              <div className="athlete-first-content">
                <div className="athlete-first-title">
                  Right Section Title
                </div>
                <svg
                  className="divider-line"
                  width="463"
                  height="2"
                  viewBox="0 0 463 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1L463 0.99996" stroke="#C55A2B" />
                </svg>
                <div className="athlete-first-description">
                  This is the right section description.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;