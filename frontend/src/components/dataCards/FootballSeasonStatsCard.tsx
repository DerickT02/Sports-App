import React from 'react';
import { SeasonCardShell } from './SeasonCardShell';
import { FootballSeasonStatsData } from '../../../../shared/types/dataCard';

export interface FootballCardProps {
  data: FootballSeasonStatsData;
}

const FootballSeasonStatsCard: React.FC<FootballCardProps> = ({ data }) => (
  <SeasonCardShell>
    <h3>{data.teamName} – {data.season}</h3>

    <table>
      <thead>
        <tr>
          <th>W</th><th>L</th><th>CMP</th><th>ATT</th><th>YDS</th>
          <th>TD</th>
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
    </table>
  </SeasonCardShell>
);

export default FootballSeasonStatsCard;
