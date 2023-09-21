import { ListComponent } from './list.component';

describe('ListComponent', () => {
  it('should render component', () => {
    setup();
  });

  it('should render list of 3', () => {
    setup({
      elementList: [
        { position: '1', name: 'Hydrogen', weight: '1.0079', symbol: 'H' },
        { position: '2', name: 'Helium', weight: '4.0026', symbol: 'He' },
        { position: '3', name: 'Lithium', weight: '6.941', symbol: 'Li' },
      ],
    });
    cy.get('tbody>tr').should('have.length', 3);
  });
});

function setup(props?: Partial<ListComponent>) {
  cy.mount(ListComponent, {
    imports: [],
    componentProperties: {
      elementList: props?.elementList ?? [],
    },
  });
}
