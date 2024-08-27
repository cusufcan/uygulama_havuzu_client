import { Injectable } from '@angular/core';
import { BMIModel } from '../entities/bmi/bmi';
import { BmiResponse } from '../entities/bmi/bmi-response';

@Injectable({
  providedIn: 'root',
})
export class BmiService {
  calculateBMI(weight: number, height: number): BmiResponse {
    const bmi = new BMIModel(weight, height);
    return new BmiResponse(bmi.calculateBMI(), bmi.getBMIString());
  }
}
