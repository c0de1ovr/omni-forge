# OMNI-FORGE

Start your prototype today! 

## Abstract

Especially when you want to try something out, often it lags on time that you want to have a environment where you are guided by linting rules. Integrations can be very painful, like eslint, prettier, jest. etc.
This project solves the problem, it provides you a opinionated blueprint to directly start prototyping without loosing code quality, also writing test works out of the box.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `frontend`: [Next.js](https://nextjs.org/) starter application with app router
- `@repo/eslint-config`: `eslint` configurations
- `@repo/jest-preset`: `jest` preset
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io/) for code formatting
- [Jest](https://jestjs.io/) for unit testing
- [NextUI](https://nextui.org/) for making beautiful websites from starting point
- [Redux](https://redux.js.org/) for predictable state container in your frontend

### Build (TDB)

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Commands

> These project is making use of [pnpm](https://pnpm.io/)

| command | description                                  |
| ------- | -------------------------------------------- |
| install | install all dependencies                     |
| lint    | linting all apps & packages                  |
| test    | executing unit tests on all apps & packages  |
| dev     | start develop mode on all apps & packages    |

## Useful Links

**Turborepo**:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

**NextJS**:
**NextUI**:

## TODO
- [] backend service starter (nestjs)
- [] PoC: nextjs server components and module federation

## License

[MIT](https://choosealicense.com/licenses/mit/)