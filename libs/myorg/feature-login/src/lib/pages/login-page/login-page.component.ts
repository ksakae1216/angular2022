import { Component } from '@angular/core';
import { LoginContainerComponent } from '../../containers/login-container/login-container.component';

@Component({
  selector: 'myorg-login-page',
  standalone: true,
  imports: [LoginContainerComponent],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {}
