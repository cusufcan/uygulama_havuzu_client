import { Component } from '@angular/core';
import { BmiService } from '../../../../core/domain/services/bmi.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.scss',
})
export class BmiComponent {
  weight: string | null = null;
  height: string | null = null;
  bmiResult: number | null = null;
  bmiString: string | null = null;

  bmiCategoryList = [
    { category: 'Underweight', bmi: '<18.5' },
    { category: 'Normal', bmi: '18.5 - 24.9' },
    { category: 'Overweight', bmi: '25 - 29.9' },
    { category: 'Obese', bmi: '>30' },
  ];

  constructor(private bmiService: BmiService) {}

  calculateBMI() {
    let numWeight = this.convertType(this.weight ?? '-1');
    let numHeight = this.convertType(this.height ?? '-1');

    if (numWeight === -1 || numHeight === -1) {
      alert('Invalid input');
      return;
    }

    if (numWeight > 0 && numHeight > 0) {
      let bmiResponse = this.bmiService.calculateBMI(numWeight, numHeight);
      this.bmiResult = bmiResponse.bmi;
      this.bmiString = bmiResponse.category;
    }
  }

  reset() {
    this.weight = null;
    this.height = null;
    this.bmiResult = null;
    this.bmiString = null;
  }

  convertType(value: string): number {
    return parseFloat(value);
  }
}
