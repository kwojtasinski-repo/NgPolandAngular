import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isAuthenticated = false;

  constructor() {
    this.isAuthenticated = this.getTokenFromLocalStorage() !== null;
  }

  login(): void {
    localStorage.setItem('auth', 'true');
    this.isAuthenticated = true;
  }

  logout(): void {
    localStorage.removeItem('auth');
    this.isAuthenticated = false;
  }

  private getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('auth');
  }
}
