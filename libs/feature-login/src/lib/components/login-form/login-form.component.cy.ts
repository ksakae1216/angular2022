import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from "./login-form.component";

describe('LoginFormComponent', () => {
  describe('LoginId error check', () => {
    it('should display required error message', () => {
      setup();

      cy.get('input[name=loginId]').click().blur();

      cy.get('mat-error').should('contain', 'ログインIDを入力してください');
    });

    it('should display minLength error message', () => {
      setup();

      cy.get('input[name=loginId]').click().type('abc').blur();
      cy.get('mat-error').should('contain', 'ログインIDは5文字以上、10文字以下で入力してください');
    });

    it('should display maxLength error message', () => {
      setup();

      cy.get('input[name=loginId]').click().type('abcdeabcdeabcde').blur();
      cy.get('mat-error').should('contain', 'ログインIDは5文字以上、10文字以下で入力してください');
    });
  });

  describe('Password error check', () => {
    it('should display maxLength error message', () => {
      setup();

      cy.get('input[name=loginId]').click().type('abcde');
      cy.get('[data-cy="password"]').click().blur();
      cy.get('mat-error').should('contain', 'パスワードを入力してください');
    });
  });
});

function setup() {
  cy.mount(LoginFormComponent, {
    imports: [BrowserAnimationsModule, ReactiveFormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule],
    declarations: [MatError],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
}
