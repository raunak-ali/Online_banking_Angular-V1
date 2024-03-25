import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginWebApiComponent } from './components/LoginWebApiComponent/login-web-api.component';
import { LoginaspComponent } from './components/loginasp/loginasp.component';
import { TempComponent } from './components/temp/temp.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { LoginService } from './Services/Login.service';
import { OpenAccountComponent } from './components/open-account/open-account.component';
import { RegisterComponent } from './components/register/register.component';

import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NewTransactionsComponent } from './components/new-transactions/new-transactions.component';
import { NewPaypeeComponent } from './components/new-paypee/new-paypee.component';





@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    HomeComponent,
    LoginWebApiComponent,
    LoginaspComponent,
    TempComponent,
    UserComponent,
    OpenAccountComponent,
    RegisterComponent,
    NewTransactionsComponent,
    NewPaypeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
