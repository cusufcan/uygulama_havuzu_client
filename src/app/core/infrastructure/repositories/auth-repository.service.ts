import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthRepository } from '../../domain/interfaces/auth-repository.interface';
import { AuthApi } from '../api/auth.api';

@Injectable({
  providedIn: 'root',
})
export class AuthRepositoryService implements IAuthRepository {
  constructor(private authApi: AuthApi) {}

  login(username: string, password: string): Observable<any> {
    return this.authApi.login(username, password);
  }
  register(username: string, password: string): Observable<any> {
    return this.authApi.register(username, password);
  }
}
