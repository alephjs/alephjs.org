---
title: About Aleph.js
authors:
  - ije
  - razermoon
---

# Aleph.js

**Aleph.js** (or **Aleph** or **א** or **阿莱夫**, <samp>ˈɑːlɛf</samp>) is a
fullstack framework in [Deno]. Inspired by [Next.js], [Remix] and [Vite].

> The name is taken from the book [_The Aleph_] by **Jorge Luis Borges**.

Aleph.js is modern framework that doesn't need **webpack** or other bundler
since it uses the [ES Module] syntax during development. Every module only needs
to be compiled once, when a module changes, Aleph.js just needs to re-compile
that single module. There is no time wasted _re-bundling_ everytime a change is
made. This, along with Hot Module Replacement (**HMR**) and **Fast Refresh**,
leads to instant updates in the browser.

Aleph.js uses modern tools to build your app. It transpiles code using [swc] in
WASM with high performance, and bundles modules with [esbuild] at optimization
time extremely fast.

Aleph.js works on top of **Deno**, a _simple_, _modern_ and _secure_ runtime for
JavaScript and TypeScript. All dependencies are imported using URLs, and managed
by Deno cache system. No `package.json` and `node_modules` directory needed.

## Features

- Zero Config
- No build step
- File-system Routing
- Just-in-time Server-side Rendering(SSR)
- Streaming SSR
- Support Typescript/JSX in Deno out of the box
- Built-in [Unocss] (Automatic CSS)
- Import Maps
- Hot Module Replacement (or HMR)
- Support Middware
- Custom Module Loader like MDX

## Supported Frameworks

- [React](https://reactjs.org) (<Link to="/docs/framework/react">docs</Link>, [example](https://github.com/alephjs/aleph.js/tree/main/examples/react-app))
- [React](https://reactjs.org) with [MDX](https://mdxjs.com) (<Link to="/docs/framework/react-mdx">docs</Link>, [example](https://github.com/alephjs/aleph.js/tree/main/examples/react-mdx-app))
- [Vue](https://vuejs.org) (<Link to="/docs/framework/vue">docs</Link>, [example](https://github.com/alephjs/aleph.js/tree/main/examples/vue-app))
- [SolidJS](https://www.solidjs.com/) (<Link to="/docs/framework/solid">docs</Link>, [example](https://github.com/alephjs/aleph.js/tree/main/examples/solid-app))
  _Experimental_
- [Yew](https://yew.rs) (<Link to="/docs/framework/yew">docs</Link>, [example](https://github.com/alephjs/aleph.js/tree/main/examples/yew-app)) _In Rust_

Plan to support: [Svelte](https://svelte.dev/), [Lit](https://lit.dev/), etc..

## Status

Currently in **beta**, not ready for production.

## License

Under the [MIT] License.

[_The Aleph_]: http://phinnweb.org/links/literature/borges/aleph.html
[ES Module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[deno]: https://deno.land
[Unocss]: https://github.com/unocss/unocss
[next.js]: https://nextjs.org
[Remix]: https://remix.run
[Vite]: https://vitejs.dev
[swc]: https://swc.rs
[esbuild]: https://github.com/evanw/esbuild
[MIT]: https://opensource.org/licenses/MIT
