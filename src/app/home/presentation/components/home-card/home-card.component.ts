import { Component, Input } from '@angular/core';
import { AppModel } from '../../../domain/app.model';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss',
})
export class HomeCardComponent {
  @Input() item?: AppModel;
  @Input() index: number = 0;

  goApps() {
    switch (this.index) {
      case 0:
        console.log('Go to ToDo App');
        break;
      case 1:
        console.log('Go to BMI App');
        break;
      case 2:
        console.log('Go to Random Quotes App');
        break;
      case 3:
        console.log('Go to Weather App');
        break;
    }
  }
}
