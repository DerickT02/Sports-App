import React from 'react';
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
      'With expertise in partnership development, David ensures athletes’ NIL deals align with their goals, creating lasting collaborations between athletes and brands.',
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
    <Wrapper>
      <Title>About Us</Title>
      <TeamSection>
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <Photo />
            <Name>{member.name}</Name>
            <Role>{member.title}</Role>
            <Bio>{member.description}</Bio>
          </Card>
        ))}
      </TeamSection>
      <FAQHeading>Frequently Asked Questions (FAQ)</FAQHeading>
      <FAQSection>
        {faqs.map((faq, index) => (
          <FAQCard key={index}>
            <Question>{faq.question}</Question>
            <Answer>{faq.answer}</Answer>
          </FAQCard>
        ))}
      </FAQSection>
    </Wrapper>
  );
};

export default AboutUs;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--color-text);
  font-family: 'Lato', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-heading);
`;

const TeamSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
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
`;

const Role = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const Bio = styled.p`
  font-size: 1rem;
  line-height: 1.4;
`;

const FAQHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--color-heading);
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
`;

const Answer = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;
