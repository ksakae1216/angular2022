import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'myorg-body-side-nav-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './body-side-nav-item.component.html',
})
export class BodySideNavItemComponent {
  @Input() itemName = '';
  @Input() itemPath = '';
  @Input() itemIcon = '';
  @Input() itemLabel = '';
}
