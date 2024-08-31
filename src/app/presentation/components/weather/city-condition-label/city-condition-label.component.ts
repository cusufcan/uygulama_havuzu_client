import { Component, Input } from '@angular/core';

@Component({
  selector: 'city-condition-label',
  templateUrl: './city-condition-label.component.html',
})
export class CityConditionLabelComponent {
  @Input() icon = '';
  @Input() condition?: string | null;
}
