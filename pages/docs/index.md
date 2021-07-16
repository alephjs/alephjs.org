---
title: About Aleph.js
authors:
  - ije
  - razermoon
---

# Aleph.js

**Aleph.js** (or **Aleph** or **א** or **阿莱夫**, <samp>ˈɑːlɛf</samp>) is a fullstack framework in [Deno], inspired by [Next.js].

Different with Next.js, Aleph.js doesn't need **webpack** or other bundler since it uses the [ES Moudule] syntax during development. Every module only needs to be compiled once, and then cached on the disk.
When a module changes, Aleph.js just needs to re-compile that single module. There is no time wasted _re-bundling_ everytime a change is made. This, along with Hot Module Replacement (**HMR**) and **Fast Refresh**, leads to instant updates in the browser.

Aleph.js uses modern tools to build your app. It transpiles code using [swc] in rust with high performance and bundles modules with [esbuild] at build time extremely fast.

Aleph.js works in **Deno**, a _simple_, _modern_ and _secure_ runtime for JavaScript and TypeScript. All dependencies are imported using URLs, and managed by Deno cache system. No `package.json` and `node_modules` directory needed:

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

## Features

- Zero Config
- Typescript in Deno
- ES Module Ready
- Import Maps
- HMR with Fast Refresh
- File-system Routing
- API Routes
- SSR/SSG
- JSX Magic
- Plugins System
- Powered by Modern Tools

## Status

Currently in **beta**, not ready for production.

## License

Under the [MIT](https://opensource.org/licenses/MIT) License.

[ES Moudule]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[deno]: https://deno.land
[next.js]: https://nextjs.org
[swc]: https://swc.rs
[esbuild]: https://github.com/evanw/esbuild
