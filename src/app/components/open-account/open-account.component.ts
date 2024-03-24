import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OpenAccount } from 'src/app/Model/open-account';
import { OpenAccountService } from 'src/app/Services/open-account.service';
import { PermanenetAddress } from '../../Model/permanenet-address';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {
  accountProfileForm!: FormGroup ;
  accountProfileModel = new OpenAccount();
  selectedFile: any;

  constructor(private fb: FormBuilder,private openaccountservice:OpenAccountService) {}

  ngOnInit(): void {
    this.accountProfileForm = this.fb.group({
      Title: ['', Validators.required], // Changed to lowercase
      First_name: ['', Validators.required], // Changed to lowercase
      Middle_name: [''], // Changed to lowercase
      Last_name: ['', Validators.required], // Changed to lowercase
      Father_name: ['', Validators.required], // Changed to lowercase
      Mobilenumber: ['', Validators.required], // Changed to lowercase
      Email_id: ['', Validators.required], // Changed to lowercase
      Aadharnumber: ['', Validators.required], // Changed to lowercase
      DataOfBirth: ['', Validators.required], // Changed to lowercase
      AccountNumber: ['0'], // Changed to lowercase
      PermanantAddress: this.fb.group({
        AddressLine1: [0],
        AddressLine2: ['', Validators.required],
        Landmark: ['', Validators.required],
        State: ['', Validators.required],
        City: ['', Validators.required],
        Pincode: ['', Validators.required],
        IsMailingAddress: ['', Validators.required],
        AccountUserId: [0]
      }),
      ResidentialAddress: this.fb.group({
        AddressId: [0],
        AddressLine1: ['', Validators.required],
        AddressLine2: ['', Validators.required],
        Landmark: ['', Validators.required],
        State:['', Validators.required],
        City: ['', Validators.required],
        Pincode: ['', Validators.required],
        AccountUserId: [0]
      }),
      OccupationType: ['', Validators.required], // Changed to lowercase
      SourceOfIncome: ['', Validators.required], // Changed to lowercase
      GrossAnnualIncome: ['', Validators.required], // Changed to lowercase
      OptedForDebitCard: [false], // Changed to lowercase and added default value
      OptedForNetBanking: [false], // Changed to lowercase and added default value
      ValidationDocs: [''] // Changed to lowercase
    });}


  onSubmit(): void {
    if (this.accountProfileForm.valid) {
      const formData = this.accountProfileForm.value;



      // Assign form data to accountProfileModel
      this.accountProfileModel = { ...formData };

      formData.ValidationDocs=this.selectedFile;
      const file = formData.ValidationDocs as File;

      // Convert file to byte array
      this.readFileAsByteArray(file).then(byteArray => {
        // Assign base64 string to ValidationDocsData
        this.accountProfileModel.ValidationDocsData = byteArray;


        // Set ValidationDocs to null
        this.accountProfileModel.ValidationDocs = null;
        // Send the model to the service
        this.openaccountservice.addAccountProfile(this.accountProfileModel).subscribe(
          response => {
            // Handle success
            console.log('Account profile added successfully:', response);
          },
          error => {
            // Handle error
            console.error('Error adding account profile:', error);
          }
        );
      });
    }
  }

  readFileAsByteArray(file: File): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const byteArray = new Uint8Array(arrayBuffer);
        resolve(byteArray);
      };
      reader.onerror = () => {
        reject(new Error('Failed to read file as byte array'));
      };
      reader.readAsArrayBuffer(file);
    });
  }
  onFileChange(event: any): void {
    const inputElement = event.target;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.selectedFile = file;
      // Update form value with the selected file
      //this.accountProfileForm.get('validationDocs')?.setValue(file);
    }
  }
}
