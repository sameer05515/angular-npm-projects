import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDesiredRoleComponent } from './my-desired-role.component';

describe('MyDesiredRoleComponent', () => {
  let component: MyDesiredRoleComponent;
  let fixture: ComponentFixture<MyDesiredRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDesiredRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDesiredRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
