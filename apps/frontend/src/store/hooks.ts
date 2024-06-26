import { useContext } from 'react';
import { useStore } from 'zustand';

import { AppStoreContext } from './provider';
import { type AppStore } from './store';

export const useAppStore = <T>(selector: (store: AppStore) => T): T => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext) {
    throw new Error(`appStoreContext must be use within AppStoreProvider`);
  }

  return useStore(appStoreContext, selector);
};
