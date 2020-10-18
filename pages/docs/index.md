---
title: About Aleph.js
author: postUI Lab.
date: 2020-10-01
---

# Aleph.js

**Aleph.js** (or **Aleph** or **א**, /ˈɑːlɛf/) is a React Framework in [Deno], inspired by [Next.js].

Different with Next.js, Aleph.js don't need webpack or other bundler since Aleph.js use the ESM imports syntax. Every module only needs to be compiled once and then cached on the disk. When a module changes, Aleph.js just recompile that single module, there's no time wasted re-bundling every changes, and instant updates in the browser by **HMR**(Hot Module Replacement) with [React Fast Refresh](https://github.com/facebook/react/issues/16604#issuecomment-528663101).

Aleph.js works in [Deno], the modern and secure runtime for JavaScript and TypeScript. No `node_modules` directory needed, all dependencies are imported as URL and managed by Aleph.js:

```jsx
import React from "https://esm.sh/react"

export default function Page() {
    return <h1>Hello World!</h1>
}
```

## Features

- Zero Config
- Typescript in Deno
- ES Module Ready
- Import Maps
- HMR with Fast Refresh
- File-system Routing
- Markdown Page
- Built-in CSS(Less) Support
- SSR/SSG

## Status

In **alpha** stage, not ready for production.

## License

Under the [MIT](https://opensource.org/licenses/MIT) License.

[Deno]: https://deno.land
[Next.js]: https://nextjs.org
