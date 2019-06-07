import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitlabExpansionPanelComponent } from './gitlab-expansion-panel.component';

describe('GitlabExpansionPanelComponent', () => {
  let component: GitlabExpansionPanelComponent;
  let fixture: ComponentFixture<GitlabExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitlabExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitlabExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
