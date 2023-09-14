import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ListContainerStoreState {}

const initialState: ListContainerStoreState = {};

@Injectable()
export class ListContainerStore extends ComponentStore<ListContainerStoreState> {
  constructor() {
    super(initialState);
  }

  readonly vm$ = this.select((state) => ({ ...state }));
}
