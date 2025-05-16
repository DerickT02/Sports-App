import React from 'react';
import { FootballSeasonStatsData } from '../../../../shared/types/dataCard';
export interface FootballCardProps {
    data: FootballSeasonStatsData;
}
declare const FootballCard: React.FC<FootballCardProps>;
export default FootballCard;
