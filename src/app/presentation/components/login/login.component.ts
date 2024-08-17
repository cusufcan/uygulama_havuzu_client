import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from '../../../application/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  login(): void {
    this.userService.login(this.username, this.password).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Başarılı',
          detail: 'Giriş başarılı',
        });
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Hata',
          detail: err.message,
        });
      },
    });
  }
}
