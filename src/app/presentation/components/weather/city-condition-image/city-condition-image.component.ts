import { Component, Input } from '@angular/core';

@Component({
  selector: 'city-condition-image',
  templateUrl: './city-condition-image.component.html',
})
export class CityConditionImageComponent {
  @Input() icon?: string | null;
}
