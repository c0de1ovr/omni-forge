'use client';

import { Button } from '@nextui-org/button';
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Button onPress={() => setCount(count + 1)} radius="full">
      Count is {count}
    </Button>
  );
}
