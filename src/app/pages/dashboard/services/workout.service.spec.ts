import { TestBed } from '@angular/core/testing';

import { WorkOutService } from './workout.service';

describe('WorkOutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkOutService = TestBed.get(WorkOutService);
    expect(service).toBeTruthy();
  });
});
