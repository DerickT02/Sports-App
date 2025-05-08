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
  padding-top: 60px;
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
`;

const ItemTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
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
function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <Page>
      <Title>Players Club Management Privacy Policy</Title>
      <Intro>
      This Privacy Policy explains how Players Club Management (“we”, “us”, or “our”) collects, uses,
      and discloses your Personal Information when you visit or make a purchase from our website
      (the “Site”)
      </Intro>

      <Item>
        <ItemTitle>Collecting Personal Information</ItemTitle>
        <ItemText>
        When you visit our Site, we collect certain information about your device, your interactions
        with the Site, and data needed to process purchases or provide our services. We may also
        collect additional information if you contact us directly. “Personal Information” refers to any
        information that can uniquely identify you. Below are the types of Personal Information we
        collect and why:
        </ItemText>
      </Item>

      <Item>
        <ItemTitle>Device Information</ItemTitle>
        <ItemText>
          <strong>Examples of data collected</strong>: browser type, IP address, time zone, cookie data, pages/products
          viewed, search terms, and site interaction behavior.<br/>
          <strong>Purpose</strong>: to display our Site properly, and for analytics to improve user experience.<br/>
          <strong>How We Collect It</strong>: automatically, using cookies, log files, pixels, tags, or other tracking
          technologies.<br/>
          <strong>Disclosure</strong>: shared with our analytics and hosting service providers (e.g., Google Analytics,
          Shopify, or other platforms we use).<br/>
        </ItemText>
      </Item>

      <Item>
        <ItemTitle>Order & Service Information</ItemTitle>
        <ItemText>
        <strong>Examples of data collected</strong>: name, billing/shipping address, payment details (credit card, Apple
        Pay, etc.), email address, and phone number.<br/>
        <strong>Purpose</strong>: to fulfill contracts, process payments, arrange services or product delivery, send
        confirmations, and communicate with you.<br/>
        <strong>How We Collect It</strong>: directly from you when you fill out a form, make a purchase, or book a
        service.<br/>
        <strong>Disclosure</strong>: shared with payment processors, CRM tools, email marketing platforms, or other
        vendors necessary to deliver our services.<br/>
        </ItemText>
      </Item>

      <Item>
        <ItemTitle>Customer Support</ItemTitle>
        <ItemText>
        <strong> Examples of Data Collected</strong>: any personal details you share while requesting support (e.g.,
        contact details, case details).<br/>
        <strong>Purpose</strong>: to help resolve your issues and provide better service.<br/>
        <strong>How We Collect It</strong>: directly from you.<br/>
        <strong>Disclosure</strong>: may be shared with third-party support platforms we use.<br/>
        </ItemText>
      </Item>

      <Item>
        <ItemTitle>Minors</ItemTitle>
        <ItemText>
        Our services are not intended for individuals under the age of 13. We do not knowingly collect
        Personal Information from children. If you are a parent or guardian and believe your child has
        provided us with personal data, please contact us to have it removed.
        </ItemText>
      </Item>

    </Page>

  );
}

export default PrivacyPolicy;
