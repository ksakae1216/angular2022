import { HeaderRightComponent } from './header-right.component';

describe('HeaderRightComponent', () => {
  it('should render component', () => {
    setup();

    cy.get('img').should('exist');
  });

  it('should open menu', () => {
    setup();

    cy.get('img').click();

    cy.get('button').should('exist');
  });

  it('render menu items', () => {
    setup();

    cy.get('img').click();

    cy.get('[name="settings"]').should('exist');
    cy.get('[name="dummy"]').should('exist');
  });
});

function setup() {
  cy.mount(HeaderRightComponent, {
    componentProperties: {},
  });
}
