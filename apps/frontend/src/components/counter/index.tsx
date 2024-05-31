'use client';

import { Button } from '@nextui-org/button';
import { type FC } from 'react';
import { useAppStore } from '@/store';

export const Counter: FC = () => {
  const [count, increment] = useAppStore((state) => [
    state.value,
    state.increment,
  ]);

  return (
    <Button
      onPress={() => {
        increment();
      }}
      radius="full"
    >
      Count is {count}
    </Button>
  );
};
