
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RequestStatus } from '@myorg/myorg/shared/data-access';

@Component({
  selector: 'myorg-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule
],
  templateUrl: './login-form.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  @Input() requestStatus: RequestStatus = RequestStatus.Idle;

  @Output() login = new EventEmitter<{ loginId: string; password: string }>();

  protected showPassword = false;
  protected visibility_icon = 'visibility_off';
  protected passwordType = 'password';

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

  get isLoginError(): boolean {
    return this.requestStatus === RequestStatus.Rejected;
  }

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

  get disabled(): boolean {
    return (
      this.requestStatus === RequestStatus.Pending || !this.loginFormGroup.valid
    );
  }

  get loading(): boolean {
    return this.requestStatus === RequestStatus.Pending;
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
    this.visibility_icon = this.showPassword
      ? 'visibility_on'
      : 'visibility_off';
    this.passwordType = this.showPassword ? 'text' : 'password';
  }

  submit(): void {
    const { loginId, password } = this.loginFormGroup.getRawValue();

    if (loginId === null || password === null) {
      return;
    }

    this.login.emit({ loginId, password });
  }
}
