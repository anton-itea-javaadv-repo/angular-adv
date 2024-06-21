import {TestBed} from '@angular/core/testing';
import {CanActivateFn} from '@angular/router';

import {activatorGuard} from './activator.guard';

describe('activatorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => activatorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
