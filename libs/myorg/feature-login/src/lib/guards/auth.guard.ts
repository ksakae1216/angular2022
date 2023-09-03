import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@myorg/myorg/shared/data-access';
import { of } from 'rxjs';

export const AuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isTokenExist = authService.isTokenExist();
  if (isTokenExist) {
    return of(true);
  }

  router.navigateByUrl('/login');
  return of(false);
};
