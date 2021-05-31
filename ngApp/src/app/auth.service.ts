import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Reference to API url

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _addItemUrl = "http://localhost:3000/api/additem";
  private _useTokenUrl = "http://localhost:3000/api/useToken";


  constructor(private http: HttpClient) { }

  registerUser(user) {
     return this.http.post(this._registerUrl, user)
  }

  //Login user method retrieves information login component and passes it through and sends to API
  loginUser(user) {
    console.log(user)
    return this.http.post<any>(this._loginUrl, user)
    
  }

  //Use token
  useToken(token) {
    console.log(token)
    return this.http.post<any>(this._useTokenUrl, token)
    
  }

  currentUser(user) {
    return this.http.get<any>(this._loginUrl, user)
  }

  //Adding item service function 
  addItem(item) {
    console.log(item)
    return this.http.post<any>(this._addItemUrl, item)
  }
}
