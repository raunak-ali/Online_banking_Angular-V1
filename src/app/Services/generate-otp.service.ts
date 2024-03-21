import { Observable } from "rxjs/internal/Observable";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from "rxjs/internal/operators/map";
@Injectable({
  providedIn: 'root'
})
export class GenerateOtpService {

  private apiUrl = 'http://localhost:5280/UserProfile/GenerateOtp';

  constructor(private http: HttpClient) { }

  generate(AccountNumber:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.http.post<any>(this.apiUrl,{AccountNumber},httpOptions) .pipe(
      map(response => response.message))
    ;
  }

}
