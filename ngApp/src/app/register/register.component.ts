import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    Email: {
      type: String
    },
    Password: {
     type: String
    },
    IsAdmin: {
      type: Boolean
    }
  }

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
   .subscribe(
     res => {
      console.log(res)
      this._router.navigate(['dashboard'])
     },
     err => console.log(err)
   )
  }

}
