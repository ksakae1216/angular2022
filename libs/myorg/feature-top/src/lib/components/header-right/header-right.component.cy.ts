import { HeaderRightComponent } from './header-right.component';

describe('HeaderRightComponent', () => {
  it('should render component', () => {
    setup();
  });
});

function setup(props?: Partial<HeaderRightComponent>) {
  cy.mount(HeaderRightComponent, {
    imports: [],
    componentProperties: {},
  });
}
