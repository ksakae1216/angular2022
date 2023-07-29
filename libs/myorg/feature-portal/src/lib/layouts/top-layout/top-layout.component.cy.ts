import { TopLayoutComponent } from './top-layout.component';

describe('TopLayoutComponent', () => {
  it('should render component', () => {
    setup();
  });
});

function setup(props?: Partial<TopLayoutComponent>) {
  cy.mount(TopLayoutComponent, {
    imports: [],
    componentProperties: {},
  });
}
