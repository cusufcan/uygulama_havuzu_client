import { Component, Input } from '@angular/core';

@Component({
  selector: 'city-current-label',
  templateUrl: './city-current-label.component.html',
})
export class CityCurrentLabelComponent {
  @Input() current?: number | null;
  @Input() label?: string | null;
}
