import React from 'react';
import '../pages/homepage/HomePage.css';

const Footer = () => {
  return (
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
  );
};

export default Footer; 