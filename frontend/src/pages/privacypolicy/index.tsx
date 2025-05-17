import React, { useState } from 'react';
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
  background:rgba(255, 255, 255, 0.2);
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
  overflow: hidden;
`;

const ItemTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
  text-align: left;
  justify-content: space-between;
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
  
    /* everything inside ItemText a will get these styles */
  a {
    color: var(--color-primary);
    text-decoration: underline;

    &:hover {
      color: var(--color-accent);
    }
  }
`;

const CTA = styled.div`
  text-align: center;
  margin-top: 3rem;
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

const LeftBox = styled.div`
  text-align: left;
  margin-left: 0;
`;


const ItemBody = styled.div<{ isOpen: boolean }>`
   max-height: ${({ isOpen }) => (isOpen ? '2000px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  overflow: hidden;
  transition: 
    max-height 0.3s ease, 
    opacity 0.3s ease, 
    padding 0.3s ease;

  padding: ${({ isOpen }) => (isOpen ? '1rem 1.5rem' : '0 1.5rem')};
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  border-top: 1px solid var(--color-border);
`;

/* ---------- AccordionItem Component ---------- */
function AccordionItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Item>
      <ItemTitle onClick={() => setIsOpen((o) => !o)}>
        <h2>{title}<span>{isOpen ? '▲' : '▼'}</span></h2>
      </ItemTitle>
      <ItemBody isOpen={isOpen}>{children}</ItemBody>
    </Item>
  );
}

/* ---------- Main Component ---------- */
function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <>
    <Page>
      <Title>Players Club Management Privacy Policy</Title>
      <Intro>
      This Privacy Policy explains how Players Club Management (“we”, “us”, or “our”) collects, uses,
      and discloses your Personal Information when you visit or make a purchase from our website
      (the “Site”)
      </Intro>

        <AccordionItem title = "Collecting Personal Information">
        <p>
        When you visit our Site, we collect certain information about your device, your interactions
        with the Site, and data needed to process purchases or provide our services. We may also
        collect additional information if you contact us directly. “Personal Information” refers to any
        information that can uniquely identify you. Below are the types of Personal Information we
        collect and why:
        </p>
      </AccordionItem>

        <AccordionItem title = "Device Information">
        <p>
        <strong>Examples of data collected</strong>: browser type, IP address, time zone, cookie data, pages/products
        viewed, search terms, and site interaction behavior.<br/>
        <strong>Purpose</strong>: to display our Site properly, and for analytics to improve user experience.<br/>
        <strong>How We Collect It</strong>: automatically, using cookies, log files, pixels, tags, or other tracking
        technologies.<br/>
        <strong>Disclosure</strong>: shared with our analytics and hosting service providers (e.g., Google Analytics,
        Shopify, or other platforms we use).<br/>
        </p>
        </AccordionItem>

        <AccordionItem title = "Order & Service Information">
        <p>
        <strong>Examples of data collected</strong>: name, billing/shipping address, payment details (credit card, Apple
        Pay, etc.), email address, and phone number.<br/>
        <strong>Purpose</strong>: to fulfill contracts, process payments, arrange services or product delivery, send
        confirmations, and communicate with you.<br/>
        <strong>How We Collect It</strong>: directly from you when you fill out a form, make a purchase, or book a
        service.<br/>
        <strong>Disclosure</strong>: shared with payment processors, CRM tools, email marketing platforms, or other
        vendors necessary to deliver our services.<br/>
        </p>
        </AccordionItem>

        <AccordionItem title = "Customer Support">
        <p>
        <strong> Examples of Data Collected</strong>: any personal details you share while requesting support (e.g.,
        contact details, case details).<br/>
        <strong>Purpose</strong>: to help resolve your issues and provide better service.<br/>
        <strong>How We Collect It</strong>: directly from you.<br/>
        <strong>Disclosure</strong>: may be shared with third-party support platforms we use.<br/>
        </p>
        </AccordionItem>

        <AccordionItem title = "Minors">
        <p>
        Our services are not intended for individuals under the age of 13. We do not knowingly collect
        Personal Information from children. If you are a parent or guardian and believe your child has
        provided us with personal data, please contact us to have it removed.
        </p>
        </AccordionItem>

        <AccordionItem title = "Sharing Your Information">
        <p>
        Our services are not intended for individuals under the age of 13. We do not knowingly collect
        Personal Information from children. If you are a parent or guardian and believe your child has
        provided us with personal data, please contact us to have it removed.
        </p>
        </AccordionItem>

        <AccordionItem title = "Behavioural Advertising">
        <p>
        We may use your Personal Information to show you relevant ads or marketing. This may
        include sharing data with: <br/>
        <li>Google Analytics - <a href = "https://policies.google.com/privacy">Learn more </a> or <a href = "https://tools.google.com/dlpage/gaoptout">opt-out</a></li>
        <li>Social media platforms like Facebook and Instagram for remarketing purposes</li>
        To opt-out of targeted advertising, you can use the following links:
        <li><a href = "https://www.facebook.com/settings/?tab=ads">Facebook</a></li>
        <li><a href="https://www.google.com/settings/ads/anonymous">Google</a></li>
        <li><a href= "https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads">Bing</a></li>
        <li><a href="http://optout.aboutads.info/">Or visit the Digital Advertising Alliance opt-out page</a></li>
        </p>
        </AccordionItem>

        <AccordionItem title = "Using Personal  Information">
        <p>
        We use your Personal Information to: <br/>
        <li>Offer and deliver our services (e.g., athlete representation, merchandise, digital
        content)</li>
        <li>Communicate with you</li>
        <li>Provide updates and marketing communications</li>
        <li>Comply with legal obligations</li>
        </p>
        </AccordionItem>

        <AccordionItem title = "GDPR Compliance (If Applicable)">
        <p>
        If you are located in the European Economic Area (EEA), we process your Personal Information
        based on: <br/>
        <li>Your consent</li>
        <li>Performance of a contract</li>
        <li>Legal compliance</li>
        <li>Our legitimate interests (provided they do not override your rights)</li>
        </p>
        </AccordionItem>

        <AccordionItem title = "Retention">
        <p>
        We retain your information as long as necessary to fulfill our services and legal obligations. You
        may request deletion of your data at any time.
        </p>
        </AccordionItem>

        <AccordionItem title = "Automated Decision Making">
        <p>
        We do not engage in fully automated decision-making that has a legal or significant effect on
        users.
        </p>
        </AccordionItem>

        <AccordionItem title = "Information We Collect">
        <p>
        <Subheading><strong>Device Information</strong></Subheading>
        -<strong>Examples collected</strong>: browser type, IP address, time zone, cookie data, pages
        viewed, search queries, and interactions with the Site.<br/>
        -<strong>Why we collect it </strong>: to improve site performance, understand user behavior, and
        deliver a better experience.<br/>
        -<strong>How we collect it</strong>: automatically via cookies, log files, and similar technologies. <br/>
        -<strong>Who we share it with</strong>: analytics tools and website hosting providers.<br/><br/>
        <Subheading><strong>Order Information</strong></Subheading>
        -<strong>Examples collected</strong>: your name, billing/shipping address, email, phone number,
        payment details (e.g., credit card or other accepted methods).<br/>
        -<strong>Why we collect it</strong>: to process orders, fulfill contracts, send confirmations,
        provide customer service, and screen for potential fraud.<br/>
        -<strong>How we collect it</strong>: directly from you during checkout or other interactions.<br/>
        -<strong>Who we share it with</strong>: payment processors, shipping partners, and our
        ecommerce platform.<br/><br/>
        <Subheading><strong>Customer Support Information</strong></Subheading>
        -<strong>Examples collected</strong>: any information you provide when reaching out for
        support.<br/>
        -<strong>Why we collect it</strong>: to resolve your issues or respond to inquiries.<br/>
        -<strong>How we collect it</strong>: directly from you.<br/>
        -<strong>Who we share it with</strong>: support ticketing platforms or contractors assisting with
        customer service. <br/>
        </p>
        </AccordionItem>

        <AccordionItem title = "Sharing Personal Information">
        <p>
        We may share your personal information with third parties that help us operate the Site, fulfill
        orders, or analyze performance. These include payment providers, shipping carriers, email
        platforms, and advertising networks.
        We may also disclose information to comply with legal obligations, protect rights, or respond to
        law enforcement.
        </p>
        </AccordionItem>

        <AccordionItem title = "Behavioral Advertising">
        <p>
        We may use your information to serve personalized ads or marketing messages based on your
        interactions with the Site.<br/>
        Examples:
        <li>We may use Google Analytics or similar tools to monitor usage.</li>
        <li>We may share details with advertising partners (e.g., Meta, Google) to show relevant
        ads.</li>
        To opt out of targeted advertising:<br/>
        <li>Facebook: <a href = "https://www.facebook.com/settings/?tab=ads">https://www.facebook.com/settings/?tab=ads</a></li>
        <li>Google:<a href = "https://www.google.com/settings/ads/anonymous"> https://www.google.com/settings/ads/anonymous</a></li>
        <li>General: <a href = "http://optout.aboutads.info/">http://optout.aboutads.info/</a></li>
        </p>
        </AccordionItem>

        <AccordionItem title = "Using Your Information">
        <p>
        We use your information to:
        <li>Offer and deliver products or services</li>
        <li>Process payments and send receipts</li>
        <li>Fulfill orders and arrange shipping</li>
        <li>Communicate updates or promotions</li>
        <li>Improve and secure our services</li> 
        </p>
        </AccordionItem>

        <AccordionItem title = "Your Rights">
        <p>
        <Subheading><strong>CCPA (if applicable)</strong></Subheading>
        California residents may:
        <li>Request access to the personal data we hold</li>
        <li>Ask for corrections or deletion</li>
        <li>Opt out of the sale of personal data</li>
        <li>Designate an authorized agent to act on their behalf</li>
        We do not sell personal data in the conventional sense, but we may share it with third parties
        as described.
        </p>
        </AccordionItem>

        <AccordionItem title = "Cookies">
        <p>
        We use cookies to support site functionality, track visitor behavior, and enhance your
        experience. These may include: <br/>
        <strong>Cookie Name & Purpose</strong> <br/>
        _session_id     :    Maintains session data <br/>
        cart Tracks      :   shopping cart contents<br/>
        _analytics Website    :     usage analysis<br/>
        _marketing_pref       :     Stores your ad tracking choice <br/>
        You can manage cookies through your browser settings. Learn more at
        <a href = "www.allaboutcookies.org"> www.allaboutcookies.org </a>. 
        </p>
        </AccordionItem>

        <AccordionItem title = "Do Not Track">
        <p>
        We do not currently respond to "Do Not Track" signals due to a lack of industry standards.
        </p>
        </AccordionItem>

        <AccordionItem title = "Changes to This Policy">
        <p>
        We may revise this Privacy Policy periodically to reflect operational, legal, or regulatory
        updates. The latest version will always be available on our Site.
        </p>
        </AccordionItem>

        <AccordionItem title = "Contact Us">
        <p>
        For any privacy-related questions, requests, or complaints, please contact: <br/>
        <strong>Players Club Management</strong><br/>
        Playersclubmgmtsjz@gmail.com<br/>
        17325 Wabash Ave<br/>
        </p>
        </AccordionItem>
      

      


    </Page>
    </>
    


  );
  
}

export default PrivacyPolicy;
