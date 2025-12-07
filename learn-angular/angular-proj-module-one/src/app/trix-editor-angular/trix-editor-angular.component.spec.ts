import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrixEditorAngularComponent } from './trix-editor-angular.component';

describe('TrixEditorAngularComponent', () => {
  let component: TrixEditorAngularComponent;
  let fixture: ComponentFixture<TrixEditorAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrixEditorAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrixEditorAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
