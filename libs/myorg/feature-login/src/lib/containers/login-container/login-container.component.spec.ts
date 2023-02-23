import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

import { LoginContainerComponent } from './login-container.component';
import { LoginContainerStore } from './login-container.store';

describe('LoginContainerComponent', () => {
  let component: LoginContainerComponent;
  let componentStore: LoginContainerStore;
  let fixture: ComponentFixture<LoginContainerComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoginContainerComponent, LoginFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).overrideComponent(LoginContainerComponent, {
      set: {
        providers: [
          {
            provide: LoginContainerStore,
            useValue: {
              store$: of({}),
              login: jest.fn(),
            },
          },
        ],
      },
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContainerComponent);
    component = fixture.componentInstance;
    componentStore = fixture.debugElement.injector.get(LoginContainerStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(componentStore).toBeTruthy();
  });

  it('should call LoginContainerComponent.login()', () => {
    jest.spyOn(component, 'login');

    (
      fixture.debugElement.query(By.directive(LoginFormComponent))
        .componentInstance as LoginFormComponent
    ).login.emit({
      loginId: 'test1',
      password: 'Password1',
    });

    expect(component.login).toHaveBeenCalledWith({
      loginId: 'test1',
      password: 'Password1',
    });
  });

  it('should call LoginContainerStore.login()', () => {
    jest.spyOn(componentStore, 'login');

    component.login({
      loginId: 'test1',
      password: 'Password1',
    });

    expect(componentStore.login).toHaveBeenCalledWith({
      loginId: 'test1',
      password: 'Password1',
    });
  });
});
