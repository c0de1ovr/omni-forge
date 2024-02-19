'use client';

import { Button } from '@nextui-org/button';
import { useAppDispatch, useAppSelector } from '@/store';
import { increment, selectCount } from '@/store/features/counter/counter.slice';

export const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <Button onPress={() => dispatch(increment())} radius="full">
      Count is {count}
    </Button>
  );
};
