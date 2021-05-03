import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  addItemData = {
    Name: {
      type: String
    },
    Description: {
     type: String
    }
  }

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  addItem() {
    console.log(this.addItemData)
    this._auth.addItem(this.addItemData)
   .subscribe(
     res => console.log(res),
     err => console.log(err)
   )
  }

}
