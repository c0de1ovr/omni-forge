import { configureStore } from '@reduxjs/toolkit';

import { makeStore } from './store';

jest.mock('@reduxjs/toolkit');
jest.mock('./features/counter/counter.slice', () => 'mocked-counter-slice');

describe('store', () => {
  it('should apply slices correctly', () => {
    makeStore();
    expect(configureStore).toHaveBeenCalledTimes(1);
    expect(configureStore).toHaveBeenCalledWith({
      reducer: { counter: 'mocked-counter-slice' },
    });
  });
});
