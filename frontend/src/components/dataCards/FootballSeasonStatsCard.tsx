// src/components/cards/FootballSeasonStatsCard.tsx
import React from 'react';
import styled from 'styled-components';
import { Box } from '../layout/atoms';
import { FootballSeasonStatsData } from '../../../../shared/types/dataCard';

// Define the props that the FootballSeasonStatsCard component expects.
export interface StatsCardProps {
  data: FootballSeasonStatsData;
}

const CardContainer = styled(Box)`
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
`;

const FootballSeasonStatsCard: React.FC<StatsCardProps> = ({ data }) => {
  return (
    <CardContainer>
      <h3>
        {data.teamName} - {data.season}
      </h3>
      <p>
        Wins: {data.wins} | Losses: {data.losses}
      </p>
      {/* Additional displays or inputs can be added here */}
    </CardContainer>
  );
};

export default FootballSeasonStatsCard;
