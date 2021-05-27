import { Injectable } from '@angular/core';
import {LoginComponent} from '../app/login/login.component';



const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})

export class UserStorageService {

  constructor() {}

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    console.log('Saved user' + user);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
  }
}
