import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //Register user data
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

  //Contructor passing in route and auth service
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  //Registering user function -- uses data from array and passes to _auth register user
  registerUser() {
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
   .subscribe(
     res => {
      console.log(res)
      //If successful takes user to dashboard
      this._router.navigate(['dashboard'])
     },
     err => console.log(err)
   )
  }

}
