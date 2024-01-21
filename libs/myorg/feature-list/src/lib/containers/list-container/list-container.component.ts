import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { provideComponentStore } from '@ngrx/component-store';
import { ListComponent } from '../../components';
import { ListContainerStore } from './list-container.store';

@Component({
  selector: 'myorg-list-container',
  standalone: true,
  imports: [AsyncPipe, ListComponent],
  template: `
    @if (vm$ | async; as vm) {
      <myorg-list
        [loading]="vm.loading"
        [elementList]="vm.elementList"
        [paging]="vm.paging"
        (pageAction)="pageAction($event)"
        />
    }
    `,
  styles: [],
  providers: [provideComponentStore(ListContainerStore)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListContainerComponent {
  readonly vm$ = this.componentStore.vm$;

  constructor(private readonly componentStore: ListContainerStore) {}

  pageAction(event: PageEvent) {
    console.log('pageAction', event);
    this.componentStore.pageAction(event);
  }
}
