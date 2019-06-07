import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsExpansionPanelComponent } from './channels-expansion-panel.component';

describe('ChannelsExpansionPanelComponent', () => {
  let component: ChannelsExpansionPanelComponent;
  let fixture: ComponentFixture<ChannelsExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelsExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
