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
    new AppModel('ToDo', 'ToDo App', `${this.baseUrl}todo.jpg`),
    new AppModel('BMI', 'BMI App', `${this.baseUrl}bmi.jpg`),
    new AppModel(
      'Random Quotes',
      'Random Quotes App',
      `${this.baseUrl}twitter.jpg`
    ),
    new AppModel('Weather', 'Weather App', `${this.baseUrl}weather.jpg`),
  ];
}
