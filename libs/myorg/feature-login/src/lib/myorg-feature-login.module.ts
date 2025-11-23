import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { components } from './components';
import { containers } from './containers';
import { LoginContainerStore } from './containers/login-container/login-container.store';
import { pages } from './pages';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginPageComponent }]),
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    ...components,
    ...containers,
    ...pages,
  ],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LoginContainerStore],
})
export class MyorgFeatureLoginModule {}
