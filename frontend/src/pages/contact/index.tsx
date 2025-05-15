import React, { useState } from 'react';
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
  color: var(--color-heading);
`;

const Intro = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Info = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  background-color: var(--color-surface);

`;

const InfoHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
`;

const InfoText = styled.p`
  font-size: 1rem;
  margin: 0.3rem 0;
`;

const FormSection = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 8px;
  background-color: var(--color-surface);
  color: var(--color-text);
`;

const FormHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
`;

const InquiryForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background: #f9f9f9;
  width: 100%;
`;

const SubmitButton = styled.button`
  align-self: flex-start;
  background-color: var(--color-primary);
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b55d2a;
  }
`;


/* ---------- Main Component ---------- */
const Contact: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ fullName, email, message });
    setFullName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    <Page>
      <Title>Contact Us</Title>

      <Intro>
        <Subtitle>Questions? Want to Collaborate?</Subtitle>
        <Description>
          Reach out today and our team will get back to you as soon as possible.
        </Description>
      </Intro>

      <Info>
        <InfoHeading>Contact Info:</InfoHeading>
        <InfoText><strong>Phone:</strong> (909) 232-2422</InfoText>
        <InfoText><strong>Email:</strong> playersclubmgmtsjz@gmail.com</InfoText>
        <InfoText><strong>Instagram:</strong> @playersclubmgmt</InfoText>
      </Info>

      <FormSection>
        <FormHeading>Inquiry Form:</FormHeading>
        <Description>Fill out the form below, and we’ll get in touch with you soon.</Description>

        <InquiryForm onSubmit={handleSubmit}>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFullName(e.target.value);
            }}
            
            required
          />

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            
            required
          />

          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setMessage(e.target.value);
            }}
            
            required
          />

          <SubmitButton type="submit">Submit an Inquiry</SubmitButton>
        </InquiryForm>
      </FormSection>
    </Page>
    <Footer/>
    </>
  );
};

export default Contact;