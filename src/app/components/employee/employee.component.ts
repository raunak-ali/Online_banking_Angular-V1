import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeedetils='Welcome to Employee page';
  employee:any[]=[


  ];
  /*{
    code:"emp101",name:'rashmi',
    gender:'female',annualSalary:20000,
    dateofBirth:'10/05/1983'
  },
  {
    code:"emp102",name:'parth',
    gender:'male',
    annualSalary:20000,
    dateofBirth:'10/05/1980'
  }*/

}
