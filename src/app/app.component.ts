import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { LoginaspComponent } from './components/loginasp/loginasp.component';
import { LoginService } from './Services/Login.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedin: boolean = false;
  isnotLoggedin: boolean = true;

  constructor(private loginService: LoginService) {}
  title="MEOW";
  ngOnInit(): void {

    const token = this.loginService.getToken();
    if (token!=null && token=='') {
      this.isLoggedin = true;
      this.isnotLoggedin = false;
    } else {
      this.isLoggedin = false;
      this.isnotLoggedin = true;
    }
  }
}
