---
title: Pages
authors:
  - ije
  - razermoon
---

# Pages

In Aleph.js, a **page** is a [React Component](https://reactjs.org/docs/components-and-props.html) exported as **default** from a `.js`, `.jsx`, `.ts`, `.tsx`, or `.mjs` file in the `pages` directory. Each page is associated with a route based on its file name.

**Example**: If you create `pages/about.tsx` and it exports a React component like below, it will be accessible at `/about`.

```jsx
import React from "https://esm.sh/react"

export default function About() {
  return <h1>About Me</h1>
}
```

> To learn more about routing, check out the [Routing documentation](/docs/basic-features/routing).

## Pre-rendering

By default, Aleph.js **pre-renders** every page. This means that Aleph.js generates HTML for each page in advance, instead of rendering it with client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML page only needs a small amount of JavaScript. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called _hydration_.)

> To learn more about rendering, check the [SSR & SSG](/docs/basic-features/ssr-and-ssg).

## Custom Loader

By default Aleph.js only renders pages from `.js`, `.jsx`, `.ts`, `.tsx`, and `.mjs` files in the `pages` directory. You can add loader plugins to support more page formats, for example **markdown** page:

```ts
// aleph.config.ts

import markdown from 'https://deno.land/x/aleph/plugins/markdown.ts'
import type { Config } from 'https://deno.land/x/aleph/types.ts'

export default (): Config => ({
  plugins: [ markdown() ]
})
```