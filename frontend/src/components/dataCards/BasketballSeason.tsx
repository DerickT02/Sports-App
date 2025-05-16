// src/components/dataCards/BasketballSeasonCard.tsx
import React from 'react';
import { BasketballSeasonStatsData } from '../../../../shared/types/dataCard';
import styled from 'styled-components';
import { Box, Table } from '../layout/atoms';

export interface BasketballCardProps {
  data: BasketballSeasonStatsData;
}

// Styled components specific to Basketball Card
const CardContainer = styled(Box)`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  margin-bottom: 1rem;
  background-color: var(--color-surface);
`;

const TitleBox = styled(Box)`
  margin-bottom: 1rem;

  h3 {
    font-size: 1.5rem;
    color: var(--color-heading);
  }
`;

const TableContainer = styled(Box)`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
`;

const BasketballCard: React.FC<BasketballCardProps> = ({ data }) => (
  <CardContainer>
    <TitleBox>
      <h3>{data.teamName} – {data.season}</h3>
    </TitleBox>
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Games</th><th>PPG</th><th>RPG</th><th>APG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.games}</td>
            <td>{data.pointsPerGame}</td>
            <td>{data.reboundsPerGame}</td>
            <td>{data.assistsPerGame}</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  </CardContainer>
);

export default BasketballCard;
