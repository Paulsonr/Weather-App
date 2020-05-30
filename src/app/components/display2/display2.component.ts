import { Component, OnInit } from '@angular/core';
import { Weather } from '../../app.component'

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component {
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
