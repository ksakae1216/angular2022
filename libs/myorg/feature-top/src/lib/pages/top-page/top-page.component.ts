import { Component } from '@angular/core';
import { MyorgFeatureTopComponent } from '../../feature-top/feature-top.component';

@Component({
  selector: 'myorg-top-page',
  standalone: true,
  imports: [MyorgFeatureTopComponent],
  templateUrl: './top-page.component.html',
  styleUrls: [],
})
export class TopPageComponent {}
