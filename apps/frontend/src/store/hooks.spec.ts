import { useDispatch, useSelector, useStore } from 'react-redux';

import { useAppDispatch, useAppSelector, useAppStore } from './hooks';

describe('store hooks', () => {
  it('should expose necessary hooks correctly', () => {
    expect(useAppDispatch).toEqual(useDispatch);
    expect(useAppSelector).toEqual(useSelector);
    expect(useAppStore).toEqual(useStore);
  });
});
