import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from 'src/app/Model/transactions';
import { NewTransactionService } from 'src/app/Services/new-transaction.service';

@Component({
  selector: 'app-new-transactions',
  templateUrl: './new-transactions.component.html',
  styleUrls: ['./new-transactions.component.css']
})
export class NewTransactionsComponent implements OnInit{

  constructor(private fb:FormBuilder,private newtransactionservice:NewTransactionService){}
  NewTransactionForm!:FormGroup;
  Transactionmodel=new Transaction();

  ngOnInit(): void {
    this.NewTransactionForm = this.fb.group({
      transactionId:[0],
      type: ['Savings'],
      amount: ['', Validators.required],
      transactionDate:[new Date(), Validators.required],
      statement: ['', Validators.required],
      accountNumber:['', Validators.required],
      account:[null],
      paypeeIdAccountNumber: ['', Validators.required],
      paypee: [null]
    });
  }

  onSubmit(): void {
    console.log('Form values:', this.NewTransactionForm.value);


    if (this.NewTransactionForm.valid) {
      // Remove ConfirmLoginPassword and ConfirmTransactionPassword controls


      this.Transactionmodel = this.NewTransactionForm.value;

      this.newtransactionservice.Newtransaction(this.Transactionmodel).subscribe(
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
