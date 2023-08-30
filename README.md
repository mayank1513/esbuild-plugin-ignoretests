# Turborepo template [![codecov](https://codecov.io/gh/mayank1513/esbuild-plugin-ignoretests/graph/badge.svg?token=8LX1NLNVRV)](https://codecov.io/gh/mayank1513/esbuild-plugin-ignoretests) [![Version](https://img.shields.io/npm/v/esbuild-plugin-ignoretests.svg?colorB=green)](https://www.npmjs.com/package/esbuild-plugin-ignoretests) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/dt/esbuild-plugin-ignoretests.svg)](https://www.npmjs.com/package/esbuild-plugin-ignoretests) [![Unit Tests](https://github.com/mayank1513/esbuild-plugin-ignoretests/actions/workflows/test.yml/badge.svg)](https://github.com/mayank1513/esbuild-plugin-ignoretests/actions/workflows/test.yml) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/esbuild-plugin-ignoretests)

> ESBuild plugin to ignore/exclude test files from build.

While building large libraries, we follow convention similar to `chakraui` -> component and corresponding tests for the component live in the same dedicated folder. In this scenario, `tsup` will build and include test file as well in the final build output. This is not desirable. This plugin will easily ignore test files from build process. You can also pass in custom regexp to ignore other files based on path.

## Compatibility

- JavaScript/TypeScript React libraries using `tsup` or other builders based on `esbuild`

This plugin seamlessly integrates with `tsup` and any other builders based on `esbuild`.

## Install

```bash
$ pnpm add esbuild-plugin-ignoretests
# or
$ npm install esbuild-plugin-ignoretests
# or
$ yarn add esbuild-plugin-ignoretests
```

```ts
// tsup.config.ts or tsup.config.js
import { defineConfig } from "tsup";
import ignoretestsPlugin from "esbuild-plugin-ignoretests";

export default defineConfig(options => ({
    ...
    esbuildPlugins:[ignoretestsPlugin()]
}));
```

optionally you can also pass custom regular expression.

```ts
export default defineConfig(options => ({
    ...
    esbuildPlugins:[ignoretestsPlugin({ customRegExp: /my-reg-exp/ })]
}));
```

### 🤩 Don't forger to start this repo!

Want handson course for getting started with Turborepo? Check out [React and Next.js with TypeScript](https://www.udemy.com/course/react-and-next-js-with-typescript/?referralCode=7202184A1E57C3DCA8B2)

## License

Licensed as MIT open source.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
