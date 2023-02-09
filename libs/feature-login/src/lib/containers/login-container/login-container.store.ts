import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LoginContainerState {};

const initialState: LoginContainerState = {};

@Injectable()
export class LoginContainerStore extends ComponentStore<LoginContainerState> {
  constructor() {
    super(initialState);
  }
}
