import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  private apiUrl = 'http://localhost:5053/api/auth';

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/register?username=${username}&password=${password}`,
      {}
    );
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/login?username=${username}&password=${password}`,
      {}
    );
  }
}
