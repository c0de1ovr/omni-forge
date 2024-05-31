import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { makeStore } from './store';

import { AppStoreProvider } from '.';

jest.mock('react-redux');
jest.mock('./store');

describe('StoreProvider', () => {
  (Provider as jest.Mock).mockImplementation(({ children }) => (
    <div data-testid="redux-provider-mock">{children}</div>
  ));
  (makeStore as jest.Mock).mockReturnValue('mocked-store');

  it('should init redux provider with AppStore', () => {
    const { getByTestId } = render(<AppStoreProvider>child-mock</AppStoreProvider>);

    expect(makeStore).toHaveBeenCalledTimes(1);
    expect(Provider).toHaveBeenCalledTimes(1);
    expect(Provider).toHaveBeenCalledWith(
      { children: 'child-mock', store: 'mocked-store' },
      {},
    );
    expect(getByTestId('redux-provider-mock')).toBeInTheDocument();
  });
});
