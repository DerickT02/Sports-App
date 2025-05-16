import React from 'react';
import { SoccerSeasonStatsData } from '../../../../shared/types/dataCard';
export interface SoccerCardProps {
    data: SoccerSeasonStatsData;
}
declare const SoccerCard: React.FC<SoccerCardProps>;
export default SoccerCard;
