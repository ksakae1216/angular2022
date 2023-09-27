import { Injectable, inject } from '@angular/core';
import { ElementList } from '@myorg/myorg/shared/api';
import { ListService } from '@myorg/myorg/shared/data-access';
import {
  ComponentStore,
  OnStoreInit,
  tapResponse,
} from '@ngrx/component-store';
import { EMPTY, switchMap, tap } from 'rxjs';

interface ListContainerStoreState {
  loading: boolean;
  elementList: ElementList[];
}

const initialState: ListContainerStoreState = {
  loading: false,
  elementList: [],
};

@Injectable()
export class ListContainerStore
  extends ComponentStore<ListContainerStoreState>
  implements OnStoreInit
{
  private readonly listService = inject(ListService);

  constructor() {
    super(initialState);
  }

  readonly loading$ = this.select((state) => state.loading);
  readonly elementList$ = this.select((state) => state.elementList);

  readonly vm$ = this.select({
    loading: this.loading$,
    elementList: this.elementList$,
  });

  readonly getList = this.effect((void$) =>
    void$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        this.listService.getList().pipe(
          tapResponse(
            (elementList) => this.patchState({ loading: false, elementList }),
            () => EMPTY // Todo: implement snackbar and move top screen
          )
        )
      )
    )
  );

  ngrxOnStoreInit(): void {
    this.getList();
  }
}
