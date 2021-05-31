import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {LoginComponent} from '../login/login.component'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  //Item data array with appropraite fields
  addItemData = {
    Name: {
      type: String
    },
    Description: {
     type: String
    }
  }
//If successful
  isSuccessful = true;

  //Passing auth service in constructor
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  //Add item method passes data to the auth service 
  addItem() {
    console.log(this.addItemData)
    this._auth.addItem(this.addItemData)
   .subscribe(
     res => console.log(res),
     err => console.log(err)
   )
  }

}
