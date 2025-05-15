// src/pages/athletes/ShowCase.tsx
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { dummyAthletes } from '../admin/dummyAthletes';

/* ---------- shared shimmer ---------- */
const shimmer = keyframes`
  100% { transform: translateX(100%); }
`;

/* ---------- Styled Components ---------- */

const ShowcaseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 2rem 2rem 4rem;          /* bottom pad so it never touches footer */
  padding-top: 100px;               /* clear the navbar */
  box-sizing: border-box;
`;

/* outer wrapper that gives the shimmering border */
const ShowcaseCard = styled.div`
  position: relative;
  border-radius: 14px;
  padding: 6px;                     /* border thickness */
  background: linear-gradient(
      135deg,
      #383838,
      #2f2f2f,
      #454545,
      #292929,
      #3a3a3a
    );
  background-size: 400% 400%;
  animation: shimmer 8s ease infinite;
  transition: all 0.3s ease;
  transform-style: preserve-3d;

  &:hover {
    transform: perspective(1000px) rotateX(6deg) rotateY(6deg) scale(1.02);
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.35),
      0  8px 20px rgba(0, 0, 0, 0.18);
  }

  /* inner box */
  > div {
    border-radius: 12px;
    padding: 1.5rem;
    padding-top: 30px;
    height: 100%;
    width: 100%;
    background: linear-gradient(145deg, #2e2e2e, #222);
    box-shadow:
      inset 0  2px 4px  rgba(255, 255, 255, 0.04),
      inset 0 -2px 4px  rgba(0,   0,   0,   0.35);
  }
`;

/* skeleton shown until the img finishes loading */
const PhotoSkeleton = styled.div`
  width: 100%;
  height: 330px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background: #2a2a2a;              /* base */

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255,255,255,0.10) 50%,
      transparent 100%
    );
    animation: ${shimmer} 1.2s infinite;
    transform: translateX(-100%);
  }
`;

const ShowcasePhoto = styled.img`
  width: 100%;
  height: 330px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const AthleteName = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin: 0.5rem 0 0.25rem;
`;

const AthleteText = styled.p`
  font-size: 0.95rem;
  color: #c7c7c7;
  margin: 0.25rem 0;
`;

/* ---------- Small helper so we can use hooks per-card ---------- */
interface CardProps {
  athlete: (typeof dummyAthletes)[number];
}

const AthleteCard: React.FC<CardProps> = ({ athlete }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      to={`/athletes/${athlete._id}`}
      style={{ textDecoration: 'none' }}
    >
      <ShowcaseCard>
        {/* shimmer placeholder */}
        {!loaded && <PhotoSkeleton />}

        <ShowcasePhoto
          src={athlete.portraitPhoto || ''}
          alt={`${athlete.firstName} ${athlete.lastName}`}
          onLoad={() => setLoaded(true)}
          style={{ display: loaded ? 'block' : 'none' }}
        />

        <AthleteName>
          {athlete.firstName} {athlete.lastName}
        </AthleteName>
        <AthleteText>Sport: {athlete.sports}</AthleteText>
        <AthleteText>Grade: {athlete.year}</AthleteText>
      </ShowcaseCard>
    </Link>
  );
};

/* ---------- Main Component ---------- */
export default function ShowCase() {
  return (
    <ShowcaseContainer>
      {dummyAthletes.map((ath, idx) => (
        <AthleteCard key={idx} athlete={ath} />
      ))}
    </ShowcaseContainer>
  );
}
