import { Component, Input } from '@angular/core';

@Component({
  selector: 'bmi-card',
  templateUrl: './bmi-card.component.html',
  styleUrls: ['./bmi-card.component.scss'],
})
export class BmiCardComponent {
  @Input() bmi?: string;
  @Input() category?: string;
}
