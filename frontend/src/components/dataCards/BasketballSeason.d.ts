import React from 'react';
import { BasketballSeasonStatsData } from '../../../../shared/types/dataCard';
export interface BasketballCardProps {
    data: BasketballSeasonStatsData;
}
declare const BasketballCard: React.FC<BasketballCardProps>;
export default BasketballCard;
