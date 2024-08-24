import { Component } from '@angular/core';
import { AppModel } from '../../../core/domain/entities/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private baseUrl = 'assets/images/';
  items = [
    new AppModel(
      'ToDo',
      'Görevlerinizi verimli bir şekilde organize edin. Günlük sorumluluklarınızı kolayca takip edin.',
      `${this.baseUrl}todo.jpg`
    ),
    new AppModel(
      'BMI',
      'Sağlığınızı takip edin. Vücut Kitle İndeksinizi (BMI) hesaplayın.',
      `${this.baseUrl}bmi.jpg`
    ),
    new AppModel(
      'Random Quotes',
      'Her gün ilham verici sözlerle dolu bir güne başlayın.',
      `${this.baseUrl}twitter.jpg`
    ),
    new AppModel(
      'Weather',
      'Güncel ve doğru hava durumu bilgileriyle her zaman bir adım önde olun.',
      `${this.baseUrl}weather.jpg`
    ),
  ];
}
