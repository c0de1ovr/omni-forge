import reducer, {
  increment,
  decrement,
  incrementByAmount,
  type CounterState,
  selectCount,
} from './counter.slice';

describe('store slice counter', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual({
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
      expect(reducer(state, increment())).toEqual({ value: 6 });
    });

    it('decrement should decrement value by 1', () => {
      expect(reducer(state, decrement())).toEqual({ value: 4 });
    });

    it('incrementByAmount should increment value by given amount', () => {
      expect(reducer(state, incrementByAmount(5))).toEqual({ value: 10 });
    });

    describe('selectors', () => {
      it('selectCount should select counter value', () => {
        expect(selectCount({ counter: state })).toEqual(5);
      });
    });
  });
});
