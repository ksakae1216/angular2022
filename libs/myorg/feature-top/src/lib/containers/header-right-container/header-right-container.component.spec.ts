import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeaderContainerComponent } from './header-right-container.component';
import { HeaderContainerStore } from './header-right-container.store';

describe('HeaderContainerComponent', () => {
  let component: HeaderContainerComponent;
  let fixture: ComponentFixture<HeaderContainerComponent>;
  let componentStore: HeaderContainerStore;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HeaderContainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).overrideComponent(HeaderContainerComponent, {
      set: {
        providers: [
          {
            provide: HeaderContainerStore,
            useValue: {
              vm$: of({}),
            },
          },
        ],
      },
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderContainerComponent);
    component = fixture.componentInstance;
    componentStore = fixture.debugElement.injector.get(HeaderContainerStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(componentStore).toBeTruthy();
  });
});
