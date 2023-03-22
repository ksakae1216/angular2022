import { Component } from '@angular/core';
import { MyorgTopComponent } from '../../components/top/top.component';

@Component({
  selector: 'myorg-top-page',
  standalone: true,
  imports: [MyorgTopComponent],
  templateUrl: './top-page.component.html',
  styleUrls: [],
})
export class TopPageComponent {}
