import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer';

/* ---------- Styled Components ---------- */
const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--color-text);
  font-family: 'Lato', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  padding-top: 80px;
  color: var(--color-heading);
`;

const Intro = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Item = styled.div`
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
`;

const ItemTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
  text-align: center;
`;

const Subheading = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ItemText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const CTA = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const CTAHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
`;

const CTAText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Space = styled.span`
  margin-right: 24px; /* adds space after each word */
`;

const CTAButton = styled.button`
  background-color: var(--color-primary);
  color: var(--color-surface);
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b55d2a;
  }
`;

/* ---------- Main Component ---------- */
function TermsOfService() {
  const navigate = useNavigate();

  return (
    <>
    <Page>
      <Title>Players Club Management Terms of Service (TOS)</Title>
      <Intro>
      <Subheading><strong>Terms of Service</strong></Subheading>
      <strong>Effective Date:</strong> 04/29/2025
      Welcome to Players Club Management (“we,” “our,” or “us”). These Terms of Service
      (“Terms”) govern your access to and use of our website (the “Site”), services, and products. By
      visiting or using our Site, you agree to be bound by these Terms.<br/>
      Please read them carefully. If you do not agree to these Terms, please do not use our services or
      Site.<br/>
      </Intro>

      <Item>
        <ItemTitle>1. Eligibility</ItemTitle>
        <ItemText>
        To use our Site or services, you must be at least 13 years old (or the minimum age of digital
        consent in your jurisdiction). By using the Site, you represent that you meet these requirements
        and that any information you provide is accurate and complete.
        </ItemText>
      </Item>

      <Item>
        <ItemTitle>Services We Provide</ItemTitle>
        <ItemText>
        Players Club Management offers services and content related to Name, Image, and Likeness
        (NIL), including but not limited to:
        <li>NIL representation for student-athletes</li>
        <li> Brand partnerships</li>
        <li>Social media and marketing services</li>
        <li>Sales of merchandise or digital goods</li>
        <li>Athlete bookings or appearances</li>
        <li>Educational resources</li>
        All services are subject to change, limitation, or discontinuation at our discretion.
        </ItemText>
      </Item>


    </Page>
    <Footer />
    </>
    

  );
}

export default TermsOfService;
