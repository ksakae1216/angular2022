import { Injectable, inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ElementList } from '@myorg/myorg/shared/api';
import { ListService } from '@myorg/myorg/shared/data-access';
import {
  ComponentStore,
  OnStoreInit,
  tapResponse,
} from '@ngrx/component-store';
import { EMPTY, switchMap, tap } from 'rxjs';
import { initCurrentPage, initPageSize, pageSizeOptions } from '../../consts';
import { Paging } from '../../models/paging.model';

interface ListContainerStoreState {
  loading: boolean;
  elementList: ElementList[];
  paging: Paging | null;
}

const initialState: ListContainerStoreState = {
  loading: false,
  elementList: [],
  paging: null,
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
  private readonly paging$ = this.select((state) => state.paging);

  readonly vm$ = this.select({
    loading: this.loading$,
    elementList: this.elementList$,
    paging: this.paging$,
  });

  readonly getList = this.effect<Paging>((paginator$) =>
    paginator$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((paginator) =>
        this.listService
          .getList({
            pageSize: paginator.pageSize,
            currentPage: paginator.currentPage ?? 1,
          })
          .pipe(
            tapResponse(
              (ret) =>
                this.patchState({
                  loading: false,
                  elementList: ret.list,
                  paging: { ...paginator, totalCount: ret.paginator.length },
                }),
              () => EMPTY // Todo: implement snackbar and move top screen
            )
          )
      )
    )
  );

  readonly pageAction = this.effect<PageEvent>((pageEvent$) =>
    pageEvent$.pipe(
      tap(() => this.patchState({ loading: true, elementList: [] })),
      switchMap((pageEvent) =>
        this.listService
          .getList({
            pageSize: pageEvent.pageSize,
            currentPage: pageEvent.pageIndex + 1,
          })
          .pipe(
            tapResponse(
              (ret) =>
                this.patchState({
                  loading: false,
                  elementList: ret.list,
                  paging: {
                    pageIndex: pageEvent.pageIndex,
                    pageSize: pageEvent.pageSize,
                    totalCount: ret.paginator.length,
                  },
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
    });
  }
}
