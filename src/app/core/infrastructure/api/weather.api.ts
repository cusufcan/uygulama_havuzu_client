import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../../domain/entities/weather/weather-response';
import { TokenService } from '../../domain/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherApi {
  private apiUrl = 'http://localhost:5053/api/weather';

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getWeather(city: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${this.apiUrl}/${city}`, {
      headers: this.getHeaders(),
    });
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'text/plain',
      Authorization: `Bearer ${this.tokenService.getToken()?.token}`,
    });
  }
}
