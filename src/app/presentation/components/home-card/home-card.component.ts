import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../core/application/services/state.service';
import { AppModel } from '../../../core/domain/entities/app';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss',
})
export class HomeCardComponent {
  constructor(private router: Router, private stateService: StateService) {}

  @Input() item?: AppModel;
  @Input() index: number = 0;

  goApps() {
    this.stateService.isLoggedIn = true;
    switch (this.index) {
      case 0:
        this.router.navigate(['todo']);
        break;
      case 1:
        this.router.navigate(['bmi']);
        break;
      case 2:
        this.router.navigate(['quotes']);
        break;
      case 3:
        this.router.navigate(['weather']);
        break;
    }
  }
}
