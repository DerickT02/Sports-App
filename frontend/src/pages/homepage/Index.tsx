import React from 'react';
import NavBar from '../../components/layout/NavBar'; // Ensure the import path is correct
import BigPictureSlider from './BigPictureSlider'; // Import the big picture slider
import Slider from './Slider'; // Import the card slider
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      {/* Navbar */}
      <NavBar /> {/* Fixed component name to match the import */}

      {/* Main Content Section */}
      <div className="main-content">
        {/* Big Picture Slider */}
        <BigPictureSlider />

        {/* Text Container */}
        <div className="responsive-text-container">
          <span className="unlock-text">
            UNLOCK YOUR FULL POTENTIAL<br />IN THE NIL
          </span>
          <span className="space-text"> SPACE</span>
          <span className="team-text">-“A team that puts athletes first”</span>
        </div>

        {/* Card Slider */}
        <Slider />

        {/* WHY CHOOSE US? Text */}
        <div className="why-choose-us">WHY CHOOSE US?</div>

        {/* Three-column Layout */}
        <div className="athlete-first-container">
          {/* Left Section */}
          <div className="athlete-first-section left">
            <div className="athlete-first-content">
              <div className="athlete-first-title">Athlete-first Approach</div>
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
              <div className="athlete-first-title">Middle Section Title</div>
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
              <div className="athlete-first-title">Right Section Title</div>
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
  );
};

export default HomePage;