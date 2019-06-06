import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitlabFormComponent } from './gitlab-form.component';

describe('GitlabFormComponent', () => {
  let component: GitlabFormComponent;
  let fixture: ComponentFixture<GitlabFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitlabFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitlabFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
