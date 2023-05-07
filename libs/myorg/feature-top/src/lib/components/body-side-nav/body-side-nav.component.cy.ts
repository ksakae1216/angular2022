import { BodySideNavComponent } from './body-side-nav.component';

describe('BodySideNavComponent', () => {
  it('should render component', () => {
    setup();
  });
});

function setup(props?: Partial<BodySideNavComponent>) {
  cy.mount(BodySideNavComponent, {
    imports: [],
    componentProperties: {},
  });
}
