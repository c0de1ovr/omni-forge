import { mapReducersToMockedActions } from './utils';

describe('mapReducersToMockedActions', () => {
  it('should map reducers to mocked actions', () => {
    expect(
      mapReducersToMockedActions({
        firstReducer: jest.fn(),
        secondReducer: jest.fn(),
      }),
    ).toEqual({
      firstReducer: 'mocked-firstReducer-action',
      secondReducer: 'mocked-secondReducer-action',
    });
  });
});
