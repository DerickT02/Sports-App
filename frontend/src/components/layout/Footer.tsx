import React from 'react';
import styled from 'styled-components';
import { Box, Horizontal, Vertical } from '../layout/atoms';

/* ------------------------------------------------------------------ */
/*  ❶ Full-width wrapper – no hacks, just stretch                      */
/* ------------------------------------------------------------------ */
const FooterWrapper = styled(Box).attrs({ as: 'footer' })`
  width: 100%;
  background: #000;
  border-top: 1px solid var(--color-border);
  padding: 3rem 2rem 1rem;
  align-self: stretch;     /* tells flex-parent to let it fill width */
  background-color: var(--color-surface);
`;

/* Content area (3 columns) */
const FooterContent = styled(Horizontal)`
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

/* One “column” */
const Section = styled(Vertical)`
  flex: 1;
  min-width: 250px;

  h4 {
    color: var(--color-text);
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-family: 'Lato', sans-serif;
  }

  p,
  a {
    color: var(--color-text);;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--color-primary);
  }
`;

/* Social links row */
const SocialLinks = styled(Horizontal)`
  gap: 1rem;
  justify-content: center;   /* centred under heading */

  a {
    color: var(--color-text);
    font-size: 0.9rem;
    text-decoration: none;
    transition: color 0.3s ease;
    padding: 0.5rem 0;
  }

  a:hover {
    color: var(--color-primary);
  }
`;

/* Bottom copyright strip */
const FooterBottom = styled(Box)`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);

  p {
    color: var(--color-text);;
    font-size: 0.8rem;
  }
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <FooterContent>
      <Section>
        <h4>Contact&nbsp;Us</h4>
        <p>Email: info@sportsapp.com</p>
        <p>Phone: (555) 123-4567</p>
      </Section>

      <Section>
        <h4>Follow&nbsp;Us</h4>
        <SocialLinks>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </SocialLinks>
      </Section>

      <Section>
        <h4>Quick&nbsp;Links</h4>
        <a href="/about-us">About&nbsp;Us</a>
        <a href="/terms-of-service">Terms&nbsp;of&nbsp;Service</a>
        <a href="/privacy-policy">Privacy&nbsp;Policy</a>
      </Section>
    </FooterContent>

    <FooterBottom>
      <p>&copy; 2024 Sports App. All rights reserved.</p>
    </FooterBottom>
  </FooterWrapper>
);

export default Footer;
