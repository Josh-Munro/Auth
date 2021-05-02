import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    Email: {
      
    },
    Password: {
     
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  registerUser() {
   return console.log(this.registerUserData)
  }

}
