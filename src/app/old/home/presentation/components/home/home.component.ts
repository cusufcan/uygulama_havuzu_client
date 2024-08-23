import { Component } from '@angular/core';
import { AppModel } from '../../../domain/app.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  items = [
    new AppModel('ToDo', 'ToDo App', 'blue'),
    new AppModel('BMI', 'BMI App', 'green'),
    new AppModel('Random Quotes', 'Random Quotes App', 'yellow'),
    new AppModel('Weather', 'Weather App', 'gray'),
  ];
}
