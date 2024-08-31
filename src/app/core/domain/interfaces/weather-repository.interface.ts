import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../entities/weather/weather-response';

export const WEATHER_REPOSITROY_TOKEN = new InjectionToken<IWeatherRepository>(
  'WeatherRepository'
);

export interface IWeatherRepository {
  getWeather(city: string): Observable<WeatherResponse>;
}
