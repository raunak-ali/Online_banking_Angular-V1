import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login-web-api',
  templateUrl: './login-web-api.component.html',
  styleUrls: ['./login-web-api.component.css']
})
export class LoginWebApiComponent implements OnInit {
  loginForm!: FormGroup;
  jwtToken: string | undefined;
  error: string | undefined;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      accountNumber: ['', Validators.required],
      loginPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.http.post<any>('http://localhost:5280/UserProfile/Login', formData)
        .subscribe(
          (response) => {
            this.jwtToken = response.token; // Assuming the token is returned in the response
            this.error = undefined; // Clear any previous error
          },
          (error) => {
            this.error = error.error.message; // Assuming the error message is returned in the response
            this.jwtToken = undefined; // Clear any previous token
          }
        );
    }
  }
}
