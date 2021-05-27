import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { UserStorageService } from '../user-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    Email: {
      type: String
    },
    Password: {
     type: String
    }
  }

  isSuccessful = true;
  loginIn = false

  constructor(private _userStorage: UserStorageService, private _auth: AuthService, private _router: Router, private _activatedRoute: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log(this.loginUserData)

    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res),
          this._userStorage.saveUser(res);
          this.isSuccessful = true
          this._router.navigate(['/profile']);

        },
        err => {
          console.log(err)
          this.isSuccessful = false
        }
      )
  }
}
