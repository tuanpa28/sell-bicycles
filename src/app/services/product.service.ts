import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

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
    return this.http.post<IProduct>(
      'https://asmbe.vercel.app/api/products',
      product
    );
  }
  updateProduct(product: IProduct): Observable<any> {
    return this.http.put<IProduct>(
      `https://asmbe.vercel.app/api/products/${product._id}`,
      product
    );
  }
  removeProduct(id: string): Observable<any> {
    return this.http.delete<IProduct>(
      `https://asmbe.vercel.app/api/products/${id}`
    );
  }
}
