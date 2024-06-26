import type { StateCreator } from 'zustand';

export interface CounterState {
  value: number;
}

export interface CounterActions {
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
}

export type CounterSlice = CounterState & CounterActions;

export const createCounterSlice: StateCreator<CounterSlice> = (set) => ({
  value: 0,
  increment: () => {
    set((state) => ({
      value: state.value + 1,
    }));
  },
  decrement: () => {
    set((state) => ({
      value: state.value - 1,
    }));
  },
  incrementByAmount: (amount: number) => {
    set((state) => ({
      value: state.value + amount,
    }));
  },
});
