import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderContainerStoreState {}

const initialState: HeaderContainerStoreState = {};

@Injectable()
export class HeaderContainerStore extends ComponentStore<HeaderContainerStoreState> {
  constructor() {
    super(initialState);
  }

  readonly vm$ = this.select((state) => ({ ...state }));
}
