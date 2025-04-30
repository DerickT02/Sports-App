import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { dummyAthletes } from '../admin/dummyAthletes';
import { DataCard } from '../../../../shared/types/dataCard';
import Footer from '../../components/Footer';

/* ---------- Styled Components ---------- */
const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--color-text);
  font-family: 'Lato', sans-serif;
`;

const Header = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
`;

const Portrait = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
  background: #ccc;
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
`;

const Label = styled.p`
  font-size: 1rem;
  margin: 0.25rem 0;
  color: var(--color-muted);
`;

const Section = styled.div`
  margin-top: 2rem;
`;

const CardContainer = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: var(--color-surface);
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const Stat = styled.p`
  font-size: 0.95rem;
`;

/* ---------- Component ---------- */
export default function AthletePortfolio() {
  const { id } = useParams<{ id: string }>();
  const athlete = dummyAthletes.find(a => a._id === id);

  if (!athlete) return <PageContainer>Athlete not found.</PageContainer>;

  return (
    <>
      <PageContainer>
        <Header>
          <Portrait src={athlete.portraitPhoto || ''} alt={athlete.firstName} />
          <Info>
            <Name>{athlete.firstName} {athlete.lastName}</Name>
            <Label>Year: {athlete.year}</Label>
            <Label>Sports: {athlete.sports}</Label>
            {athlete.biography && <Label>{athlete.biography}</Label>}
          </Info>
        </Header>

        <Section>
          <h2>Performance Cards</h2>
          {athlete.portfolioData && athlete.portfolioData.length > 0 ? (
            athlete.portfolioData.map((card: DataCard) => (
              <CardContainer key={card.instanceId}>
                <CardTitle>{card.title}</CardTitle>
                {card.type === 'footballStats' && (
                  <>
                    <Stat>Team: {card.data.teamName}</Stat>
                    <Stat>Season: {card.data.season}</Stat>
                    <Stat>Wins: {card.data.wins}</Stat>
                    <Stat>Losses: {card.data.losses}</Stat>
                  </>
                )}
              </CardContainer>
            ))
          ) : (
            <Label>No performance data available.</Label>
          )}
        </Section>
      </PageContainer>
      <Footer />
    </>
  );
}
