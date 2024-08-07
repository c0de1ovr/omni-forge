/* eslint-disable react/function-component-definition */
import { Code } from '@nextui-org/code';
import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { button as buttonStyles } from '@nextui-org/theme';
import { type NextPage } from 'next';
import { Counter } from '@/components/counter';
import { GithubIcon } from '@/components/icons';
import { title, subtitle } from '@/components/primitives';
import { siteConfig } from '@/config/site';

const Home: NextPage<unknown> = () => (
  <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <div className="inline-block max-w-lg text-center justify-center">
      <h1 className={title()}>Make&nbsp;</h1>
      <h1 className={title({ color: 'violet' })}>beautiful&nbsp;</h1>
      <br />
      <h1 className={title()}>
        websites regardless of your design experience.
      </h1>
      <h2 className={subtitle({ class: 'mt-4' })}>
        Beautiful, fast and modern React UI library.
      </h2>
    </div>

    <div className="flex gap-3">
      <Link
        className={buttonStyles({
          color: 'primary',
          radius: 'full',
          variant: 'shadow',
        })}
        href={siteConfig.links.docs}
        isExternal
      >
        Documentation
      </Link>
      <Link
        className={buttonStyles({ variant: 'bordered', radius: 'full' })}
        href={siteConfig.links.github}
        isExternal
      >
        <GithubIcon size={20} />
        GitHub
      </Link>
      <Counter />
    </div>

    <div className="mt-8">
      <Snippet hideCopyButton hideSymbol variant="flat">
        <span>
          Get started by editing <Code color="primary">app/page.tsx</Code>
        </span>
      </Snippet>
    </div>
    <div className="mt-8">
      <Counter />
    </div>
  </section>
);

export default Home;
