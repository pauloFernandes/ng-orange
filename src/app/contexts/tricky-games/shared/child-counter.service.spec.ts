import { TestBed } from '@angular/core/testing';

import { ChildCounterService } from './child-counter.service';

describe('ChildCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChildCounterService = TestBed.get(ChildCounterService);
    expect(service).toBeTruthy();
  });
});
