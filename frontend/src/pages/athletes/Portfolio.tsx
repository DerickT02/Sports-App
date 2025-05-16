// src/pages/athletes/AthletePortfolio.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { Athlete } from '../../../../shared/types/athlete';
import { DataCard } from '../../../../shared/types/dataCard';

/* ---------- Styled Components ---------- */
const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0.5rem;
  padding-top: 100px;
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
  border-radius: 10px;
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
  const [athlete, setAthlete] = useState<Athlete | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAthlete = async () => {
      if (!id) return;

      try {
        const docRef = doc(db, 'athletes', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAthlete(docSnap.data() as Athlete);
        } else {
          setAthlete(null);
        }
      } catch (error) {
        console.error('Error fetching athlete:', error);
        setAthlete(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAthlete();
  }, [id]);

  if (loading) return <PageContainer>Loading...</PageContainer>;
  if (!athlete) return <PageContainer>Athlete not found.</PageContainer>;

  return (
    <PageContainer>
      <Header>
        <Portrait src={athlete.portraitPhoto || ''} alt={athlete.firstName} />
        <Info>
          <Name>{athlete.firstName} {athlete.lastName}</Name>
          <Label>Year: {athlete.year}</Label>
          <Label>Sport: {athlete.sport}</Label>
          {athlete.biography && <Label>{athlete.biography}</Label>}
        </Info>
      </Header>

      <Section>
        <h2>Performance Cards</h2>
        {athlete.portfolioData && athlete.portfolioData.length > 0 ? (
          athlete.portfolioData.map((card: DataCard) => (
            <CardContainer key={card.instanceId}>
              <CardTitle>{card.title}</CardTitle>

              {card.type === 'footballSeason' && (
                <>
                  <Stat>Team: {card.data.teamName}</Stat>
                  <Stat>Season: {card.data.season}</Stat>
                  <Stat>Wins: {card.data.wins}</Stat>
                  <Stat>Losses: {card.data.losses}</Stat>
                  <Stat>Completions: {card.data.cmp}</Stat>
                  <Stat>Attempts: {card.data.att}</Stat>
                  <Stat>Yards: {card.data.yds}</Stat>
                  <Stat>Touchdowns: {card.data.td}</Stat>
                </>
              )}

              {card.type === 'baseballSeason' && (
                <>
                  <Stat>Team: {card.data.teamName}</Stat>
                  <Stat>Season: {card.data.season}</Stat>
                  <Stat>Games Played: {card.data.games}</Stat>
                  <Stat>Batting Avg: {card.data.avg}</Stat>
                  <Stat>Home Runs: {card.data.hr}</Stat>
                  <Stat>RBIs: {card.data.rbi}</Stat>
                </>
              )}

              {card.type === 'soccerSeason' && (
                <>
                  <Stat>Team: {card.data.teamName}</Stat>
                  <Stat>Season: {card.data.season}</Stat>
                  <Stat>Appearances: {card.data.appearances}</Stat>
                  <Stat>Goals: {card.data.goals}</Stat>
                  <Stat>Assists: {card.data.assists}</Stat>
                  {card.data.cleanSheets !== undefined && (
                    <Stat>Clean Sheets: {card.data.cleanSheets}</Stat>
                  )}
                </>
              )}

              {card.type === 'basketballSeason' && (
                <>
                  <Stat>Team: {card.data.teamName}</Stat>
                  <Stat>Season: {card.data.season}</Stat>
                  <Stat>Games: {card.data.games}</Stat>
                  <Stat>Points/Game: {card.data.pointsPerGame}</Stat>
                  <Stat>Rebounds/Game: {card.data.reboundsPerGame}</Stat>
                  <Stat>Assists/Game: {card.data.assistsPerGame}</Stat>
                </>
              )}

            </CardContainer>
          ))
        ) : (
          <Label>No performance data available.</Label>
        )}
      </Section>
    </PageContainer>
  );
}
