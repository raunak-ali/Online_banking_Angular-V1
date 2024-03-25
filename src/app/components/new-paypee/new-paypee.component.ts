import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paypee } from 'src/app/Model/paypee';
import { PaypeeService } from 'src/app/Services/paypee.service';

@Component({
  selector: 'app-new-paypee',
  templateUrl: './new-paypee.component.html',
  styleUrls: ['./new-paypee.component.css']
})
export class NewPaypeeComponent implements OnInit{

  constructor(private fb:FormBuilder,private newpaypeeservice:PaypeeService){}
  paypeeform!:FormGroup;
  paypeemodel=new Paypee();

  ngOnInit(): void {
    this.paypeeform = this.fb.group({
      PaypeeIdAccountNumber:['', Validators.required],

      PaypeeName:['', Validators.required],

      AccountNumber:['', Validators.required],

      NickName:['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.paypeeform.valid) {


      this.paypeemodel = this.paypeeform.value;

      this.newpaypeeservice.NewPaypee(this.paypeemodel).subscribe(
        (response: any) => {
          console.log('Paypee added successfully:', response);
          // Optionally, you can navigate to another page or display a success message here
        },
        (error: any) => {
          console.log('Paypee Not added Error:', error);
          // Handle error appropriately, such as displaying error messages to the user
        }
      );
    }
  }
}
