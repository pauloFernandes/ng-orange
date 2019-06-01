import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExpansionPanelComponent } from './user-expansion-panel.component';

describe('UserExpansionPanelComponent', () => {
  let component: UserExpansionPanelComponent;
  let fixture: ComponentFixture<UserExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
