import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  accessToken: string = JSON.parse(localStorage.getItem('accessToken') || '');

  optionHeader() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
    });
    return headers;
  }

  searchProducts(queryObject: any): Observable<any> {
    return this.http.get<IProduct[]>('https://asmbe.vercel.app/api/products', {
      params: queryObject,
    });
  }
  getProducts(): Observable<any> {
    return this.http.get<IProduct[]>('https://asmbe.vercel.app/api/products');
  }
  getProductById(id: string): Observable<any> {
    return this.http.get<IProduct>(
      `https://asmbe.vercel.app/api/products/${id}`
    );
  }
  createProduct(product: IProduct): Observable<any> {
    const headers = this.optionHeader();

    return this.http.post<IProduct>(
      'https://asmbe.vercel.app/api/products',
      product,
      { headers }
    );
  }
  updateProduct(product: IProduct): Observable<any> {
    const headers = this.optionHeader();

    return this.http.put<IProduct>(
      `https://asmbe.vercel.app/api/products/${product._id}`,
      product,
      { headers }
    );
  }
  removeProduct(id: string): Observable<any> {
    const headers = this.optionHeader();
    return this.http.delete<IProduct>(
      `https://asmbe.vercel.app/api/products/${id}`,
      { headers }
    );
  }
}
