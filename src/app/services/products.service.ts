import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModule } from '../models/products/products.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  url = 'https://trazaorganica-agrocultiva.herokuapp.com';

  getAllProducts(): Observable<ProductsModule[]> {
    return this.http.get<ProductsModule[]>(this.url+'/api/product');
  }

  getProduct(id: number): Observable<ProductsModule> {
    return this.http.get(this.url +`/api/product/${id}`);
  }

  createProduct(product: ProductsModule): Observable<ProductsModule> {
    return this.http.post<ProductsModule>(this.url +`/api/product/`, product);
  }

  updateProduct(product: ProductsModule): Observable<ProductsModule> {
    return this.http.put<ProductsModule>(this.url + `/api/product/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.url +`/api/product/${id}`);
  }



}
