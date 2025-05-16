export type DataCardType = 'footballSeason' | 'baseballSeason' | 'soccerSeason' | 'basketballSeason' | 'custom';
export interface FootballSeasonStatsData {
    teamName: string;
    season: number;
    wins: number;
    losses: number;
    cmp: number;
    att: number;
    yds: number;
    td: number;
}
export interface BaseballSeasonStatsData {
    teamName: string;
    season: number;
    games: number;
    avg: number;
    hr: number;
    rbi: number;
}
export interface SoccerSeasonStatsData {
    teamName: string;
    season: number;
    appearances: number;
    goals: number;
    assists: number;
    cleanSheets?: number;
}
export interface BasketballSeasonStatsData {
    teamName: string;
    season: number;
    games: number;
    pointsPerGame: number;
    reboundsPerGame: number;
    assistsPerGame: number;
}
export type DataCard = {
    type: 'footballSeason';
    title: string;
    instanceId: string;
    data: FootballSeasonStatsData;
} | {
    type: 'baseballSeason';
    title: string;
    instanceId: string;
    data: BaseballSeasonStatsData;
} | {
    type: 'soccerSeason';
    title: string;
    instanceId: string;
    data: SoccerSeasonStatsData;
} | {
    type: 'basketballSeason';
    title: string;
    instanceId: string;
    data: BasketballSeasonStatsData;
} | {
    type: 'custom';
    title: string;
    instanceId: string;
    data: Record<string, unknown>;
};
