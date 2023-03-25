import { Component } from '@angular/core';
import { MyorgTopComponent } from '../../components/top/top.component';
import { BodyPageComponent } from '../../pages/body-page/body-page.component';
import { HeaderPageComponent } from '../../pages/header-page/header-page.component';

@Component({
  selector: 'myorg-main-layout',
  standalone: true,
  imports: [HeaderPageComponent, BodyPageComponent, MyorgTopComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: [],
})
export class MainLayoutComponent {}
