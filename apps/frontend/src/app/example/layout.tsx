/* eslint-disable react/function-component-definition */
import { ReactNode } from 'react';

export default function ExampleLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        {children}
      </div>
    </section>
  );
}
