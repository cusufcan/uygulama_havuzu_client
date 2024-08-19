import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  register(username: string, password: string): Observable<any> {
    return this.apiService.register(username, password);
  }

  login(username: string, password: string): Observable<any> {
    return this.apiService.login(username, password);
  }
}
