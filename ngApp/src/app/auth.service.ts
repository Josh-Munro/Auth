import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _addItemUrl = "http://localhost:3000/api/additem";

  constructor(private http: HttpClient) { }

  registerUser(user) {
     return this.http.post(this._registerUrl, user)
  }

  loginUser(user) {
    console.log(user)
    return this.http.post<any>(this._loginUrl, user)
  }

  addItem(item) {
    console.log(item)
    return this.http.post<any>(this._addItemUrl, item)
  }
}
