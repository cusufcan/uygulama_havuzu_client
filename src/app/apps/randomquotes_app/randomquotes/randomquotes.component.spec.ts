import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomquotesComponent } from './randomquotes.component';

describe('RandomquotesComponent', () => {
  let component: RandomquotesComponent;
  let fixture: ComponentFixture<RandomquotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomquotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomquotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
