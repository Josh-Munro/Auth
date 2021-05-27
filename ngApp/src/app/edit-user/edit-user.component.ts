import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUserData = {
    Name: {
      type: String
    }
  }


  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  ediUser() {
    console.log('User name edited')
  }
}
