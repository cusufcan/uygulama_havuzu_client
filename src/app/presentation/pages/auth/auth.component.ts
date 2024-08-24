import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../core/application/services/state.service';
import { AuthService } from '../../../core/domain/services/auth.service';

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
    private stateService: StateService,
    private router: Router
  ) {
    //this.init();
  }

  async init() {
    this.authService.login('admin', 'root').subscribe(
      (data) => {
        this.stateService.isLoggedIn = true;
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (data) => {
        this.stateService.isLoggedIn = true;
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
        this.stateService.isLoggedIn = true;
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
