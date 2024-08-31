import { Component } from '@angular/core';
import { AppModel } from '../../../core/domain/entities/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  basePath = 'assets/images';
  items = [
    new AppModel('ToDo', `${this.basePath}/todo.jpg`),
    new AppModel('BMI', `${this.basePath}/bmi.jpg`),
    new AppModel('Random Quotes', `${this.basePath}/twitter.jpg`),
    new AppModel('Weather', `${this.basePath}/weather.jpg`),
  ];
}
