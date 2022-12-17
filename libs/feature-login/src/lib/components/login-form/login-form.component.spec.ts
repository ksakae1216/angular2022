import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatError } from '@angular/material/form-field';
import { By } from '@angular/platform-browser';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';


import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  describe('LoginId error check', () => {
    it('should display required error message', async () => {
      await setup();

      expect(screen.getByText('ログインIDを入力してください')).toBeInTheDocument();
    });
    it('should display minLength error message', async () => {
      await setup();

      userEvent.type(screen.getByRole('textbox', { name: 'ログインID' }), 'abc')

      expect(screen.getByText('ログインIDは5文字以上、10文字以下で入力してください')).toBeInTheDocument();
    });
    it('should display minLength error message', async () => {
      await setup();

      userEvent.type(screen.getByRole('textbox', { name: 'ログインID' }), 'abcdeabcdabcdee')

      expect(screen.getByText('ログインIDは5文字以上、10文字以下で入力してください')).toBeInTheDocument();
    });
  });
  describe('Password error check', () => {
    it('should display required error message', async () => {
      await setup();

      userEvent.type(screen.getByRole('textbox', { name: 'ログインID' }), 'dummyId')

      expect(screen.getByText('パスワードを入力してください')).toBeInTheDocument();
    });
  });

  describe('Login', () => {
    it('should not display error message', async () => {
      const { component } = await setup();

      userEvent.type(component.getByRole('textbox', { name: 'ログインID' }), 'dummyId')
      userEvent.type(component.getByTestId('password'), 'dummy-password')

      const matError = component.debugElement.query(By.directive(MatError));

      expect(matError).toBeNull()
    });
  })
});

async function setup() {
  const component = await render(LoginFormComponent, {
    imports: [ReactiveFormsModule],
    declarations: [MatError],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });

  userEvent.clear(screen.getByRole('textbox', { name: 'ログインID' }))
  userEvent.clear(screen.getByTestId('password'))

  return {
    component,
  };
}
