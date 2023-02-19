import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('@myorg/feature-login').then((m) => m.FeatureLoginModule),
  },
  {
    path: 'top',
    loadComponent: () =>
      import('@myorg/feature-top').then((m) => m.FeatureTopComponent),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
