import { Component, OnInit } from '@angular/core';
import { Weather } from '../../app.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  weather: Weather = {
    city: "Los Angeles",
    conditions: "Sunny",
    temperature: 70,
    icon: ""
  }

  update(weather: Weather) {
    this.weather = weather
  }
}
