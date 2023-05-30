import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BodySideNavItemComponent } from '../body-side-nav-item/body-side-nav-item.component';

@Component({
  selector: 'myorg-body-side-nav',
  standalone: true,
  templateUrl: './body-side-nav.component.html',
  imports: [
    CommonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    BodySideNavItemComponent,
  ],
})
export class BodySideNavComponent {}
