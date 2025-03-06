import React from 'react';
import './AboutUs.css';

interface TeamMember {
  name: string;
  title: string;
  description: string;
  photo?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const AboutUs: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Santiago Zuniga',
      title: 'Founder & CEO',
      description:
        'Leading PCM with a passion for helping athletes succeed, Santiago has a deep understanding of the NIL landscape and creates opportunities that set athletes up for long-term success.',
      // photo: SantiagoPhoto,
    },
    {
      name: 'David Zuniga',
      title: 'Business Development Director',
      description:
        'With expertise in partnership development, David ensures athletes’ NIL deals align with their goals, creating lasting collaborations between athletes and brands.',
      // photo: DavidPhoto,
    },
    {
      name: 'Santana Zuniga',
      title: 'Marketing & Branding Specialist',
      description:
        'Santana specializes in helping athletes develop compelling personal brands and craft effective marketing strategies that resonate with top-tier sponsors.',
      // photo: SantanaPhoto,
    },
  ];

  const faqs: FAQ[] = [
    {
      question: "What services does Players Club Management offer?",
      answer:
        "We provide NIL deal negotiation, brand partnership facilitation, marketing strategy development, financial literacy education, and personal brand coaching for student-athletes.",
    },
    {
      question: "Who can sign with Players Club Management?",
      answer:
        "We work with high school and college athletes across various sports who are looking to maximize their NIL potential.",
    },
    {
      question: "How does Players Club Management get paid?",
      answer:
        "We offer a tiered membership system, including a free entry-level tier. For higher-tier memberships, we require a $100 consulting fee deposit and take a 20% commission on any NIL deals secured.",
    },
    {
      question: "How can brands collaborate with Players Club Management?",
      answer:
        "Brands looking to partner with our athletes can reach out through our 'Connect With Us' button or email us directly. We will match brands with the right athletes based on target audience, values, and campaign goals.",
    },
    {
      question: "Do you provide legal support for NIL contracts?",
      answer:
        "Yes, we work with legal professionals to ensure all NIL contracts are reviewed and compliant with NCAA and state regulations.",
    },
    {
      question: "Have more questions?",
      answer: "Reach out to us today!",
    },
  ];

  return (
    <div className="about-us-page">
      {/* Top Section: Mission & Story */}
      <div className="about-top-section">
        <h1>About Us</h1>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At Players Club Management, we empower student-athletes by maximizing their Name, Image, and
            Likeness (NIL) opportunities. We help athletes build their personal brands, secure meaningful
            partnerships, and create long-term financial success.
          </p>
        </div>

        <div className="story-section">
          <h2>Our Story</h2>
          <p>
            Founded by former athletes and business professionals, we recognized the need for a trusted,
            athlete-first agency that not only supports NIL opportunities but also educates athletes on
            financial literacy, brand-building, and career planning. Our journey began with a vision to guide
            student-athletes toward sustainable success both on and off the field.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="employee-card" key={index}>
              <img className="employee-photo" src={member.photo} alt={member.name} />
              <div className="employee-info">
                <h3 className="employee-name">{member.name}</h3>
                <p className="employee-title">{member.title}</p>
                <p className="employee-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
