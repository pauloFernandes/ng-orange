import { TestBed } from '@angular/core/testing';

import { ParentCounterService } from './parent-counter.service';

describe('ParentCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentCounterService = TestBed.get(ParentCounterService);
    expect(service).toBeTruthy();
  });
});
