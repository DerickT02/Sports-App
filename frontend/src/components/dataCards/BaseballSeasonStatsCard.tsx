import React from 'react';
import { SeasonCardShell } from './SeasonCardShell';
import { BaseballSeasonStatsData } from '../../../../shared/types/dataCard';

interface Props { data: BaseballSeasonStatsData }

const BaseballSeasonStatsCard: React.FC<Props> = ({ data }) => (
  <SeasonCardShell>
    <h3>{data.teamName} – {data.season}</h3>
    <table>
      <thead>
        <tr><th>G</th><th>AVG</th><th>HR</th><th>RBI</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.games}</td>
          <td>{data.avg.toFixed(3)}</td>
          <td>{data.hr}</td>
          <td>{data.rbi}</td>
        </tr>
      </tbody>
    </table>
  </SeasonCardShell>
);

export default BaseballSeasonStatsCard;
