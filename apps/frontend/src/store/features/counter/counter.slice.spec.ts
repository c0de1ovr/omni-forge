import { createSlice } from '@reduxjs/toolkit';

import { mapReducersToMockedActions } from '../test/utils';

import { counterSlice, CounterState, selectCount } from './counter.slice';

var initialStateUnderTest: CounterState;
var reducersUnderTest: Record<string, Function>;

jest.mock('@reduxjs/toolkit', () => ({
  ...jest.requireActual('@reduxjs/toolkit'),
  createSlice: jest.fn(({ initialState, reducers }) => {
    initialStateUnderTest = initialState;
    reducersUnderTest = reducers;

    return {
      actions: mapReducersToMockedActions(reducers),
      reducer: jest.fn(),
    };
  }),
}));

describe('store slice counter', () => {
  it('slice should created correctly', () => {
    expect(counterSlice).toMatchObject({
      actions: {
        decrement: 'mocked-decrement-action',
        increment: 'mocked-increment-action',
        incrementByAmount: 'mocked-incrementByAmount-action',
      },
      reducer: expect.any(Function),
    });
    expect(createSlice).toHaveBeenCalledTimes(1);
    expect(createSlice).toHaveBeenCalledWith({
      initialState: { value: 0 },
      name: 'counter',
      reducers: {
        decrement: expect.any(Function),
        increment: expect.any(Function),
        incrementByAmount: expect.any(Function),
      },
    });
  });

  it('should contain correct initial state', () => {
    expect(initialStateUnderTest).toEqual({
      value: 0,
    });
  });

  describe('reducers', () => {
    let state: CounterState;

    beforeEach(() => {
      state = {
        value: 5,
      };
    });

    it('increment should increment value by 1', () => {
      reducersUnderTest.increment(state);
      expect(state).toEqual({ value: 6 });
    });

    it('decrement should decrement value by 1', () => {
      reducersUnderTest.decrement(state);
      expect(state).toEqual({ value: 4 });
    });

    it('incrementByAmount should increment value by given amount', () => {
      reducersUnderTest.incrementByAmount(state, { payload: 5 });
      expect(state).toEqual({ value: 10 });
    });
  });

  describe('selectors', () => {
    it('selectCount should select counter value', () => {
      expect(selectCount({ counter: { value: 5 } })).toEqual(5);
    });
  });
});
