import { Component } from '@angular/core';
import { BodyMainPageComponent } from '../../pages/body-main-page/body-main-page.component';
import { BodySideNaviPageComponent } from '../../pages/body-side-navi-page/body-side-navi-page.component';
import { HeaderPageComponent } from '../../pages/header-page/header-page.component';

@Component({
  selector: 'myorg-main-layout',
  standalone: true,
  imports: [
    HeaderPageComponent,
    BodySideNaviPageComponent,
    BodyMainPageComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: [],
})
export class MainLayoutComponent {}
