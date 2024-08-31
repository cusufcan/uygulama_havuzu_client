import { Component, Input } from '@angular/core';
import { WeatherResponse } from '../../../../core/domain/entities/weather/weather-response';

@Component({
  selector: 'weather-city-card',
  templateUrl: './city-card.component.html',
})
export class CityCardComponent {
  @Input() weather?: WeatherResponse;
}
