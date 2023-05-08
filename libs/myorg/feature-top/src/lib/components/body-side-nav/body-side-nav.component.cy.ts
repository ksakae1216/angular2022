import { ActivatedRoute } from '@angular/router';
import { BodySideNavComponent } from './body-side-nav.component';

describe('BodySideNavComponent', () => {
  it('should render component', () => {
    setup();

    const portal = cy.get('[name="portal"]');

    portal.should('have.attr', 'routerlink', '/top');
    portal.within(() => {
      cy.get('.mat-icon').should('have.text', 'pets');
      cy.get('span').should('have.text', 'Portal');
    });
  });
});

function setup(props?: Partial<BodySideNavComponent>) {
  cy.mount(BodySideNavComponent, {
    imports: [],
    providers: [
      {
        provide: ActivatedRoute,
        useValue: {},
      },
    ],
    componentProperties: {},
  });
}
