import React from 'react';
import './About.css';
import Footer from '../../components/Footer';

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

const teamMembers: TeamMember[] = [
  {
    name: 'Santiago Zuniga',
    title: 'Founder & CEO',
    description:
      'Leading PCM with a passion for helping athletes succeed, Santiago has a deep understanding of the NIL landscape and creates opportunities that set athletes up for long-term success.',
  },
  {
    name: 'David Zuniga',
    title: 'Business Development Director',
    description:
      'With expertise in partnership development, David ensures athletes NIL deals align with their goals, creating lasting collaborations between athletes and brands.',
  },
  {
    name: 'Santana Zuniga',
    title: 'Marketing & Branding Specialist',
    description:
      'Santana specializes in helping athletes develop compelling personal brands and craft effective marketing strategies that resonate with top-tier sponsors.',
  },
];

const faqs: FAQ[] = [
  {
    question: 'What services does Players Club Management offer?',
    answer:
      'We provide NIL deal negotiation, brand partnership facilitation, marketing strategy development, financial literacy education, and personal brand coaching for student-athletes.',
  },
  {
    question: 'Who can sign with Players Club Management?',
    answer:
      'We work with high school and college athletes across various sports who are looking to maximize their NIL potential.',
  },
  {
    question: 'How does Players Club Management get paid?',
    answer:
      'We offer a tiered membership system, including a free entry-level tier. For higher-tier memberships, we require a $100 consulting fee deposit and take a 20% commission on any NIL deals secured.',
  },
  {
    question: 'How can brands collaborate with Players Club Management?',
    answer:
      "Brands looking to partner with our athletes can reach out through our 'Connect With Us' button or email us directly. We will match brands with the right athletes based on target audience, values, and campaign goals.",
  },
  {
    question: 'Do you provide legal support for NIL contracts?',
    answer:
      'Yes, we work with legal professionals to ensure all NIL contracts are reviewed and compliant with NCAA and state regulations.',
  },
  {
    question: 'Have more questions?',
    answer: 'Reach out to us today!',
  },
];

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <h1>About Us</h1>
        <div className="team-section">
          {teamMembers.map((member, index) => (
            <div className="card" key={index}>
              <div className="photo" />
              <h3 className="name">{member.name}</h3>
              <p className="role">{member.title}</p>
              <p className="bio">{member.description}</p>
            </div>
          ))}
        </div>
        <h2 className="faq-heading">Frequently Asked Questions (FAQ)</h2>
        <div className="faq-section">
          {faqs.map((faq, index) => (
            <div className="faq-card" key={index}>
              <h3 className="question">{faq.question}</h3>
              <p className="answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
