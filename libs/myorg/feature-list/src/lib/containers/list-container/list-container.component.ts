import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListContainerStore } from './list-container.store';

@Component({
  selector: 'myorg-list-container',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <p>list-container works!</p>
    </ng-container>
  `,
  styles: [],
  providers: [ListContainerStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListContainerComponent {
  readonly vm$ = this.componentStore.vm$;

  constructor(private readonly componentStore: ListContainerStore) {}
}
