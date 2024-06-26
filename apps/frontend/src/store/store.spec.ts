import { appStore } from './store';

describe('store', () => {
  it('should apply slices correctly', () => {
    expect(appStore.getInitialState()).toMatchSnapshot();
    expect(appStore.getState()).toMatchSnapshot();
  });
});
