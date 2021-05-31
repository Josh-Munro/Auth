import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

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

  tokenAmount = 1;

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  useToken() {
    console.log(this.loginUserData)

    this._auth.useToken(this.loginUserData)
    .subscribe(
      res => {
        console.log(res),

        this.isSuccessful = true

        if(this.tokenAmount>0) {
          this.tokenAmount = this.tokenAmount - 1;
        }

      },
      err => {
        console.log(err)
        this.isSuccessful = false
      }
    )
  }
}
