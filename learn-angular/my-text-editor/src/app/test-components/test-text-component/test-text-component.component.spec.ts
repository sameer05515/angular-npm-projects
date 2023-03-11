import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTextComponentComponent } from './test-text-component.component';

describe('TestTextComponentComponent', () => {
  let component: TestTextComponentComponent;
  let fixture: ComponentFixture<TestTextComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTextComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
