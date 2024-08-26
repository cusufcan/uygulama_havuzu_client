import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/domain/services/auth.service';
import { TokenService } from '../../../core/domain/services/token.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (data) => {
        this.tokenService.setToken(data);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  register() {
    this.authService.register(this.username, this.password).subscribe(
      (data) => {
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
