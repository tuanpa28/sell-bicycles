import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  accessToken: string = JSON.parse(localStorage.getItem('accessToken') || '');

  optionHeader() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
    });
    return headers;
  }

  getCategories(): Observable<any> {
    return this.http.get<ICategory[]>(
      'https://asmbe.vercel.app/api/categories'
    );
  }

  getCategoryById(id: string): Observable<any> {
    return this.http.get<ICategory>(
      `https://asmbe.vercel.app/api/categories/${id}`
    );
  }

  createCategory(category: ICategory): Observable<ICategory> {
    const headers = this.optionHeader();
    return this.http.post<ICategory>(
      'https://asmbe.vercel.app/api/categories',
      category,
      { headers }
    );
  }

  updateCategory(category: ICategory): Observable<ICategory> {
    const headers = this.optionHeader();
    return this.http.put<ICategory>(
      `https://asmbe.vercel.app/api/categories/${category._id}`,
      category,
      { headers }
    );
  }

  deleteCategory(id: string): Observable<ICategory> {
    const headers = this.optionHeader();
    return this.http.delete<ICategory>(
      `https://asmbe.vercel.app/api/categories/${id}`,
      { headers }
    );
  }
}
