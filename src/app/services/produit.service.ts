import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

const API_URL = 'https://api-shopping-afar.herokuapp.com/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  getAllProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(API_URL );
  }

  getProduit(id): Observable<Produit> {
    return this.http.get<Produit>(API_URL + '/' + id );
  }
}
