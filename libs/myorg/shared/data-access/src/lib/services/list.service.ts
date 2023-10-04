import { Injectable, inject } from '@angular/core';
import {
  ElementList,
  ListApiService,
  Paginator,
} from '@myorg/myorg/shared/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private readonly listApiService = inject(ListApiService);

  getList(params: { pageSize: number; currentPage: number }): Observable<{
    list: ElementList[];
    paginator: Paginator;
  }> {
    return this.listApiService.getList(params);
  }
}
