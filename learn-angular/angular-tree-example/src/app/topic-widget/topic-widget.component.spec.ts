import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicWidgetComponent } from './topic-widget.component';

describe('TopicWidgetComponent', () => {
  let component: TopicWidgetComponent;
  let fixture: ComponentFixture<TopicWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
