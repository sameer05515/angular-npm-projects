import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAViewer } from './qaviewer';

describe('QAViewer', () => {
  let component: QAViewer;
  let fixture: ComponentFixture<QAViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QAViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QAViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
