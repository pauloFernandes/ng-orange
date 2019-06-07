import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglFormComponent } from './toggl-form.component';

describe('TogglFormComponent', () => {
  let component: TogglFormComponent;
  let fixture: ComponentFixture<TogglFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
