import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  it('should render component', () => {
    setup();
  });
});

function setup(props?: Partial<HeaderComponent>) {
  cy.mount(HeaderComponent, {
    imports: [],
    componentProperties: {},
  });
}
