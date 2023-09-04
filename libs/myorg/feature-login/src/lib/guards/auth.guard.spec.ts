import { TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { AuthService } from '@myorg/myorg/shared/data-access';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  beforeEach(() => {
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should return true if token exist', () => {
    jest.spyOn(authService, 'isTokenExist').mockReturnValueOnce(true);

    TestBed.runInInjectionContext(() => AuthGuard()).subscribe((result) => {
      expect(result).toBe(true);
    });
  });

  it('should return false if token does not exist', () => {
    jest.spyOn(authService, 'isTokenExist').mockReturnValueOnce(false);

    TestBed.runInInjectionContext(() => AuthGuard()).subscribe((result) => {
      expect(result).toBe(false);
    });
  });

  it('should navigate to login page if token does not exist', () => {
    jest.spyOn(authService, 'isTokenExist').mockReturnValueOnce(false);

    TestBed.runInInjectionContext(() => AuthGuard()).subscribe(() => {
      expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
    });
  });
});
