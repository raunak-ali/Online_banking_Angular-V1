import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/Login.service';
import { GenerateOtpService } from 'src/app/Services/generate-otp.service';
import { CheckOtpService } from 'src/app/Services/check-otp.service';

@Component({
  selector: 'app-loginasp',
  templateUrl: './loginasp.component.html',
  styleUrls: ['./loginasp.component.css'],
  providers:[LoginService,GenerateOtpService,CheckOtpService]
})
export class LoginaspComponent implements OnInit {
  loginForm!: FormGroup;
  checkotp!:FormGroup;
  jwtToken: string | undefined;
  error: string | undefined;
  isPasswordRequired: boolean = false; // Add this line
  otpResponse!: string;


  constructor(private fb: FormBuilder, private loginservice: LoginService,
    private generateotp:GenerateOtpService,
    private checkotpservice:CheckOtpService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      accountNumber: ['', Validators.required],
      loginPassword: ['', Validators.required]
    });
    this.checkotp = this.fb.group({
      accountNumber: ['', Validators.required],
      OTPValue: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.loginservice.login(formData).subscribe(
        (response) => {
          this.jwtToken = response.token;
          this.error = undefined;
        },
        (error) => {
          this.error = error.error.message;
          this.jwtToken = undefined;
        }
      );
    }
  }

  generateOtp(AccountNumber: string) {
    // Reset password field
    this.loginForm.patchValue({
      loginPassword: ''
    });
    // Set password as not required when resetting password
    this.isPasswordRequired = false;

    // Add your logic for handling password reset, using the account number if needed
    console.log(AccountNumber);

    this.generateotp.generate(AccountNumber).subscribe(
      (response: string) => {
        this.otpResponse = response; // Store the response
      },
      (error) => {
        console.error('Error:', error);
        this.error = 'Error generating OTP';
      }
    );

  }

  Oncheckotp():void{
    if (this.checkotp.valid) {
      const formData = this.loginForm.value;
      this.checkotpservice.check(formData).subscribe(
        (response) => {
          this.jwtToken = response.token;
          this.error = undefined;
        },
        (error) => {
          this.error = error.error.message;
          this.jwtToken = undefined;
        }
      );
    }
  }
}

