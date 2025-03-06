import React from 'react'
import { useNavigate } from 'react-router-dom'


import './Services.css'

function Services() {
  const navigate = useNavigate()
  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <p className="services-intro">
        At Players Club Management, we offer a range of services designed to help student-athletes
        maximize their Name, Image, and Likeness (NIL) opportunities. Our expertise ensures athletes
        get the best possible deals while building a sustainable personal brand.
      </p>

      <div className="service-item">
        <h2>NIL Deal Negotiation</h2>
        <p>
          We work closely with brands and businesses to negotiate fair and beneficial NIL deals for
          our athletes. Our team ensures that each contract aligns with the athlete’s goals and
          long-term success.
        </p>
      </div>

      <div className="service-item">
        <h2>Sponsorship &amp; Endorsement Opportunities</h2>
        <p>
          Connecting athletes with the right sponsors is our specialty. We seek out partnerships
          that enhance our athletes' brand value and provide meaningful financial opportunities.
        </p>
      </div>

      <div className="service-item">
        <h2>Social Media Growth &amp; Monetization</h2>
        <p>
          We help athletes expand their online presence and monetize their social media platforms
          effectively. From content strategy to engagement optimization, we ensure athletes maximize
          their digital impact.
        </p>
      </div>

      <div className="service-item">
        <h2>Personal Branding &amp; Marketing Strategy</h2>
        <p>
          Building a strong personal brand is key to long-term success. We assist athletes in
          developing their brand identity, creating compelling content, and positioning themselves
          as marketable figures in the sports industry.
        </p>
      </div>

      <div className="service-item">
        <h2>Financial Literacy &amp; Contract Review</h2>
        <p>
          Understanding NIL earnings and contract terms is crucial. We provide financial literacy
          education and contract review services to ensure our athletes make informed decisions
          about their earnings and agreements. We also offer specialized training and workshops to
          educate athletes about NIL opportunities, contract reviews, and financial management.
        </p>
      </div>

      <div className="service-item">
        <h2>Business &amp; Entrepreneurship Guidance</h2>
        <p>
          For athletes looking to explore business ventures, we provide strategic guidance on
          launching their own products, businesses, or investment opportunities. Our goal is to
          equip athletes with the knowledge and skills to thrive beyond their playing careers.
        </p>
      </div>

      <div className="services-cta">
        <h2>Get Started Today</h2>
        <p>
          Ready to take your NIL journey to the next level? Contact us today and let’s build your
          brand together!
        </p>
        <button 
        className="services-contact-button"
        onClick={() => navigate('/contact-us')}
        style={{ cursor: 'pointer' }}>Get in Touch</button>
      </div>
    </div>
  )
}

export default Services
