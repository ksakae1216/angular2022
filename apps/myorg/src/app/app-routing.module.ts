import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@myorg/myorg/feature-login';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('@myorg/myorg/feature-login').then(
        (m) => m.MyorgFeatureLoginModule
      ),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('@myorg/myorg/feature-top').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: 'top',
        loadComponent: () =>
          import('@myorg/myorg/feature-top').then(
            (m) => m.BodyMainPageComponent
          ),
      },
      {
        path: '',
        redirectTo: 'top',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
