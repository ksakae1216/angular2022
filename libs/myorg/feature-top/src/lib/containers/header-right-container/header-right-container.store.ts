import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@myorg/myorg/shared/data-access';
import { ComponentStore } from '@ngrx/component-store';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderContainerStoreState {}

const initialState: HeaderContainerStoreState = {};

@Injectable()
export class HeaderContainerStore extends ComponentStore<HeaderContainerStoreState> {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  constructor() {
    super(initialState);
  }

  readonly vm$ = this.select((state) => ({ ...state }));

  logout() {
    this.authService.deleteCookie('token');
    this.router.navigateByUrl('/login');
  }
}
