import { Component } from '@angular/core';
import { MyorgFeatureTopComponent } from '../../components/feature-top/feature-top.component';

@Component({
  selector: 'myorg-top-page',
  standalone: true,
  imports: [MyorgFeatureTopComponent],
  templateUrl: './top-page.component.html',
  styleUrls: [],
})
export class TopPageComponent {}
