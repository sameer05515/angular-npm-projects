import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvMessageRenderer } from './conv-message-renderer';

describe('ConvMessageRenderer', () => {
  let component: ConvMessageRenderer;
  let fixture: ComponentFixture<ConvMessageRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvMessageRenderer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvMessageRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
