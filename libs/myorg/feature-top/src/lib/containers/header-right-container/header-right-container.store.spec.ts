import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '@myorg/myorg/shared/data-access';
import { HeaderContainerStore } from './header-right-container.store';

describe('HeaderContainerStore', () => {
  let componentStore: HeaderContainerStore;
  let authService: AuthService;
  let router: Router;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        HeaderContainerStore,
        {
          provide: Router,
          useValue: { navigateByUrl: jest.fn() },
        },
      ],
    })
  );

  beforeEach(() => {
    componentStore = TestBed.inject(HeaderContainerStore);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });

  describe('logout', () => {
    it('should call authService.deleteCookie', () => {
      jest.spyOn(authService, 'deleteCookie');
      componentStore.logout();

      expect(authService.deleteCookie).toHaveBeenCalledWith('token');
    });

    it('should call router.navigateByUrl', () => {
      jest.spyOn(router, 'navigateByUrl');
      componentStore.logout();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
    });
  });
});
