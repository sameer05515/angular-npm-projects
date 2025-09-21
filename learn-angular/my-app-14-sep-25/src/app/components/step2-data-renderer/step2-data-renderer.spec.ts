import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2DataRenderer } from './step2-data-renderer';

describe('Step2DataRenderer', () => {
  let component: Step2DataRenderer;
  let fixture: ComponentFixture<Step2DataRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2DataRenderer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step2DataRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
