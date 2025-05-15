import React from 'react';
import './About.css';
import styled from 'styled-components';

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

const AboutUs: React.FC = () => (
  <Wrapper>
    <Title>About&nbsp;Us</Title>

    {/* ─────────── Team ─────────── */}
    <TeamSection>
      {teamMembers.map((m) => (
        <Card key={m.name}>
          <Photo /> {/* replace with real image when available */}
          <Name>{m.name}</Name>
          <Role>{m.title}</Role>
          <Bio>{m.description}</Bio>
        </Card>
      ))}
    </TeamSection>

    {/* ─────────── FAQ ─────────── */}
    <FAQHeading>Frequently Asked Questions&nbsp;(FAQ)</FAQHeading>
    <FAQSection>
      {faqs.map((f) => (
        <FAQCard key={f.question}>
          <Question>{f.question}</Question>
          <Answer>{f.answer}</Answer>
        </FAQCard>
      ))}
    </FAQSection>
  </Wrapper>
);

export default AboutUs;


const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--color-text);
  font-family: 'Lato', sans-serif;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-heading);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TeamSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1rem;
  padding-top: 30px;
  margin-top: 2rem;      /* ← matches old .card rule */
  text-align: center;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1.5rem;
  }
`;

const Photo = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 1rem auto;
  background-color: #ccc;
  border-radius: 50%;
`;

const Name = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.3rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Role = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--color-primary);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Bio = styled.p`
  font-size: 1rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FAQHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--color-heading);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FAQSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FAQCard = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 8px;
`;

const Question = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-primary);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Answer = styled.p`
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;