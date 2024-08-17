import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from '../../../application/services/user.service';
import { User } from '../../../domain/models/user.model';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService],
})
export class RegisterComponent {
  user: User = { id: 0, username: '', email: '', password: '' };

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  register(): void {
    this.userService.register(this.user).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Başarılı',
          detail: 'Kayıt başarılı',
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
