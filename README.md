# ssml-tsx
[![Version](https://img.shields.io/npm/v/ssml-tsx.svg)](https://www.npmjs.com/package/ssml-tsx)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

Write SSML (Speech Synthesis Markup Language) inline within JSX or TSX.
This module includes type definitions for SSML.

## Install

```sh
$ npm install --save ssml-tsx
```

Add `"jsx": "react"` into your `tsconfing.json` .

```diff
 {
   "compilerOptions": {
     ...,
+    "jsx": "react",
   }
 }
```

## Usage

For simple usage, write ssml tag with the file name as `.tsx` extension. Don't forget the JSX pragma `@jsx ssml`.

Passing it to `renderToString` renders it as a string.

```tsx
/** @jsx ssml */
import ssml, { rendetToString } from "ssml-tsx";

console.log(renderToString(
  <speak>
    <say-as interpret-as="date">10/1</say-as>
  </speak>
));
// => "<speak><say-as interpret-as=\"date\">10/1</say-as></speak>"
```

It also works with component styles. Currently only function components are supported.

```tsx
/** @jsx ssml */
import ssml, { rendetToString, FC } from "ssml-tsx";

const Foo: FC<{ name: string }> = ({ name }) => (
  <speak>
    <say-as interpret-as="characters">{name}</say-as>
    <break time="2s" />
    <p>What would you like to do today?</p>
  </speak>
);
console.log(renderToString(<Foo name="bar" />));
```

## Using with eslint

Use [`eslint-pllugin-react`](https://github.com/yannickcr/eslint-plugin-react) to make lint work correctly.

```sh
$ npm install --save-dev eslint-pllugin-react
```

Add this lines into your `.eslintrc.js`
```diff
 plugins: [
   ...,
+  "react"
 ],
 rules: {
   ...,
+  "react/jsx-uses-react": "error",
+  "react/jsx-uses-vars": "error",
 }

```
