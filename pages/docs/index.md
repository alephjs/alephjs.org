---
title: About Aleph.js
author: postUI Lab.
date: 2020-10-01
---

# Aleph.js
**Aleph.js** is a React Framework in [Deno](https://deno.land), inspired by [Next.js](https://nextjs.org), many concepts are same.

Different with Next.js, Aleph.js don't need webpack or other bundler since Aleph.js use the ESM import syntax. Every module only needs to be compiled once and then is cached on the disk. When a module changes, Aleph.js just recompile that single module, there’s no time wasted re-bundling every changes, and instant updates in the browser by **HMR**(Hot Module Replacement) with [React Fast Refresh](https://github.com/facebook/react/issues/16604#issuecomment-528663101).

Aleph.js works in [Deno](https://deno.land), the modern and secure runtime for JavaScript and TypeScript. No `node_modules` directory needs, all dependencies are based on ESM and managed by Aleph.js:
```javascript
import React from "https://esm.sh/react";

export default function Page() {
    return <h1>Hello World!</h1>
}
```

## Features

- Zero Config
- Typescript in Deno
- ES Module Ready
- HMR with Fast Refresh
- File-system Routing
- Markdown Page
- Built-in CSS(Less) Support
- SSR/SSG

## Status
In Alpha, not ready for production.

## Browser Support
Aleph.js requires [native ES module imports](https://caniuse.com/#feat=es6-module) and dynamic imports.
