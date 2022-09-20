---
title: About Aleph.js
authors:
  - ije
  - razermoon
---

# Aleph.js

**Aleph.js** (or **Aleph** or **א** or **阿莱夫**, <samp>ˈɑːlɛf</samp>) is a
fullstack framework in [Deno]. inspired by [Next.js], [Remix] and [Vite].

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
- Built-in [Unocss] (automatic CSS)
- Import Maps
- Hot Module Replacement (or HMR)
- Support Middware
- Custom Module Loader like MDX

## Supported frameworks

- [React](https://github.com/alephjs/aleph.js/tree/main/examples/react-app)
- [React with MDX](https://github.com/alephjs/aleph.js/tree/main/examples/react-mdx-app)
- [Vue](https://github.com/alephjs/aleph.js/tree/main/examples/vue-app)
- [Solid](https://github.com/alephjs/aleph.js/tree/main/examples/solid-app)
  _Experimental_
- [Yew](https://github.com/alephjs/aleph.js/tree/main/examples/yew-app) _Rust_

Plan to support: [Svelte](https://svelte.dev/), [Lit](https://lit.dev/), etc..

## Examples

Some demo apps deployed to [Deno Deploy](https://deno.com/deploy):

- React App: https://aleph-hello.deno.dev/
- Vue App: https://aleph-vue.deno.dev/
- REST API: https://aleph-api.deno.dev/
- React 18 Suspense SSR: https://aleph-suspense-ssr.deno.dev/
- UnoCSS(tailwind): https://aleph-unocss.deno.dev/
- Monaco Editor: https://aleph-monaco-editor.deno.dev/
- Yew SSR: https://aleph-yew.deno.dev/
- Github OAuth Middleware: https://aleph-github-oauth.deno.dev/

## Real-world Apps

- Deno Deploy: https://dash.deno.com
- Meet Me: https://meet-me.deno.dev
  ([source](https://github.com/denoland/meet-me))

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
