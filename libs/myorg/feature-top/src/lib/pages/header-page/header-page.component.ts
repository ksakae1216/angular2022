import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderRightContainerComponent } from '../../containers';

@Component({
  selector: 'myorg-header-page',
  standalone: true,
  imports: [CommonModule, HeaderRightContainerComponent],
  templateUrl: './header-page.component.html',
})
export class HeaderPageComponent {}
