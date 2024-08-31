import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../entities/weather/weather-response';
import {
  IWeatherRepository,
  WEATHER_REPOSITROY_TOKEN as WEATHER_REPOSITORY_TOKEN,
} from '../interfaces/weather-repository.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    @Inject(WEATHER_REPOSITORY_TOKEN)
    private readonly weatherRepository: IWeatherRepository
  ) {}

  getWeather(city: string): Observable<WeatherResponse> {
    return this.weatherRepository.getWeather(city);
  }
}
