import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { type StoreApi } from 'zustand';

import { type AppStore } from './store';

import { AppStoreProvider } from '.';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  createContext: jest.fn().mockImplementation(() => ({
    Provider: ({
      children,
      value,
    }: {
      children: ReactNode;
      value: StoreApi<AppStore>;
    }) => {
      const initialState = value.getInitialState();
      return (
        <div
          data-testid="app-store-provider"
          data-store={JSON.stringify(initialState)}
        >
          {children}
        </div>
      );
    },
  })),
}));

describe('StoreProvider', () => {
  it('should initialize zustand correctly', () => {
    const { getByTestId } = render(
      <AppStoreProvider>child-mock</AppStoreProvider>,
    );

    expect(getByTestId('app-store-provider')).toBeInTheDocument();
    expect(getByTestId('app-store-provider')).toHaveAttribute(
      'data-store',
      JSON.stringify({
        value: 0,
      }),
    );
  });
});
