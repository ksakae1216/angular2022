import { Injectable, inject } from '@angular/core';
import { ElementList, ListApiService } from '@myorg/myorg/shared/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private readonly listApiService = inject(ListApiService);

  getList(): Observable<ElementList[]> {
    return this.listApiService.getList();
  }
}
