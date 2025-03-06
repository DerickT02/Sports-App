import React, { useState } from 'react';
import './contact.css';

const Contact: React.FC = () => {
  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission (e.g., send the data to an API)
    console.log({ fullName, email, message });
    // Reset form fields (optional)
    setFullName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      
      <div className="contact-intro">
        <p className="contact-subtitle">Questions? Want to Collaborate?</p>
        <p className="contact-description">
          Reach out today and our team will get back to you as soon as possible.
        </p>
      </div>
      
      <div className="contact-info">
        <h2>Contact Info:</h2>
        <p><strong>Phone:</strong> (909) 232-2422</p>
        <p><strong>Email:</strong> playersclubmgmtsjz@gmail.com</p>
        <p><strong>Instagram:</strong> @playersclubmgmt</p>
      </div>
      
      <div className="contact-form-section">
        <h2>Inquiry Form:</h2>
        <p>Fill out the form below, and we’ll get in touch with you soon.</p>
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            required 
          />
          
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          ></textarea>
          
          <button type="submit">Submit an Inquiry</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
