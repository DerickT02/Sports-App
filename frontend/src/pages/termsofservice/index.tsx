import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
        <ItemTitle>2. Services We Provide</ItemTitle>
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

      <Item>
        <ItemTitle>3. Payments & Fees</ItemTitle>
        <ItemText>
        When you make a purchase or engage in a paid service through our Site, you agree to provide
        accurate payment information. All fees are due at the time of service unless otherwise stated in a
        written agreement. <br/>

        We reserve the right to modify pricing at any time. Refund policies, if any, are disclosed at
        checkout or in separate written agreements.

        </ItemText>
      </Item>

      <Item>
        <ItemTitle>4. Intellectual Property</ItemTitle>
        <ItemText>
        All content on this Site — including but not limited to logos, text, graphics, videos, and images
        — is owned by or licensed to Players Club Management and protected by intellectual property
        laws. You may not reproduce, distribute, or exploit any content without our prior written
        permission.
        </ItemText>
      </Item>

      <Item>
        <ItemTitle>5. Athlete Representation & Agreements</ItemTitle>
        <ItemText>
        If you are a student-athlete or representative seeking NIL services, any formal engagement must
        be governed by a separate NIL Representation Agreement. These Terms do not constitute a
        representation agreement. <br/>
        You are responsible for complying with your school’s or governing body’s NIL compliance
        policies. Players Club Management is not liable for violations of third-party NIL rules or
        institutional regulations
        </ItemText>
      </Item>

      <Item>
        <ItemTitle>6. User Conduct</ItemTitle>
        <ItemText>
        You agree not to use the Site or our services:
        <li>For any unlawful purpose</li>
        <li>To solicit others to perform or participate in unlawful acts</li>
        <li>To violate any international, federal, state, or local regulations</li>
        <li>To infringe upon our intellectual property rights or those of others</li>
        <li>To harass, abuse, insult, harm, or defame others</li>
        <li>To submit false or misleading information</li>
        <li>To upload or transmit malicious code or spam</li>
        Violation of these rules may result in termination of your access to the Site.
        </ItemText>
      </Item>

      <Item>
        <ItemTitle>7. Third-Party Links and Tools</ItemTitle>
        <ItemText>
        Our Site may contain links to third-party websites or tools not owned or controlled by Players
        Club Management. We are not responsible for their content, accuracy, or practices. Use them at
        your own risk.
        </ItemText>
      </Item>

      <Item>
        <ItemTitle>8. Disclaimers</ItemTitle>
        <ItemText>
        We provide our Site and services “as is” and “as available” without warranties of any kind, either
        express or implied. We do not guarantee that the Site will be uninterrupted, secure, or error-free. <br/>
        Players Club Management does not guarantee any specific NIL deal or financial outcome from
        representation or promotion services.
        </ItemText>
      </Item>

      <Item>
        <ItemTitle>9. Limitation of Liability</ItemTitle>
        <ItemText>
        To the maximum extent permitted by law, Players Club Management and its affiliates, partners,
        officers, and employees shall not be liable for any indirect, incidental, or consequential damages
        arising from your use of the Site or our services.
        </ItemText>
      </Item>

      <Item>
        <ItemTitle>11. Termination</ItemTitle>
        <ItemText>
        We reserve the right to suspend or terminate your access to the Site or services for any reason,
        including a breach of these Terms.
        </ItemText>
      </Item>

      <Item>
        <ItemTitle>12. Governing Law</ItemTitle>
        <ItemText>
        These Terms are governed by and interpreted under the laws of the State of California, without
        regard to conflict of law principles. You agree to submit to the exclusive jurisdiction of courts
        located in California for any disputes.

        </ItemText>
      </Item>

      <Item>
        <ItemTitle>13. Changes to Terms</ItemTitle>
        <ItemText>
        We may update these Terms from time to time to reflect operational or legal changes. It is your
        responsibility to review them periodically. Continued use of the Site constitutes acceptance of
        the revised Terms.
        </ItemText>
      </Item>

      <Item>
        <ItemTitle>14. Contact Us</ItemTitle>
        <ItemText>
        If you have any questions about these Terms, please contact:<br/>
        <strong> Players Club Management </strong><br/>
        Email: playersclubmgmtsjz@gmail.com<br/>
        Address: 17325 Wabash Ave
        </ItemText>
      </Item>

    


    </Page>
    </>
    

  );
}

export default TermsOfService;
