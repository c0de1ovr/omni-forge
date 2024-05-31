'use client';
import { type ReactNode, useRef, type FC } from 'react';
import { Provider } from 'react-redux';

import { makeStore, type AppStore } from './store';

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
