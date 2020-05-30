import { Component, OnInit } from '@angular/core';
import { Weather } from '../../app.component'

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component {
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
