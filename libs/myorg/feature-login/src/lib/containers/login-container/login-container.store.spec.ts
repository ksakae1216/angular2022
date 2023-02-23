import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginService, RequestStatus } from '@myorg/shared/data-access';
import { provideMockStore } from '@ngrx/store/testing';
import { TestScheduler } from 'rxjs/testing';
import { LoginContainerStore } from './login-container.store';

describe('LoginContainerStore', () => {
  let componentStore: LoginContainerStore;
  let loginService: LoginService;
  let router: Router;
  let testScheduler: TestScheduler;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginContainerStore, provideMockStore()],
    })
  );

  beforeEach(() => {
    componentStore = TestBed.inject(LoginContainerStore);
    loginService = TestBed.inject(LoginService);
    router = TestBed.inject(Router);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });

  it('should call pathState on success', () => {
    jest.spyOn(componentStore, 'patchState');

    testScheduler.run(({ cold }) => {
      loginService.postLogin = jest.fn(() => cold('a', {}));

      componentStore.login({ loginId: 'test1', password: 'Password1' });
    });

    expect(componentStore.patchState).toHaveBeenCalledWith({
      requestStatus: RequestStatus.Pending,
    });
    expect(componentStore.patchState).toHaveBeenCalledWith({
      requestStatus: RequestStatus.Succeeded,
    });
  });

  it('should navigate to top page on success', () => {
    jest.spyOn(router, 'navigateByUrl');

    testScheduler.run(({ cold }) => {
      loginService.postLogin = jest.fn(() => cold('a', {}));

      componentStore.login({ loginId: 'test1', password: 'Password1' });
    });

    expect(router.navigateByUrl).toHaveBeenCalledWith('/top');
  });

  it('should call pathState on error', () => {
    jest.spyOn(componentStore, 'patchState');

    testScheduler.run(({ cold }) => {
      loginService.postLogin = jest.fn(() => cold('#', {}, { status: 500 }));

      componentStore.login({ loginId: 'test1', password: 'Password1' });
    });

    expect(componentStore.patchState).toHaveBeenCalledWith({
      requestStatus: RequestStatus.Rejected,
    });
  });
});
