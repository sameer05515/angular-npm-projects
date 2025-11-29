import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1DataRenderer } from './step1-data-renderer';

describe('Step1DataRenderer', () => {
  let component: Step1DataRenderer;
  let fixture: ComponentFixture<Step1DataRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step1DataRenderer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step1DataRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
