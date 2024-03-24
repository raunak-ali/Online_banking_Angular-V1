import { Observable } from "rxjs/internal/Observable";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OpenAccountService {
  private apiUrl = 'http://localhost:5280/AccountUser/addAccount';
  constructor(private http: HttpClient) { }
  addAccountProfile(acProfile: any): Observable<any> {
    const base64String = btoa(String.fromCharCode.apply(null, acProfile.ValidationDocsData));
acProfile.ValidationDocsData=base64String;


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(this.apiUrl,{acProfile}, httpOptions);
  }
}
