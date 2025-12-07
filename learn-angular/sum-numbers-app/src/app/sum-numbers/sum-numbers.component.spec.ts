import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumNumbersComponent } from './sum-numbers.component';

describe('SumNumbersComponent', () => {
  let component: SumNumbersComponent;
  let fixture: ComponentFixture<SumNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumNumbersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SumNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
