import { TestBed } from '@angular/core/testing';
import { ListContainerStore } from './list-container.store';

describe('ListContainerStore', () => {
  let componentStore: ListContainerStore;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [],
      providers: [ListContainerStore],
    })
  );

  beforeEach(() => {
    componentStore = TestBed.inject(ListContainerStore);
  });

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });
});
