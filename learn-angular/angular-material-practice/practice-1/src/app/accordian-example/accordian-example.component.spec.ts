import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianExampleComponent } from './accordian-example.component';

describe('AccordianExampleComponent', () => {
  let component: AccordianExampleComponent;
  let fixture: ComponentFixture<AccordianExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
