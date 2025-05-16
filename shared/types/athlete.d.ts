import { DataCard } from './dataCard';
export interface Athlete {
    _id?: string;
    firstName: string;
    lastName: string;
    year: 'Freshman' | 'Sophomore' | 'Junior' | 'Senior';
    sport: string;
    portraitPhoto: string;
    biography?: string;
    portfolioData?: DataCard[];
    isDeleted?: boolean;
}
