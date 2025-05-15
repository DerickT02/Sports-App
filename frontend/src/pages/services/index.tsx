import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/* ---------- Styled Components ---------- */
const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top:100px;
  color: var(--color-text);
  font-family: 'Lato', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
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
function Services() {
  const navigate = useNavigate();

  return (
    <>
      <Page>
        <Title>Our Services</Title>
        <Intro>
          At Players Club Management, we offer a range of services designed to help student-athletes
          maximize their Name, Image, and Likeness (NIL) opportunities. Our expertise ensures athletes
          get the best possible deals while building a sustainable personal brand.
        </Intro>

        <Item>
          <ItemTitle>NIL Deal Negotiation</ItemTitle>
          <ItemText>
            We work closely with brands and businesses to negotiate fair and beneficial NIL deals for
            our athletes. Our team ensures that each contract aligns with the athlete's goals and
            long-term success.
          </ItemText>
        </Item>

        <Item>
          <ItemTitle>Sponsorship &amp; Endorsement Opportunities</ItemTitle>
          <ItemText>
            Connecting athletes with the right sponsors is our specialty. We seek out partnerships
            that enhance our athletes' brand value and provide meaningful financial opportunities.
          </ItemText>
        </Item>

        <Item>
          <ItemTitle>Social Media Growth &amp; Monetization</ItemTitle>
          <ItemText>
            We help athletes expand their online presence and monetize their social media platforms
            effectively. From content strategy to engagement optimization, we ensure athletes maximize
            their digital impact.
          </ItemText>
        </Item>

        <Item>
          <ItemTitle>Personal Branding &amp; Marketing Strategy</ItemTitle>
          <ItemText>
            Building a strong personal brand is key to long-term success. We assist athletes in
            developing their brand identity, creating compelling content, and positioning themselves
            as marketable figures in the sports industry.
          </ItemText>
        </Item>

        <Item>
          <ItemTitle>Financial Literacy &amp; Contract Review</ItemTitle>
          <ItemText>
            Understanding NIL earnings and contract terms is crucial. We provide financial literacy
            education and contract review services to ensure our athletes make informed decisions
            about their earnings and agreements. We also offer specialized training and workshops to
            educate athletes about NIL opportunities, contract reviews, and financial management.
          </ItemText>
        </Item>

        <Item>
          <ItemTitle>Business &amp; Entrepreneurship Guidance</ItemTitle>
          <ItemText>
            For athletes looking to explore business ventures, we provide strategic guidance on
            launching their own products, businesses, or investment opportunities. Our goal is to
            equip athletes with the knowledge and skills to thrive beyond their playing careers.
          </ItemText>
        </Item>

        <CTA>
          <CTAHeading>Get Started Today</CTAHeading>
          <CTAText>
            Ready to take your NIL journey to the next level? Contact us today and let's build your
            brand together!
          </CTAText>
          <CTAButton onClick={() => navigate('/contact-us')}>Get in Touch</CTAButton>
        </CTA>
      </Page>
    </>
  );
}

export default Services;
