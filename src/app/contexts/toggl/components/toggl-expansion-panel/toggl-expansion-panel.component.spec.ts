import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglExpansionPanelComponent } from './toggl-expansion-panel.component';

describe('TogglExpansionPanelComponent', () => {
  let component: TogglExpansionPanelComponent;
  let fixture: ComponentFixture<TogglExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
