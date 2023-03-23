import { Component } from '@angular/core';
import { MyorgTopComponent } from '../../components/top/top.component';

@Component({
  selector: 'myorg-main-layout',
  standalone: true,
  imports: [MyorgTopComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: [],
})
export class MainLayoutComponent {}
