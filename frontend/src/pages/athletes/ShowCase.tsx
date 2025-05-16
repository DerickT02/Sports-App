import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { dummyAthletes } from '..//admin/dummyAthletes';

/* ---------- Styled Components ---------- */
const ShowcaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 2rem;

  padding-top: 100px;


  box-sizing: border-box;
  justify-content: center;
`;

const ShowcaseCard = styled.div`
  position: relative;
  border-radius: 14px;
  padding: 6px; /* border thickness */
  margin-bottom: 1.5rem;

  /* Metallic silver gradient border */
  background: linear-gradient(
    135deg,
    #e0e0e0,
    #f5f5f5,
    #c0c0c0,
    #ffffff,
    #dcdcdc
  );
  background-size: 400% 400%;
  animation: shimmer 8s ease infinite;

  transition: all 0.3s ease;
  transform-style: preserve-3d;

  &:hover {
    transform: perspective(1000px) rotateX(6deg) rotateY(6deg) scale(1.02);
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 8px 20px rgba(0, 0, 0, 0.15);
  }

  /* Inner content */
  & > div {
    border-radius: 12px;
    padding: 1.5rem;
    padding-top: 30px;
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.6),
                inset 0 -2px 4px rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
  }

  @keyframes shimmer {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const ShowcasePhoto = styled.img`
  width: 100%;
  height: 330px;
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