import { BodySideNavPageComponent } from './body-side-nav-page.component';

describe('BodySideNavPageComponent', () => {
  it('should render component', () => {
    setup();
  });
});

function setup(props?: Partial<BodySideNavPageComponent>) {
  cy.mount(BodySideNavPageComponent, {
    imports: [],
    componentProperties: {},
  });
}
