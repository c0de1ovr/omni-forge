'use client';
import { type ReactNode, useRef, type FC, createContext } from 'react';
import { type StoreApi } from 'zustand';

import { appStore, type AppStore } from './store';

export const AppStoreContext = createContext<StoreApi<AppStore> | null>(null);

export const AppStoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const storeRef = useRef<StoreApi<AppStore>>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = appStore;
  }

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
};
