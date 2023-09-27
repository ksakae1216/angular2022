import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { provideComponentStore } from '@ngrx/component-store';
import { ListComponent } from '../../components';
import { ListContainerStore } from './list-container.store';

@Component({
  selector: 'myorg-list-container',
  standalone: true,
  imports: [NgIf, AsyncPipe, ListComponent],
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <myorg-list
        [loading]="vm.loading"
        [elementList]="vm.elementList"
       />
    </ng-container>
  `,
  styles: [],
  providers: [provideComponentStore(ListContainerStore)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListContainerComponent {
  readonly vm$ = this.componentStore.vm$;

  constructor(private readonly componentStore: ListContainerStore) {}
}
