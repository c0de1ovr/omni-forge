'use client';

import { Button } from '@nextui-org/button';
import { useAppDispatch, useAppSelector } from '@/store';
import { increment } from '@/store/features/counter/counter.slice';

export function Counter() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <Button onPress={() => dispatch(increment())} radius="full">
      Count is {value}
    </Button>
  );
}
