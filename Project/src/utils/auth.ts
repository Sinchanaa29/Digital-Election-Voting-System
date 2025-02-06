// Constants
const ADMIN_AUTH_KEY = 'ieee_admin_auth';
const ADMIN_PASSWORD = 'ieee2024';

export function login(password: string): boolean {
  if (password === ADMIN_PASSWORD) {
    localStorage.setItem(ADMIN_AUTH_KEY, 'true');
    return true;
  }
  return false;
}

export function logout(): void {
  localStorage.removeItem(ADMIN_AUTH_KEY);
}

export function isAuthenticated(): boolean {
  return localStorage.getItem(ADMIN_AUTH_KEY) === 'true';
}