import { Injectable, inject } from '@angular/core';
import { ElementList } from '@myorg/myorg/shared/api';
import { ListService } from '@myorg/myorg/shared/data-access';
import {
  ComponentStore,
  OnStoreInit,
  tapResponse,
} from '@ngrx/component-store';
import { EMPTY, switchMap, tap } from 'rxjs';
import {
  initCurrentPage,
  initPageSize,
  initPageSizeOptions,
} from '../../consts';
import { Paginator } from '../../models/paginator.model';

interface ListContainerStoreState {
  loading: boolean;
  elementList: ElementList[];
  elementTotalCount: number;
}

const initialState: ListContainerStoreState = {
  loading: false,
  elementList: [],
  elementTotalCount: 0,
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

  private readonly loading$ = this.select((state) => state.loading);
  private readonly elementList$ = this.select((state) => state.elementList);
  private readonly elementTotalCount$ = this.select(
    (state) => state.elementTotalCount
  );

  readonly vm$ = this.select({
    loading: this.loading$,
    elementList: this.elementList$,
    elementTotalCount: this.elementTotalCount$,
  });

  readonly getList = this.effect<Paginator>((paginator$) =>
    paginator$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((paginator) =>
        this.listService
          .getList({
            pageSize: paginator.pageSize,
            currentPage: paginator.currentPage,
          })
          .pipe(
            tapResponse(
              (ret) =>
                this.patchState({
                  loading: false,
                  elementList: ret.list,
                  elementTotalCount: ret.paginator.length,
                }),
              () => EMPTY // Todo: implement snackbar and move top screen
            )
          )
      )
    )
  );

  ngrxOnStoreInit(): void {
    this.getList({
      pageSize: initPageSize,
      currentPage: initCurrentPage,
      pageSizeOptions: initPageSizeOptions,
    });
  }
}
