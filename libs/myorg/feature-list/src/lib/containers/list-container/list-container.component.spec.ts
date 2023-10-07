import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ListContainerComponent } from './list-container.component';
import { ListContainerStore } from './list-container.store';
import { By } from '@angular/platform-browser';
import { ListComponent } from '../../components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListContainerComponent', () => {
  let component: ListContainerComponent;
  let fixture: ComponentFixture<ListContainerComponent>;
  let componentStore: ListContainerStore;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ListContainerComponent, ListComponent, BrowserAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).overrideComponent(ListContainerComponent, {
      set: {
        providers: [
          {
            provide: ListContainerStore,
            useValue: {
              vm$: of({}),
              pageAction: jest.fn(),
            },
          },
        ],
      },
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContainerComponent);
    component = fixture.componentInstance;
    componentStore = fixture.debugElement.injector.get(ListContainerStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(componentStore).toBeTruthy();
  });

  describe('pageAction', () => {
    it('should call ListContainerComponent.pageAction', () => {
      jest.spyOn(component, 'pageAction');

      fixture.debugElement
        .query(By.directive(ListComponent))
        .triggerEventHandler('pageAction', {
          pageIndex: 1,
          previousPageIndex: 0,
          pageSize: 10,
          length: 100,
        });

      expect(component.pageAction).toHaveBeenCalledWith({
        pageIndex: 1,
        previousPageIndex: 0,
        pageSize: 10,
        length: 100,
      });
    });

    it('should call ListContainerStore.pageAction', () => {
      jest.spyOn(componentStore, 'pageAction');

      component.pageAction({
        pageIndex: 1,
        previousPageIndex: 0,
        pageSize: 10,
        length: 100,
      });

      expect(componentStore.pageAction).toHaveBeenCalledWith({
        pageIndex: 1,
        previousPageIndex: 0,
        pageSize: 10,
        length: 100,
      });
    });
  });
});
