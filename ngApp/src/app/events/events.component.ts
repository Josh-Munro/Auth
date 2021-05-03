import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  //events = []

  addItemData = {
    Name: {
      type: String
    },
    Description: {
     type: String
    }
  }
  constructor(private _eventService: EventService) { }

  ngOnInit(): void {
    this._eventService.getEvents()
      .subscribe(
        res => this.addItemData = res,
        err => console.log(err)
      )
  }

}
