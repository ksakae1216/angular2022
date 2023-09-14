import { ListComponent } from './list.component';

describe('ListComponent', () => {
  it('should render component', () => {
    setup();
  });
});

function setup(props?: Partial<ListComponent>) {
  cy.mount(ListComponent, {
    imports: [],
    componentProperties: {},
  });
}
