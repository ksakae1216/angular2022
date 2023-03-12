import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoginService, RequestStatus } from '@myorg/shared-old';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { switchMap, tap } from 'rxjs';

export interface LoginContainerState {
  requestStatus: RequestStatus;
}

const initialState: LoginContainerState = {
  requestStatus: RequestStatus.Idle,
};

@Injectable()
export class LoginContainerStore extends ComponentStore<LoginContainerState> {
  constructor(
    private readonly loginService: LoginService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    super(initialState);
  }

  readonly store$ = this.select((state) => state);

  readonly login = this.effect<{ loginId: string; password: string }>(
    (params$) => {
      return params$.pipe(
        tap(() => this.patchState({ requestStatus: RequestStatus.Pending })),
        switchMap((params) =>
          this.loginService.postLogin(params.loginId, params.password).pipe(
            tapResponse(
              (response) => {
                this.authService.setCookie('token', response.accessToken);
                this.router.navigateByUrl('/top');
                this.patchState({ requestStatus: RequestStatus.Succeeded });
              },
              () => {
                this.patchState({ requestStatus: RequestStatus.Rejected });
              }
            )
          )
        )
      );
    }
  );
}
