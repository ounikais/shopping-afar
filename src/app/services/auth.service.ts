import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/api/';

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
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }

  register(firstName: string, lastName: string, phone: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      firstName,
      lastName,
      phone,
      email,
      password
    }, httpOptions);
  }

  addPass(ref: string, firstName: string, lastName: string, phone: Number, rue: string, ville: string, gouvernorat: string, codepostal: Number): Observable<any> {
    return this.http.post(AUTH_API + 'addPass', {
      ref,
      firstName,
      lastName,
      phone,
      rue,
      ville,
      gouvernorat,
      codepostal
    }, httpOptions);
  }
}
