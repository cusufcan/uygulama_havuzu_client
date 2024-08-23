import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../../core/application/services/state.service';
import { AppModel } from '../../../core/domain/entities/app';
import { RouteIndexes } from '../../../core/domain/enums/route-indexes';
import { RouteNames } from '../../../core/domain/enums/route-names';

@Component({
  selector: 'home-card',
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
      case RouteIndexes.TODO:
        this.router.navigate([RouteNames.TODO]);
        break;
      case RouteIndexes.BMI:
        this.router.navigate([RouteNames.BMI]);
        break;
      case RouteIndexes.QUOTES:
        this.router.navigate([RouteNames.QUOTES]);
        break;
      case RouteIndexes.WEATHER:
        this.router.navigate([RouteNames.WEATHER]);
        break;
    }
  }
}
