import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { LoginWebApiComponent } from './components/LoginWebApiComponent/login-web-api.component';
import { LoginaspComponent } from './components/loginasp/loginasp.component';
import { TempComponent } from './components/temp/temp.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
{
path:"User",
component:UserComponent
},
    {
      path:"Loginasp",
      component:LoginaspComponent
    },
    {
    path:"TempComponent",
    component:TempComponent
  },
  {path:"employee",
component:EmployeeComponent},
{
  path:"Login",
  component:LoginComponent
},
{
  path:"WebApi",
  component:LoginWebApiComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
