import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const AUTH_REPOSITORY_TOKEN = new InjectionToken<IAuthRepository>(
  'AuthRepository'
);

export interface IAuthRepository {
  login(username: string, password: string): Observable<any>;
  register(username: string, password: string): Observable<any>;
}
