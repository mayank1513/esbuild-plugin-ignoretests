# Fork Me React.js component [![Version](https://img.shields.io/npm/v/fork-me-react.svg?colorB=green)](https://www.npmjs.com/package/fork-me-react) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/dt/fork-me-react.svg)](https://www.npmjs.com/package/fork-me-react) [![Unit Tests](https://github.com/mayank1513/esbuild-plugin-ignoretests/actions/workflows/test.yml/badge.svg)](https://github.com/mayank1513/esbuild-plugin-ignoretests/actions/workflows/test.yml) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/fork-me-react)

A simple fork me component for React.js projects!

## Install

```bash
$ pnpm add fork-me-react
# or
$ npm install fork-me-react
# or
$ yarn add fork-me-react
```

## Add on your page

```ts
<ForkMe href="https://github.com/mayank1513/turbo-template" />
```

## Optional parameters

```ts
	text?: string; // replace the Fork me on GitHub text
	width?: string | number; // if you need to adjust the width of the ribbon (length)
	height?: string | number; // to adjust height of the ribbon
	bgColor?: string; // background color
	textColor?: string; // text color
```

> This package also serves as an example to demonstrate how to build and publish `React.js` library compatible with React Server Components
