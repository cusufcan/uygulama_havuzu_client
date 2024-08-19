import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../application/state.service';
import { UserService } from '../../../application/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  username = '';
  password = '';

  constructor(
    private userService: UserService,
    private stateService: StateService,
    private router: Router
  ) {}

  login() {
    console.log(`${this.username} ${this.password}`);
    this.userService.login(this.username, this.password).subscribe(
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
    this.userService.register(this.username, this.password).subscribe(
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
