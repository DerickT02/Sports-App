import axios from 'axios';
import { Athlete } from '../../../shared/types/athlete';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

/* ---------- Athletes ---------- */
export const getAthletes   = () => api.get<Athlete[]>('/athletes');
export const addAthlete    = (ath: Partial<Athlete>)   => api.post<Athlete>('/athletes', ath);
export const updateAthlete = (id: string, ath: Partial<Athlete>) => api.put<Athlete>(`/athletes/${id}`, ath);
export const deleteAthlete = (id: string) => api.delete(`/athletes/${id}`);

