import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) { }
    accessToken: string = "";

    optionHeader() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.accessToken}`,
        });
        return headers;
    }

    getUserProfile(): Observable<any> {
        return this.http.get<any>(
            `https://asmbe.vercel.app/api/user/profile`
        );
    }

    updateUserById(data: any): Observable<any> {
        return this.http.put<any>(
            `https://asmbe.vercel.app/api/user/update`, data
        );
    }
}
