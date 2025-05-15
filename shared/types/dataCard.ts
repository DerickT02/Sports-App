/* NEW –– a discriminated-union of every season-level stats card  */

export type DataCardType =
  | 'footballSeason'
  | 'baseballSeason'
  | 'soccerSeason'
  | 'custom';          // leave this for anything free-form later

export interface FootballSeasonStatsData {
  teamName: string;
  season: number;
  wins: number;
  losses: number;
  cmp: number;
  att: number;
  yds: number;
  td: number;
  /* add more as required */
}

export interface BaseballSeasonStatsData {
  teamName: string;
  season: number;
  games: number;
  avg: number;      // batting average
  hr: number;       // home-runs
  rbi: number;      // runs batted in
}

export interface SoccerSeasonStatsData {
  teamName: string;
  season: number;
  appearances: number;
  goals: number;
  assists: number;
  cleanSheets?: number;   // for keepers
}

export type DataCard =
  | {
      type: 'footballSeason';
      title: string;
      instanceId: string;
      data: FootballSeasonStatsData;
    }
  | {
      type: 'baseballSeason';
      title: string;
      instanceId: string;
      data: BaseballSeasonStatsData;
    }
  | {
      type: 'soccerSeason';
      title: string;
      instanceId: string;
      data: SoccerSeasonStatsData;
    }
  | {
      type: 'custom';
      title: string;
      instanceId: string;
      data: Record<string, unknown>;
    };
