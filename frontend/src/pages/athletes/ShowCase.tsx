import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { dummyAthletes } from '..//admin/dummyAthletes';
import Footer from '../../components/Footer';

/* ---------- Styled Components ---------- */
const ShowcaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  padding-top: 300px;
  box-sizing: border-box;
  justify-content: center;
`;

const ShowcaseCard = styled.div`
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ShowcasePhoto = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 1rem;
  background: #ccc;
`;

const AthleteName = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-heading);
  margin: 0.5rem 0 0.25rem 0;
`;

const AthleteText = styled.p`
  font-size: 0.95rem;
  color: var(--color-muted);
  margin: 0.25rem 0;
`;

/* ---------- Main Component ---------- */
export default function ShowCase() {
  return (
    <>
      <ShowcaseContainer>
        {dummyAthletes.map((athlete, index) => (
          <Link
            key={index}
            to={`/athletes/${athlete._id}`}
            style={{ textDecoration: 'none' }}
          >
            <ShowcaseCard>
              <ShowcasePhoto
                src={athlete.portraitPhoto || ''}
                alt={`${athlete.firstName} ${athlete.lastName}`}
              />
              <AthleteName>
                {athlete.firstName} {athlete.lastName}
              </AthleteName>
              <AthleteText>Sport: {athlete.sports}</AthleteText>
              <AthleteText>Grade: {athlete.year}</AthleteText>
            </ShowcaseCard>
          </Link>
        ))}
      </ShowcaseContainer>
    </>
    
  );
}