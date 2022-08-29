import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { components } from './components';
import { containers } from './containers';
import { pages } from './pages';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginPageComponent }]),
  ],
  declarations: [...components, ...containers, ...pages],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureLoginModule {}
