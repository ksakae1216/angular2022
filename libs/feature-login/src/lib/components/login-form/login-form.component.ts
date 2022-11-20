import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'myorg-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  protected showPassword = false;

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    console.log('# logined');
  }
}
