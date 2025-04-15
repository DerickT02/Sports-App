// shared/types/dataCard.ts

// Define all possible component data types here. For now, we have one type.
export type DataCardType = 'footballStats';

export interface FootballSeasonStatsData {
  teamName: string;
  season: number; // e.g. 2023
  wins: number;
  losses: number;
  instanceId?: string; // Unique instance ID is added later when used in active cards
}

// Union type for the data that a card might hold.
export type DataCardData = FootballSeasonStatsData; // Expand this union as additional card types are created.

export interface DataCard {
  instanceId: string;            // Unique identifier for each card instance
  type: DataCardType;            // E.g., 'footballStats'
  title: string;                 // Title for display purposes
  data: DataCardData;            // The card's associated data, typed
}
