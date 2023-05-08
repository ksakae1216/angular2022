import { BodySideNavItemComponent } from './body-side-nav-item.component';

describe('BodySideNavItemComponent', () => {
  it('should render component', () => {
    setup();
  });
});

function setup(props?: Partial<BodySideNavItemComponent>) {
  cy.mount(BodySideNavItemComponent, {
    imports: [],
    componentProperties: {},
  });
}
