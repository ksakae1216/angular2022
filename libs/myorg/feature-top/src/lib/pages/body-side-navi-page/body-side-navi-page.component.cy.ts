import { BodySideNaviPageComponent } from './body-side-navi-page.component';

describe('BodySideNaviPageComponent', () => {
  it('should render component', () => {
    setup();
  });
});

function setup(props?: Partial<BodySideNaviPageComponent>) {
  cy.mount(BodySideNaviPageComponent, {
    imports: [],
    componentProperties: {},
  });
}
