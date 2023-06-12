import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(user: any): Observable<any> {
    return this.http.post('http://localhost:8081/api/signup', user);
  }

  signin(user: any): Observable<any> {
    return this.http.post('http://localhost:8081/api/signin', user);
  }

  isAuthenticated() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}
