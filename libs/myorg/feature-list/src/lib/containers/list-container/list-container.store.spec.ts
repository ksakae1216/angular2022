import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ListService } from '@myorg/myorg/shared/data-access';
import { provideComponentStore } from '@ngrx/component-store';
import { of } from 'rxjs';
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
    it('should call listService.getList', () => {
      jest.spyOn(listService, 'getList');

      componentStore.getList();

      expect(listService.getList).toHaveBeenCalledWith();
    });

    it('should call patchState', () => {
      jest.spyOn(componentStore, 'patchState');
      jest.spyOn(listService, 'getList').mockReturnValueOnce(of([]));

      componentStore.getList();

      expect(componentStore.patchState).toHaveBeenCalledWith({
        elementList: [],
      });
    });
  });

  describe('ngrxOnStoreInit', () => {
    it('should call getList', () => {
      jest.spyOn(componentStore, 'getList');

      componentStore.ngrxOnStoreInit();

      expect(componentStore.getList).toHaveBeenCalledWith();
    });
  });
});
