export type Role = 'admin' | 'editor' | 'athlete';

export interface AuthResponse {
  token: string;
  user: {
    data: any;
    id: string;
    email: string;
    role: Role;
  };
}
