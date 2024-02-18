import { Route } from '@angular/router';

export const myorgFeaturePortalRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./layouts/top-layout/top-layout.component').then(
        (m) => m.TopLayoutComponent
      ),
  },
];
