import { Component, Input } from '@angular/core';

@Component({
  selector: 'city-info-label',
  templateUrl: './city-info-label.component.html',
})
export class CityInfoLabelComponent {
  @Input() city?: string | null;
  @Input() country?: string | null;
}
