import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildReferenceComponent } from './parent-child-reference.component';

describe('ParentChildReferenceComponent', () => {
  let component: ParentChildReferenceComponent;
  let fixture: ComponentFixture<ParentChildReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentChildReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
