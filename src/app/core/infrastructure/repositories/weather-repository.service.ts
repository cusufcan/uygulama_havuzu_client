import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../../domain/entities/weather/weather-response';
import { IWeatherRepository } from '../../domain/interfaces/weather-repository.interface';
import { WeatherApi } from '../api/weather.api';

@Injectable({
  providedIn: 'root',
})
export class WeatherRepositoryService implements IWeatherRepository {
  constructor(private weatherApi: WeatherApi) {}

  getWeather(city: string): Observable<WeatherResponse> {
    return this.weatherApi.getWeather(city);
  }
}
