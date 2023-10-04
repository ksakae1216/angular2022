import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ListService } from '@myorg/myorg/shared/data-access';
import { provideComponentStore } from '@ngrx/component-store';
import { of } from 'rxjs';
import {
  initCurrentPage,
  initPageSize,
  initPageSizeOptions,
} from '../../consts';
import { ListContainerStore } from './list-container.store';

describe('ListContainerStore', () => {
  let componentStore: ListContainerStore;
  let listService: ListService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ListContainerStore,
        provideComponentStore(ListContainerStore),
      ],
    })
  );

  beforeEach(() => {
    componentStore = TestBed.inject(ListContainerStore);
    listService = TestBed.inject(ListService);
  });

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });

  describe('getList', () => {
    const paginator = {
      pageSize: initPageSize,
      currentPage: initCurrentPage,
      pageSizeOptions: initPageSizeOptions,
    };

    it('should call listService.getList', () => {
      jest.spyOn(listService, 'getList');

      componentStore.getList(paginator);

      expect(listService.getList).toHaveBeenCalledWith({
        pageSize: initPageSize,
        currentPage: initCurrentPage,
      });
    });

    it('should call patchState', () => {
      jest.spyOn(componentStore, 'patchState');
      jest.spyOn(listService, 'getList').mockReturnValueOnce(
        of({
          list: [],
          paginator: {
            currentPage: initCurrentPage,
            length: 0,
            pageSize: initPageSize,
          },
        })
      );

      componentStore.getList(paginator);

      expect(componentStore.patchState).toHaveBeenCalledWith({ loading: true });
      expect(componentStore.patchState).toHaveBeenCalledWith({
        loading: false,
        elementList: [],
        elementTotalCount: 0,
      });
    });
  });

  describe('ngrxOnStoreInit', () => {
    it('should call getList', () => {
      jest.spyOn(componentStore, 'getList');

      componentStore.ngrxOnStoreInit();

      expect(componentStore.getList).toHaveBeenCalledWith({
        pageSize: initPageSize,
        currentPage: initCurrentPage,
        pageSizeOptions: initPageSizeOptions,
      });
    });
  });
});
