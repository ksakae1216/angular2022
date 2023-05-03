import { BodyMainPageComponent } from './body-main-page.component';

describe('BodyMainPageComponent', () => {
  it('should render component', () => {
    setup();
  });
});

function setup(props?: Partial<BodyMainPageComponent>) {
  cy.mount(BodyMainPageComponent, {
    imports: [],
    componentProperties: {},
  });
}
