import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { BlockGuard } from './block.guard';

describe('blockGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => BlockGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
