import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '../entities/token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private router: Router) {}

  setToken(token: Token) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): Token | null {
    var token = localStorage.getItem('token');
    if (token === null) return null;
    return JSON.parse(token);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      const isTokenValid = this.isTokenValid(token);
      if (isTokenValid) {
        return true;
      } else {
        this.logout();
      }
    }
    return false;
  }

  isTokenValid(token: Token): boolean {
    try {
      var tokenExpireDate = new Date(token.tokenExpireDate);
      var now = new Date();
      return tokenExpireDate > now;
    } catch (error) {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
}
