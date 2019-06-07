import { TestBed } from '@angular/core/testing';

import { RealTimeDatabaseAccessService } from './real-time-database-access.service';

describe('RealTimeDatabaseAccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealTimeDatabaseAccessService = TestBed.get(RealTimeDatabaseAccessService);
    expect(service).toBeTruthy();
  });
});
