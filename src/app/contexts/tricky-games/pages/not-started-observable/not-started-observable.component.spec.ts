import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotStartedObservableComponent } from './not-started-observable.component';

describe('NotStartedObservableComponent', () => {
  let component: NotStartedObservableComponent;
  let fixture: ComponentFixture<NotStartedObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotStartedObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotStartedObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
