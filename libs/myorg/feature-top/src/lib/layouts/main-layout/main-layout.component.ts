import { Component } from '@angular/core';
import { MyorgTopComponent } from '../../components/top/top.component';
import { HeaderPageComponent } from '../../pages/header-page/header-page.component';

@Component({
  selector: 'myorg-main-layout',
  standalone: true,
  imports: [HeaderPageComponent, MyorgTopComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: [],
})
export class MainLayoutComponent {}
