import { ListPageComponent } from './list-page.component';

describe('ListPageComponent', () => {
  it('should render component', () => {
    setup();
  });
});

function setup(props?: Partial<ListPageComponent>) {
  cy.mount(ListPageComponent, {
    imports: [],
    componentProperties: {},
  });
}
