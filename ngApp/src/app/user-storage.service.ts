import { Injectable } from '@angular/core';
import {LoginComponent} from '../app/login/login.component';


const userdata = '';
@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  public saveUser(token: string): void {
    window.sessionStorage.removeItem(userdata);
  }

  public getUser(): string {
    return window.sessionStorage.getItem(userdata);
  }
}
