import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiHierarchyComponent } from './di-hierarchy.component';

describe('DiHierarchyComponent', () => {
  let component: DiHierarchyComponent;
  let fixture: ComponentFixture<DiHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiHierarchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
