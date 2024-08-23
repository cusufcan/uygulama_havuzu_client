import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import {
  AUTH_REPOSITORY_TOKEN,
  IAuthRepository,
} from '../interfaces/auth-repository.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Inject(AUTH_REPOSITORY_TOKEN)
    private readonly authRepository: IAuthRepository
  ) {}

  login(username: string, password: string): Observable<User> {
    return this.authRepository.login(username, password);
  }

  register(username: string, password: string): Observable<User> {
    return this.authRepository.register(username, password);
  }
}
