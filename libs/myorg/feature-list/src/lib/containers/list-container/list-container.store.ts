import { Injectable, inject } from '@angular/core';
import { ElementList } from '@myorg/myorg/shared/api';
import { ListService } from '@myorg/myorg/shared/data-access';
import {
  ComponentStore,
  OnStoreInit,
  tapResponse,
} from '@ngrx/component-store';
import { EMPTY, switchMap } from 'rxjs';

interface ListContainerStoreState {
  elementList: ElementList[];
}

const initialState: ListContainerStoreState = {
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

  readonly elementList$ = this.select((state) => state.elementList);

  readonly vm$ = this.select({
    elementList: this.elementList$,
  });

  readonly getList = this.effect((void$) =>
    void$.pipe(
      switchMap(() =>
        this.listService.getList().pipe(
          tapResponse(
            (elementList) => this.patchState({ elementList }),
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
