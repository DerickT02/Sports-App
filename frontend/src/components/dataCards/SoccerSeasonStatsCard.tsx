import React from 'react';
import { SeasonCardShell } from './SeasonCardShell';
import { SoccerSeasonStatsData } from '../../../../shared/types/dataCard';

interface Props { data: SoccerSeasonStatsData }

const SoccerSeasonStatsCard: React.FC<Props> = ({ data }) => (
  <SeasonCardShell>
    <h3>{data.teamName} – {data.season}</h3>
    <table>
      <thead>
        <tr><th>Apps</th><th>Goals</th><th>Assists</th><th>CS</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.appearances}</td>
          <td>{data.goals}</td>
          <td>{data.assists}</td>
          <td>{data.cleanSheets ?? '-'}</td>
        </tr>
      </tbody>
    </table>
  </SeasonCardShell>
);

export default SoccerSeasonStatsCard;
