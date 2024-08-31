import { Component } from '@angular/core';
import { WeatherResponse } from '../../../../core/domain/entities/weather/weather-response';
import { WeatherService } from '../../../../core/domain/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  customCity?: WeatherResponse;

  private defaultCityNames = ['London', 'Istanbul', 'Berlin', 'Paris'];
  defaultCityWeathers: WeatherResponse[] = [];

  constructor(private weatherService: WeatherService) {
    this.fetchDefaultWeather();
  }

  fetchDefaultWeather() {
    for (let i = 0; i < this.defaultCityNames.length; i++) {
      const name = this.defaultCityNames[i];
      this.weatherService.getWeather(name).subscribe((data) => {
        this.defaultCityWeathers[i] = data;
      });
    }
  }

  fetchCustomWeather(cityName: string) {
    if (this.customCity?.name?.toLowerCase() == cityName.toLowerCase()) {
      console.log('Already fetched');

      return;
    }

    this.weatherService.getWeather(cityName).subscribe((data) => {
      this.customCity = data;
    });
  }
}
