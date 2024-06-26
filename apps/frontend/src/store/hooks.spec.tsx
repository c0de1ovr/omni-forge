import { renderHook } from '@testing-library/react';
import { type ReactNode } from 'react';

import { useAppStore } from './hooks';
import { AppStoreProvider } from './provider';

describe('store hooks', () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const wrapper = ({ children }: { children: ReactNode }) => (
    <AppStoreProvider>{children}</AppStoreProvider>
  );

  it('should access value inside store', () => {
    const { result } = renderHook(() => useAppStore((state) => state.value), {
      wrapper,
    });

    expect(result.current).toEqual(0);
  });
});
