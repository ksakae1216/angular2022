import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BodySideNavComponent } from '../../components/body-side-nav/body-side-nav.component';

@Component({
  selector: 'myorg-body-side-nav-page',
  standalone: true,
  imports: [CommonModule, BodySideNavComponent],
  templateUrl: './body-side-nav-page.component.html',
})
export class BodySideNavPageComponent {}
