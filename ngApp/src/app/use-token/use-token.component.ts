import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { UserStorageService } from '../user-storage.service';

@Component({
  selector: 'app-use-token',
  templateUrl: './use-token.component.html',
  styleUrls: ['./use-token.component.css']
})
export class UseTokenComponent implements OnInit {

  //Declaring fields
  loginUserData = {
    Email: {
      type: String
    },
    Password: {
     type: String
    }
  }

  isSuccessful = false;

  //tokenAmount;

  constructor(private _auth: AuthService, private _userStorage: UserStorageService) { }

  ngOnInit(): void {
    const user = this._userStorage.getUser();
  }

  tokenAmount = 1;

  useToken() {

    console.log(this.loginUserData)
    const user = this._userStorage.getUser();

    

    this._auth.useToken(this.loginUserData)
    .subscribe(
      res => {
        console.log(res),

        this.isSuccessful = true

        if(this.tokenAmount>=1) {
          //this.tokenAmount = this.tokenAmount - 1;
          this.tokenAmount = user.Token - 1;
        }

      },
      err => {
        console.log(err)
        this.isSuccessful = false
      }
    )
  }
}
