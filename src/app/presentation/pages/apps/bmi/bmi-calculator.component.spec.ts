import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { BmiCardComponent } from '../../../components/bmi-card/bmi-card.component';
import { BmiComponent } from './bmi.component';

describe('BmiComponent', () => {
  let component: BmiComponent;
  let fixture: ComponentFixture<BmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BmiComponent, BmiCardComponent],
      imports: [CardModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('BMI calculate correctly', () => {
    component.weight = '70';
    component.height = '175';
    component.calculateBMI();
    expect(component.bmiResult).toBeCloseTo(22.86, 2);
  });

  it('If bmiString is correct', () => {
    component.weight = '40';
    component.height = '175';
    component.calculateBMI();
    expect(component.bmiString).toBe('Underweight');

    component.weight = '70';
    component.height = '175';
    component.calculateBMI();
    expect(component.bmiString).toBe('Normal');

    component.weight = '80';
    component.height = '175';
    component.calculateBMI();
    expect(component.bmiString).toBe('Overweight');

    component.weight = '100';
    component.height = '175';
    component.calculateBMI();
    expect(component.bmiString).toBe('Obese');
  });

  it('If weight or weight is invalid', () => {
    component.weight = 'a';
    component.height = '175';
    component.calculateBMI();
    expect(component.bmiResult).toBeNull();

    component.weight = '70';
    component.height = 'a';
    component.calculateBMI();
    expect(component.bmiResult).toBeNull();
  });

  it('If height or height is zero', () => {
    component.weight = '70';
    component.height = '0';
    component.calculateBMI();
    expect(component.bmiResult).toBeNull();

    component.weight = '0';
    component.height = '175';
    component.calculateBMI();
    expect(component.bmiResult).toBeNull();
  });
});
