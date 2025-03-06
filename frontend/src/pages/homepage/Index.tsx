import React from 'react'
import sliderImage from '../../assets/SlideNumber.png'
import Slider from './Slider'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      {/* Main Content Section */}
      <div className="main-content">
        <div className="scrollable-content">
          {/* Text Container */}
          <div className="responsive-text-container">
            <span className="unlock-text">
              UNLOCK YOUR FULL POTENTIAL<br />IN THE NIL
            </span>
            <span className="space-text"> SPACE</span>
            <span className="team-text">-“A team that puts athletes first”</span>
          </div>

          {/* Slider Image */}
          <div className="slider-image-container">
            <img
              src={sliderImage}
              alt="Slider"
              className="slider-image"
            />
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
          {/* end athlete-first-container */}
        </div>
        {/* end scrollable-content */}
      </div>
      {/* end main-content */}
    </div>
    /* end homepage-wrapper */
  )
}

export default HomePage
