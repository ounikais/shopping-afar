import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

const API_URL = 'https://api-shopping-afar.herokuapp.com/order';
const API_URL_1 = 'https://api-shopping-afar.herokuapp.com/orderRef';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  addOrder(order:Order): Observable<Order> {
    return this.http.post<Order>(API_URL, order);
  }

  getOrderRef(orderRef: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${API_URL_1}/?orderRef=${orderRef}`, httpOptions );
  }
}
