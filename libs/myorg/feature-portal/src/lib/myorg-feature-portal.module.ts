import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { myorgFeaturePortalRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(myorgFeaturePortalRoutes)],
})
export class MyorgFeaturePortalModule {}
