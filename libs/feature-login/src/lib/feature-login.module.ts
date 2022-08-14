import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: '', component: LoginPageComponent }]),
  ],
  declarations: [LoginPageComponent],
})
export class FeatureLoginModule {}
