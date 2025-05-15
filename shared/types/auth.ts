export type Role = 'admin' | 'editor' | 'athlete';

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    role: Role;
  };
}
