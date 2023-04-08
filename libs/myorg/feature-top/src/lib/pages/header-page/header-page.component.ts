import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderContainerComponent } from '../../containers';

@Component({
  selector: 'myorg-header-page',
  standalone: true,
  imports: [CommonModule, HeaderContainerComponent],
  templateUrl: './header-page.component.html',
})
export class HeaderPageComponent {}
