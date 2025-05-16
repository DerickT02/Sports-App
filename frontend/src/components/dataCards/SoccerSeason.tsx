// src/components/cards/SoccerSeasonStatsCard.tsx
import React from 'react';
import { SoccerSeasonStatsData } from '../../../../shared/types/dataCard';
import styled from 'styled-components';
import { Box, Table } from '../layout/atoms';

export interface SoccerCardProps {
  data: SoccerSeasonStatsData;
}

// Styled components specific to the Soccer Card
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

const SoccerCard: React.FC<SoccerCardProps> = ({ data }) => (
  <CardContainer>
    <TitleBox>
      <h3>{data.teamName} – {data.season}</h3>
    </TitleBox>
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Appearances</th><th>Goals</th><th>Assists</th><th>Clean Sheets</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.appearances}</td>
            <td>{data.goals}</td>
            <td>{data.assists}</td>
            <td>{data.cleanSheets ?? 'N/A'}</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  </CardContainer>
);

export default SoccerCard;
