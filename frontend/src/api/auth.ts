// frontend/src/api/auth.ts
import axios from 'axios';
import { AuthResponse } from '../../../shared/types/auth';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api',
});

export async function login(email: string, password: string) {
  const { data } = await api.post<AuthResponse>('/auth/login', { email, password });
  localStorage.setItem('token', data.token);
  api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
  return data.user;
}
