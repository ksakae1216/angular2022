import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderRightComponent } from '../../components';
import { HeaderContainerStore } from './header-right-container.store';

@Component({
  selector: 'myorg-header-right-container',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <myorg-header-right></myorg-header-right>
    </ng-container>
  `,
  standalone: true,
  styles: [],
  providers: [HeaderContainerStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, HeaderRightComponent],
})
export class HeaderRightContainerComponent {
  readonly vm$ = this.componentStore.vm$;

  constructor(private readonly componentStore: HeaderContainerStore) {}
}
