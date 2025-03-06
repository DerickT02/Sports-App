import React from 'react';
import './Resources.css';

const Resources: React.FC = () => {
  return (
    <div className="resources-page">
      <h1 className="resources-title">Resources</h1>
      <div className="resources-content">
        {/* Section for Athletes */}
        <section className="resource-section">
          <h2 className="resources-subtitle">For Athletes:</h2>
          <ul className="resources-list">
            <li>
              <h3>Financial Literacy</h3>
              <p>Workshops on managing NIL earnings.</p>
            </li>
            <li>
              <h3>Brand Building</h3>
              <p>Tools and tips for crafting your personal brand.</p>
            </li>
            <li>
              <h3>Contract Review</h3>
              <p>Guidance on understanding and negotiating contracts.</p>
            </li>
          </ul>
        </section>

        {/* Section for Sponsors */}
        <section className="resource-section">
          <h2 className="resources-subtitle">For Sponsors:</h2>
          <ul className="resources-list">
            <li>
              <h3>Brand Athlete Partnerships</h3>
              <p>Connect with athletes who align with your brand’s values.</p>
            </li>
            <li>
              <h3>Marketing Campaigns</h3>
              <p>Support in creating engaging campaigns that resonate with audiences.</p>
            </li>
            <li>
              <h3>Campaign Metrics</h3>
              <p>Track the impact and success of your collaborations with athletes.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resources;
