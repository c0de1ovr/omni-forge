'use client';

import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import { type FC, type ReactNode } from 'react';

export interface ProviderProps {
  children: ReactNode;
  themeProps?: Omit<ThemeProviderProps, 'children'>;
}

export const ThemeProvider: FC<ProviderProps> = ({ children, themeProps }) => {
  const router = useRouter();

  return (
    <NextUIProvider
      navigate={(path) => {
        router.push(path);
      }}
    >
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
};
