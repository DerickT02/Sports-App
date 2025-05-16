import axios from 'axios';
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});
/* ---------- Athletes ---------- */
export const getAthletes = () => api.get('/athletes');
export const addAthlete = (ath) => api.post('/athletes', ath);
export const updateAthlete = (id, ath) => api.put(`/athletes/${id}`, ath);
export const deleteAthlete = (id) => api.delete(`/athletes/${id}`);
