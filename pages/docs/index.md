---
title: About Aleph.js
authors:
  - ije
  - razermoon
---

# Aleph.js

**Aleph.js** (or **Aleph** or **א** or **阿莱夫**, <samp>ˈɑːlɛf</samp>) is a fullstack framework in [Deno], inspired by [Next.js].

Different with Next.js, Aleph.js doesn't need **webpack** or other bundlers since it uses the [ES moudule](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) syntax during development. Every module only needs to be compiled once, and then cached on the disk.
When a module changes, Aleph.js just needs to re-compile that single module. There is no time wasted _re-bundling_ everytime a change is made. This, along with **HMR** (Hot Module Replacement) and **Fast Refresh**, leads to instant updates in the browser.

Aleph.js works in **Deno**, a _simple_, _modern_ and _secure_ runtime for JavaScript and TypeScript. All dependencies are imported using URLs, and managed by Aleph.js. No `package.json` and `node_modules` directory needed:

```jsx
import React from 'https://esm.sh/react'
import Logo from '../components/logo.tsx'

export default function Home() {
  return (
    <div>
      <Logo />
      <h1>Hello World!</h1>
    </div>
  );
}
```

Aleph.js uses [swc](https://github.com/swc-project/swc) in rust with **high performance** to transpile your code that gives you the great development experience, and bundles your code with [esbuild](https://github.com/evanw/esbuild) at production phase super fast.

## Features

- Zero Config
- Typescript in Deno
- ES Module Ready
- Import Maps
- HMR with Fast Refresh
- File-system Routing
- API Routes
- SSR/SSG
- Plugin System
- Powered by Model Tools

## Status

Currently in **alpha**, not ready for production.

## License

Under the [MIT](https://opensource.org/licenses/MIT) License.

## Credits

Some concept description text in these docs is copied from [Next.js/docs](https://github.com/vercel/next.js/tree/master/docs) (**MIT License**).

[deno]: https://deno.land
[next.js]: https://nextjs.org
[swc]: https://swc.rs
