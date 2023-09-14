import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ListContainerComponent } from './list-container.component';
import { ListContainerStore } from './list-container.store';

describe('ListContainerComponent', () => {
  let component: ListContainerComponent;
  let fixture: ComponentFixture<ListContainerComponent>;
  let componentStore: ListContainerStore;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ListContainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).overrideComponent(ListContainerComponent, {
      set: {
        providers: [
          {
            provide: ListContainerStore,
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
    fixture = TestBed.createComponent(ListContainerComponent);
    component = fixture.componentInstance;
    componentStore = fixture.debugElement.injector.get(ListContainerStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(componentStore).toBeTruthy();
  });
});
