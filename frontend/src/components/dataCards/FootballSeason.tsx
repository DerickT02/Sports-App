// src/components/cards/FootballSeasonStatsCard.tsx
import React from 'react';
import { FootballSeasonStatsData } from '../../../../shared/types/dataCard';
import styled from 'styled-components';
import { Box, Table } from '../layout/atoms';

export interface FootballCardProps {
  data: FootballSeasonStatsData;
}

// Styled components specific to Football Card
const CardContainer = styled(Box)`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;

const TableContainer = styled(Box)`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const TableTitleContainer = styled(Box)`
  margin: 0 0 1rem;
`;

const FootballCard: React.FC<FootballCardProps> = ({ data }) => (
  <CardContainer>
    <TableTitleContainer>
      <h3>{data.teamName} – {data.season}</h3>
    </TableTitleContainer>
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>W</th><th>L</th><th>CMP</th><th>ATT</th><th>YDS</th><th>TD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.wins}</td>
            <td>{data.losses}</td>
            <td>{data.cmp}</td>
            <td>{data.att}</td>
            <td>{data.yds}</td>
            <td>{data.td}</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  </CardContainer>
);

export default FootballCard;
