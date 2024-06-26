import { createStore } from 'zustand/vanilla';

import {
  createCounterSlice,
  type CounterSlice,
} from './features/counter/counter.slice';

export type AppStore = CounterSlice;

export const appStore = createStore<AppStore>()((...args) => ({
  ...createCounterSlice(...args),
}));
