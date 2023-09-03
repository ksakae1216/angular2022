import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BodyMainPageComponent } from '../../pages/body-main-page/body-main-page.component';
import { BodySideNavPageComponent } from '../../pages/body-side-nav-page/body-side-nav-page.component';
import { HeaderPageComponent } from '../../pages/header-page/header-page.component';

@Component({
  selector: 'myorg-main-layout',
  standalone: true,
  imports: [
    RouterModule,
    HeaderPageComponent,
    BodySideNavPageComponent,
    BodyMainPageComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: [],
})
export class MainLayoutComponent {}
