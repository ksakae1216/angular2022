import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestStatus } from '@myorg/shared/data-access';
import { createOutputSpy } from 'cypress/angular';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  describe('Login error', () => {
    it('should display login error message when login failed', () => {
      setup({ requestStatus: RequestStatus.Rejected });

      cy.contains('ログインに失敗しました').should('exist');
    });
  });
  describe('LoginId error', () => {
    it('should display required error message when loginId is empty', () => {
      setup();

      cy.get('input[name=loginId]').click().blur();

      cy.get('mat-error').should('contain', 'ログインIDを入力してください');
      cy.contains('button', 'ログイン').should('be.disabled');
    });

    it('should display minLength error message when loginId is 4 length', () => {
      setup();

      cy.get('input[name=loginId]').click().type('abcd').blur();
      cy.get('mat-error').should(
        'contain',
        'ログインIDは5文字以上、10文字以下で入力してください'
      );

      cy.contains('button', 'ログイン').should('be.disabled');
    });

    it('should display maxLength error message when loginId is 11 length', () => {
      setup();

      cy.get('input[name=loginId]').click().type('abcdeabcdea').blur();

      cy.get('mat-error').should(
        'contain',
        'ログインIDは5文字以上、10文字以下で入力してください'
      );
      cy.contains('button', 'ログイン').should('be.disabled');
    });
  });

  describe('Password error', () => {
    it('should display maxLength error message when password is empty', () => {
      setup();

      cy.get('input[name=loginId]').click().type('abcde');
      cy.get('[data-cy="password"]').click().blur();

      cy.get('mat-error').should('contain', 'パスワードを入力してください');
      cy.contains('button', 'ログイン').should('be.disabled');
    });
  });
});

describe('Login', () => {
  it('should call login when login button is clicked', () => {
    setup();

    cy.get('input[name=loginId]').click().type('test1');
    cy.get('[data-cy="password"]').click().type('Password1');
    cy.contains('button', 'ログイン').click();

    cy.get('@loginSpy').should('have.been.calledWith', {
      loginId: 'test1',
      password: 'Password1',
    });
  });

  it('should loading login button when RequestStatus is Pending', () => {
    setup({ requestStatus: RequestStatus.Pending });

    cy.contains('button', 'ログイン').should('be.disabled');
    cy.get('mat-spinner').should('exist');
  });
});

function setup(props?: Partial<LoginFormComponent>) {
  cy.mount(LoginFormComponent, {
    imports: [
      BrowserAnimationsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule,
    ],
    declarations: [MatError],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    componentProperties: {
      requestStatus: props?.requestStatus ?? RequestStatus.Idle,
      login: createOutputSpy('loginSpy'),
    },
  });
}
