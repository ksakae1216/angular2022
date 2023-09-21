import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListPageComponent } from './list-page.component';

describe('ListPageComponent', () => {
  it('should render component', () => {
    setup();
  });
});

function setup(props?: Partial<ListPageComponent>) {
  cy.mount(ListPageComponent, {
    imports: [HttpClientTestingModule],
    componentProperties: {},
  });
}
