import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(user: any): Observable<any> {
    return this.http.post('https://asmbe.vercel.app/api/signup', user);
  }

  signin(user: any): Observable<any> {
    return this.http.post('https://asmbe.vercel.app/api/signin', user);
  }

  isAuthenticated() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}
