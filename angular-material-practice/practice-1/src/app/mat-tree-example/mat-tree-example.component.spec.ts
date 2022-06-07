import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTreeExampleComponent } from './mat-tree-example.component';

describe('MatTreeExampleComponent', () => {
  let component: MatTreeExampleComponent;
  let fixture: ComponentFixture<MatTreeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTreeExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTreeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
