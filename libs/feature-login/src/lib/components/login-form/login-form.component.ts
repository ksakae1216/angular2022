import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'myorg-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  protected showPassword = false;

  protected loginFormGroup = new FormGroup({
    loginId: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ]),
    password: new FormControl('', Validators.required),
  });

  protected loginIdForm = this.loginFormGroup.get('loginId');
  protected passwordForm = this.loginFormGroup.get('password');

  get loginIdErrorMessage(): string {
    if (!this.loginIdForm || this.loginIdForm.valid) {
      return '';
    }

    if (this.loginIdForm.hasError('required')) {
      return 'ログインIDを入力してください';
    } else if (
      this.loginIdForm.hasError('minlength') ||
      this.loginIdForm.hasError('maxlength')
    ) {
      return 'ログインIDは5文字以上、10文字以下で入力してください';
    }

    return '';
  }

  get passwordErrorMessage(): string {
    if (!this.passwordForm || this.passwordForm.valid) {
      return '';
    }

    if (this.passwordForm.hasError('required')) {
      return 'パスワードを入力してください';
    }

    return '';
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    // EMPTY
  }
}
