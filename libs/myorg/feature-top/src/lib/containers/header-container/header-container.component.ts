import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderContainerStore } from './header-container.store';

@Component({
  selector: 'myorg-header-container',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <p>header-container works!</p>
    </ng-container>
  `,
  styles: [],
  providers: [HeaderContainerStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContainerComponent {
  readonly vm$ = this.componentStore.vm$;

  constructor(private readonly componentStore: HeaderContainerStore) {}
}
