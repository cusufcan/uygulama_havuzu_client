import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../entities/token';
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

  login(username: string, password: string): Observable<Token> {
    return this.authRepository.login(username, password);
  }

  register(username: string, password: string): Observable<Token> {
    return this.authRepository.register(username, password);
  }
}
