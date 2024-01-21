import { Component } from '@angular/core';
import { LoginContainerStore } from './login-container.store';

@Component({
  selector: 'myorg-login-container',
  template: `
    @if (store$ | async; as store) {
      <myorg-login-form
        [requestStatus]="store.requestStatus"
        (login)="login($event)"
      ></myorg-login-form>
    }
    `,
  styles: [],
})
export class LoginContainerComponent {
  readonly store$ = this.loginContainerStore.store$;

  constructor(private readonly loginContainerStore: LoginContainerStore) {}

  login(event: { loginId: string; password: string }) {
    const { loginId, password } = event;

    this.loginContainerStore.login({ loginId, password });
  }
}
