import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterAccount } from 'src/app/Model/register-account';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private fb:FormBuilder,private registerservice:RegisterService){}
  registerform!:FormGroup;
  registermodel=new RegisterAccount();

  ngOnInit(): void {
    this.registerform = this.fb.group({
UserId:[0],
IsAdmin :[false],
LoginPassword:['', Validators.required],
ConfirmLoginPassword:['', Validators.required],
TransactionPassword:['', Validators.required],
ConfirmTransactionPassword:['', Validators.required],
isLocked:[false],
extra_info:[''],
isConfirmedUserProfile:[false],
AccountNumber:['', Validators.required],
AccountUserId:[0],
AccountProfile:[null],
Account:[null],
    });
  }

  onSubmit(): void {
    if (this.registerform.valid) {
      // Remove ConfirmLoginPassword and ConfirmTransactionPassword controls
      this.registerform.removeControl('ConfirmLoginPassword');
      this.registerform.removeControl('ConfirmTransactionPassword');

      this.registermodel = this.registerform.value;

      this.registerservice.RegisterUser(this.registermodel).subscribe(
        (response: any) => {
          console.log('User profile added successfully:', response);
          // Optionally, you can navigate to another page or display a success message here
        },
        (error: any) => {
          console.log('User profile Not added Error:', error);
          // Handle error appropriately, such as displaying error messages to the user
        }
      );
    }
  }
}
