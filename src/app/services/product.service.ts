import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  searchProducts(queryObject: any): Observable<any> {
    return this.http.get<IProduct[]>('http://localhost:8081/api/products', {
      params: queryObject,
    });
  }
  getProducts(): Observable<any> {
    return this.http.get<IProduct[]>('http://localhost:8081/api/products?_expand=category');
  }
  getProductById(id: string): Observable<any> {
    return this.http.get<IProduct>(
      `http://localhost:8081/api/products/${id}`
    );
  }
  createProduct(product: IProduct): Observable<any> {
    return this.http.post<IProduct>(
      'http://localhost:8081/api/products',
      product
    );
  }
  updateProduct(product: IProduct): Observable<any> {
    return this.http.put<IProduct>(
      `http://localhost:8081/api/products/${product._id}`,
      product
    );
  }
  removeProduct(id: string): Observable<any> {
    return this.http.delete<IProduct>(
      `http://localhost:8081/api/products/${id}`
    );
  }

  private productByCategory = new BehaviorSubject<any>(null);

  getProductByCategory (): Observable<any> {
    return this.productByCategory.asObservable();

  }



  setProductByCategory (products:any) {
    this.productByCategory.next(products);
  }
}
