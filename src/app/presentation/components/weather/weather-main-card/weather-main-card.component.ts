import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherResponse } from '../../../../core/domain/entities/weather/weather-response';

@Component({
  selector: 'weather-main-card',
  templateUrl: './weather-main-card.component.html',
})
export class WeatherMainCardComponent {
  @Input() weather?: WeatherResponse;

  @Output() onSearchClicked = new EventEmitter<string>();

  cityName = '';

  fetchWeather() {
    if (this.cityName.trim() === '') {
      alert('Please enter a city name');
      return;
    }
    this.onSearchClicked.emit(this.cityName);
  }
}
