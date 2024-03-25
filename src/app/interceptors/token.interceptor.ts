import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../Services/Login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.loginService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
}
//https://raghuvardhankaranam.medium.com/implementing-jwt-authentication-using-angular-52bc82096b56
//https://blog.angular-university.io/angular-jwt-authentication/
//https://medium.com/@jaydeepvpatil225/http-interceptors-in-angular-6e9891ae0538#:~:text=HTTP%20Interceptors%20in%20Angular%20are%20classes%20that%20implement%20the%20HttpInterceptor%20interface.&text=They%20can%20be%20used%20to,%2C%20logging%2C%20authentication%2C%20etc.
