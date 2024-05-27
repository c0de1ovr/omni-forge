'use client';

import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export interface ProviderProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export const ThemeProvider = ({
  children,
  themeProps,
}: ProviderProps): JSX.Element => {
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
