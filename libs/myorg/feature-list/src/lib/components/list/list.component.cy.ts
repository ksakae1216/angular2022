import { ListComponent } from './list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListComponent', () => {
  it('should render component', () => {
    setup();
  });

  it('should render loading', () => {
    setup({ loading: true });

    cy.get('mat-spinner').should('exist');
  });

  it('should render list of 10', () => {
    setup({
      elementList: [
        { position: '1', name: 'Hydrogen', weight: '1.0079', symbol: 'H' },
        { position: '2', name: 'Helium', weight: '4.0026', symbol: 'He' },
        { position: '3', name: 'Lithium', weight: '6.941', symbol: 'Li' },
        { position: '4', name: 'Beryllium', weight: '9.0122', symbol: 'Be' },
        { position: '5', name: 'Boron', weight: '10.811', symbol: 'B' },
        { position: '6', name: 'Carbon', weight: '12.0107', symbol: 'C' },
        { position: '7', name: 'Nitrogen', weight: '14.0067', symbol: 'N' },
        { position: '8', name: 'Oxygen', weight: '15.9994', symbol: 'O' },
        { position: '9', name: 'Fluorine', weight: '18.9984', symbol: 'F' },
        { position: '10', name: 'Neon', weight: '20.1797', symbol: 'Ne' },
      ],
    });
    cy.get('tbody>tr').should('have.length', 10);
  });

  describe('pageAction', () => {
    it('should pageIndex is 1 when click next page', () => {
      setup();

      cy.get('button[aria-label="Next page"]').click();

      cy.get('mat-paginator').invoke('attr', 'ng-reflect-page-size', 10);
      cy.get('mat-paginator').invoke('attr', 'ng-reflect-length', 50);
      cy.get('mat-paginator').invoke('attr', 'ng-reflect-page-index', 1);
    });

    it('should pageIndex is 0 when click previous page', () => {
      setup();

      cy.get('button[aria-label="Next page"]').click();
      cy.get('button[aria-label="Previous page"]').click();

      cy.get('mat-paginator').invoke('attr', 'ng-reflect-page-size', 10);
      cy.get('mat-paginator').invoke('attr', 'ng-reflect-length', 50);
      cy.get('mat-paginator').invoke('attr', 'ng-reflect-page-index', 0);
    });

    it('should apply pageSize when change pageSize', () => {
      setup();

      cy.get('mat-select').click();
      cy.get('mat-option').contains('25').click();

      cy.get('mat-paginator').invoke('attr', 'ng-reflect-page-size', 25);
      cy.get('mat-paginator').invoke('attr', 'ng-reflect-length', 50);
      cy.get('mat-paginator').invoke('attr', 'ng-reflect-page-index', 0);
    });
  });
});

function setup(props?: Partial<ListComponent>) {
  cy.mount(ListComponent, {
    imports: [BrowserAnimationsModule],
    componentProperties: {
      loading: props?.loading ?? false,
      elementList: props?.elementList ?? [],
      paging: props?.paging ?? {
        pageIndex: 0,
        pageSize: 10,
        totalCount: 50,
      },
    },
  });
}
