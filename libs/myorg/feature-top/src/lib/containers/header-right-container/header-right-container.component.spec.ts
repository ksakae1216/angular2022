import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeaderRightContainerComponent } from './header-right-container.component';
import { HeaderContainerStore } from './header-right-container.store';

describe('HeaderRightContainerComponent', () => {
  let component: HeaderRightContainerComponent;
  let fixture: ComponentFixture<HeaderRightContainerComponent>;
  let componentStore: HeaderContainerStore;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HeaderRightContainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).overrideComponent(HeaderRightContainerComponent, {
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
    fixture = TestBed.createComponent(HeaderRightContainerComponent);
    component = fixture.componentInstance;
    componentStore = fixture.debugElement.injector.get(HeaderContainerStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(componentStore).toBeTruthy();
  });
});
