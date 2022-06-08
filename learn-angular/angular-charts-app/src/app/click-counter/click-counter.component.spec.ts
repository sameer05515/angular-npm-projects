import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickCounterComponent } from './click-counter.component';

describe('ClickCounterComponent', () => {
  let component: ClickCounterComponent;
  let fixture: ComponentFixture<ClickCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
