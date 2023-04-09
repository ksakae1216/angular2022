import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../components';
import { HeaderContainerStore } from './header-container.store';

@Component({
  selector: 'myorg-header-container',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <myorg-header></myorg-header>
    </ng-container>
  `,
  standalone: true,
  styles: [],
  providers: [HeaderContainerStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, HeaderComponent],
})
export class HeaderContainerComponent {
  readonly vm$ = this.componentStore.vm$;

  constructor(private readonly componentStore: HeaderContainerStore) {}
}
