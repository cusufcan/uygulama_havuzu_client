import { Component } from '@angular/core';
import { AppModel } from '../../../core/domain/entities/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  items = [
    new AppModel(
      'ToDo',
      'Görevlerinizi verimli bir şekilde organize edin. Günlük sorumluluklarınızı kolayca takip edin.',
      `check-square`
    ),
    new AppModel(
      'BMI',
      'Sağlığınızı takip edin. Vücut Kitle İndeksinizi (BMI) hesaplayın.',
      `chart-line`
    ),
    new AppModel(
      'Random Quotes',
      'Her gün ilham verici sözlerle dolu bir güne başlayın.',
      `twitter`
    ),
    new AppModel(
      'Weather',
      'Güncel ve doğru hava durumu bilgileriyle her zaman bir adım önde olun.',
      `cloud`
    ),
  ];
}
