export class BMIModel {
  constructor(private weight: number, private height: number) {}

  public calculateBMI(): number {
    let heightInMeter = this.height / 100;
    let bmi = this.weight / (heightInMeter * heightInMeter);
    return parseFloat(bmi.toFixed(2));
  }

  public getBMIString(): string {
    const bmi = this.calculateBMI();
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
}
