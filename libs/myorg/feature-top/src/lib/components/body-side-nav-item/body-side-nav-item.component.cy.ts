import { ActivatedRoute } from '@angular/router';
import { BodySideNavItemComponent } from './body-side-nav-item.component';

describe('BodySideNavItemComponent', () => {
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

function setup(props?: Partial<BodySideNavItemComponent>) {
  cy.mount(BodySideNavItemComponent, {
    imports: [],
    providers: [
      {
        provide: ActivatedRoute,
        useValue: {},
      },
    ],
    componentProperties: {
      itemName: props?.itemName ?? 'portal',
      itemPath: props?.itemPath ?? '/top',
      itemIcon: props?.itemIcon ?? 'pets',
      itemLabel: props?.itemLabel ?? 'Portal',
    },
  });
}
