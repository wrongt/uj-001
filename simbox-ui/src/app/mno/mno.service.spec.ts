import { TestBed } from '@angular/core/testing';

import { MNOService } from './mno.service';

describe('MNOService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MNOService = TestBed.get(MNOService);
    expect(service).toBeTruthy();
  });
});
