import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   constructor() { }
   login(username: string, password: string): boolean {
    if (username === 'user' && password === 'pass') {
      localStorage.setItem('userToken', 'demo-token');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('userToken');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken');
  }
}


