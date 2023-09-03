import { TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { AuthService } from '@myorg/myorg/shared/data-access';

describe('AuthGuard', () => {
  // const executeGuard: CanActivateFn = (...guardParameters) =>
  //   TestBed.runInInjectionContext(() => AuthGuard(...guardParameters));

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

    // angular version 15.1以上にしたらコメント外す
    // TestBed.runInInjectionContext(() => AuthGuard()).subscribe((result) => {
    //   expect(result).toBe(true);
    // });
  });
});
