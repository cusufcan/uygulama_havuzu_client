import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../domain/models/user.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  register(user: User): Observable<any> {
    return this.apiService.register(user);
  }

  login(username: string, password: string): Observable<any> {
    return this.apiService.login(username, password);
  }
}
