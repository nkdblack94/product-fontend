import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProduct} from './iproduct';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProduct(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(API_URL + '/');
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(API_URL + '/createProduct', product);
  }

  showUpdateProduct(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(API_URL + `/showUpdate/${id}`);
  }

  updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(API_URL + `/updateProduct/${id}`, product);
  }

  showDeleteProduct(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(API_URL + `/showDelete/${id}`);
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(API_URL + `/deleteProduct/${id}`);
  }
}

