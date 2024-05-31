/* eslint-disable react/function-component-definition */
import '@/theme/styles/globals.css';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { type Metadata } from 'next';
import { type ReactNode } from 'react';
import { Navbar } from '@/components/navbar';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { StoreProvider } from '@/store';
import { ThemeProvider } from '@/theme';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          themeProps={{ attribute: 'class', defaultTheme: 'dark' }}
        >
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <StoreProvider>
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>
            </StoreProvider>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                isExternal
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
