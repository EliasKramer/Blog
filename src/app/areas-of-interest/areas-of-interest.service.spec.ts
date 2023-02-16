import { TestBed } from '@angular/core/testing';

import { AreasOfInterestService } from './areas-of-interest.service';

describe('AreasOfInterestService', () => {
  let service: AreasOfInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreasOfInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
