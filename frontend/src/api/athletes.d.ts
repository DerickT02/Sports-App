import { Athlete } from '../../../shared/types/athlete';
export declare const getAthletes: () => Promise<import("axios").AxiosResponse<Athlete[], any>>;
export declare const addAthlete: (ath: Partial<Athlete>) => Promise<import("axios").AxiosResponse<Athlete, any>>;
export declare const updateAthlete: (id: string, ath: Partial<Athlete>) => Promise<import("axios").AxiosResponse<Athlete, any>>;
export declare const deleteAthlete: (id: string) => Promise<import("axios").AxiosResponse<any, any>>;
