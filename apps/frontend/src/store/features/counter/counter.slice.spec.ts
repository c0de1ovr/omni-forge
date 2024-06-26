import { createStore } from 'zustand/vanilla';

import { createCounterSlice, type CounterSlice } from './counter.slice';

describe('store slice counter', () => {
  let sliceStore = createStore<CounterSlice>()((...args) => ({
    ...createCounterSlice(...args),
  }));

  it('should return the initial state', () => {
    expect(sliceStore.getInitialState()).toMatchObject({
      value: 0,
    });
  });

  describe('actions', () => {
    beforeEach(() => {
      sliceStore = createStore<CounterSlice>()((...args) => ({
        ...createCounterSlice(...args),
      }));
    });

    it('increment should increment value by 1', () => {
      sliceStore.getState().increment();
      expect(sliceStore.getState()).toMatchObject({ value: 1 });
    });

    it('decrement should decrement value by 1', () => {
      sliceStore.getState().decrement();
      expect(sliceStore.getState()).toMatchObject({ value: -1 });
    });

    it('incrementByAmount should increment value by given amount', () => {
      sliceStore.getState().incrementByAmount(6);
      expect(sliceStore.getState()).toMatchObject({ value: 6 });
    });
  });
});
