---
title: Pages
authors:
  - ije
  - razermoon
---

# Pages

In Aleph.js, a **page** is a [React Component](https://reactjs.org/docs/components-and-props.html) exported as **default** from a `.js`, `.jsx`, `.ts`, `.tsx`, or `.mjs` file in the `pages` directory.

Each page is associated with a route based on its file name.

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

> To learn more about rendering, check out the [SSR & SSG](/docs/basic-features/ssr-and-ssg).

## Linking Between Pages

Aleph.js will check `anchor` tags ([JSX Magic](/docs/advanced-features/jsx-magic)) in your app to move between pages without refresh whole page, similarly to a SPA (single-page application).

```tsx
import React from 'https://esm.sh/react'

export default function Nav() {
  return (
    <>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/blog/hello-world">Hello World</a>
    </>
  )
}
```

In the example above we have three links, each one maps a path (`href`) to the specified page:

- `/` → `pages/index.tsx`
- `/about` → `pages/about.tsx`
- `/blog/hello-world` → `pages/blog/[slug].tsx`

### NavLink

You also can add `rel="nav"` property in the `anchor` tag to make it as `NavLink` that will add `active` className when the specific page is activated. You can change the active className via `data-active-className` or add active style using `data-active-style`.

```tsx
import React from 'https://esm.sh/react'

export default function Nav() {
  return (
    <>
      <a rel="nav" href="/">Home</a>
      <a rel="nav" data-active-className="current" href="/about">About</a>
      <a rel="nav" data-active-style={{ fontWeight: 'bold' }} href="/contact">Contact</a>
    </>
  )
}
```

### Use the `redirect` function

You can also redirect pages with the `redirect` function:

```jsx
import React, { useCallback } from "https://esm.sh/react"
import { redirect } from "https://deno.land/x/aleph/framework/core/mod.ts"

export default function Link({ to, replace, children }) {
  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      redirect(to, replace)
    },
    [to, replace]
  )

  return (
    <span onClick={onClick}>
      {children}
    </span>
  )
}
```

## Custom Page Loader

By default Aleph.js only renders pages from `.js`, `.jsx`, `.ts`, `.tsx`, and `.mjs` files in the `pages` directory. You can add loader plugins to support more page formats, for example, load **markdown** as pages:

```ts
import markdown from 'https://deno.land/x/aleph/plugins/markdown.ts'

export default {
  plugins: [
    markdown()
  ]
}
```

> To learn more about loader plugin, check the [Using Plugins](/docs/advanced-features/using-plugins).
