import { TestBed } from '@angular/core/testing';
import { HeaderContainerStore } from './header-container.store';

describe('HeaderContainerStore', () => {
  let componentStore: HeaderContainerStore;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [],
      providers: [HeaderContainerStore],
    })
  );

  beforeEach(() => {
    componentStore = TestBed.inject(HeaderContainerStore);
  });

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });
});
