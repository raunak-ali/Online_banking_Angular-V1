import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private fb: FormBuilder)//FormBuilder service is injected into the component constructor as fb.
   { }
  loginForm!: FormGroup;
  // Components that implement the OnInit interface must define a method
  //called ngOnInit(). This method is automatically
  //invoked by Angular after Angular has set the component's input properties.
  ngOnInit(): void {
    //method is used to create a FormGroup, which represents a group of form controls.
    // Each form control is defined as a key-value pair where the key is the control name
    //(e.g., email, password) and the value is the initial value of the control.
    this.loginForm = this.fb.group({
      email: [''/* The initial values for the email and password fields are set to empty strings ('').*/
      , [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Convenience getter for easy access to form controls
  get f() { return this.loginForm.controls; }
  // In TypeScript, a getter property allows you to define a method that
  // behaves like a property. When you access the property,
  //the getter method is automatically called,
  // and its return value is returned as the property value.
  // /The controls property is an object that contains all the form controls defined in the loginForm FormGroup.

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    // Implement login logic here
    console.log('Login successful!');
  }
}
