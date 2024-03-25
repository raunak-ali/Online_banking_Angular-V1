import { Observable } from "rxjs/internal/Observable";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterAccount } from "../Model/register-account";
@Injectable({
  providedIn: 'root'
})
export class NewTransactionService {
  private apiUrl = 'http://localhost:5280/AccountUser/NewTransaction';
  constructor(private http: HttpClient) { }
  Newtransaction(transaction:any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(this.apiUrl,transaction, httpOptions);
  }
}
