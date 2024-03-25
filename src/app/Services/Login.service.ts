import { Observable } from "rxjs/internal/Observable";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  private tokenKey = 'auth_token';

  private apiUrl = 'http://localhost:5280/UserProfile/Login';

  constructor(private http: HttpClient) { }

  login(formData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(this.apiUrl, formData, httpOptions).pipe(
      tap(response => {
        if (response && response.token) {
          this.saveToken(response.token);
        }
      })
    );
  }

  private saveToken(token: string): void {
    sessionStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    sessionStorage.removeItem(this.tokenKey);
  }
}
