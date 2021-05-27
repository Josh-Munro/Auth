import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/events";
  private _specialEventsUrl = "http://localhost:3000/api/special";
  private _currentUser = "http://localhost:3000/api/login";


  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._eventsUrl)
  }

  getUser() {
    return this.http.get<any>(this._currentUser);
  }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  }
}
