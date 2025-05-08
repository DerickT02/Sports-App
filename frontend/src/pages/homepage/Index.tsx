import React from 'react'
import Slider from './Slider'
import './HomePage.css'

const HomePage = () => {
  return (
    <>
    <div className="homepage-wrapper">
      {/* Main Content Section */}
      <div className="main-content">
        <div className="scrollable-content">
          <div className='responsive-text-container'>
            <div className='title'>
              <div className='title-text'>
                <p>A team that puts</p>
              </div>
            
              <div className='title-text'>
                <h2>Players First</h2>
              </div>
              
            
            </div>
          </div>
          
            <Slider /> 
         
          <div className='responsive-text-container'>
            <h2>Why choose us</h2>
            <div className="info-columns">
              <div className="info-card">
                <h3>Athlete First Approach</h3>
                <p>
                  We prioritize the needs and goals of athletes in everything we do. Our holistic support ensures long-term success both on and off the field.
                </p>
              </div>
              <div className="info-card">
                <h3>Financial Success</h3>
                <p>
                  Our strategies are designed to help athletes make smart financial decisions, build wealth, and secure their futures beyond sports.
                </p>
              </div>
              <div className="info-card">
                <h3>Sponsors</h3>
                <p>
                  We connect athletes with aligned brand partners and negotiate deals that reflect their values, audience, and long-term vision.
                </p>
              </div>
            </div>

          </div>
          

          </div>
        {/* end scrollable-content */}
      </div>
      {/* end main-content */}
      
      <footer className="homepage-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@sportsapp.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Sports App. All rights reserved.</p>
        </div>
      </footer>
    </div>
    {/* end homepage-wrapper */}
    
    </>
  )
}

export default HomePage
