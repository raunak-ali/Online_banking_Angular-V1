import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  form!: FormGroup;

  userlist: User[] = []
  constructor() { }

  ngOnInit() {

    this.form = new FormGroup(
      {
        name: new FormControl('',[Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
        contact: new FormControl('',[Validators.required,
          Validators.pattern('[0-9]*')]),
          email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
      }
    )
  }


  AddUser(form: { value: User; })
  {
    this.userlist.push(form.value);
    console.log(form.value);

  }
}
