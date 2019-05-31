import { TestBed, async, inject } from '@angular/core/testing';

import { CheckActiveSessionGuard } from './check-active-session.guard';

describe('CheckActiveSessionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckActiveSessionGuard]
    });
  });

  it('should ...', inject([CheckActiveSessionGuard], (guard: CheckActiveSessionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
