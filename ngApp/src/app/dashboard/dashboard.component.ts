import { Component, OnInit } from '@angular/core';
import { AdminDashboardComponent} from '../admin-dashboard/admin-dashboard.component';
import {AuthService} from '../auth.service';
import {EventService} from '../event.service';
import { UserStorageService } from '../user-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showAdminBoard = false;
  

  constructor(private _auth: AuthService, private _userStorage: UserStorageService) { }

  ngOnInit(): void {
    const user = this._userStorage.getUser();
    this.showAdminBoard = user.IsAdmin;
  }

        
  }
  


