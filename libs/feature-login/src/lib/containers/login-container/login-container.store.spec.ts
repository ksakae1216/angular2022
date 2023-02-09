import { LoginContainerStore } from './login-container.store';

describe('LoginContainerStore', () => {
  const componentStore = new LoginContainerStore();

  it('should be created', () => {
    expect(componentStore).toBeTruthy();
  });
});
