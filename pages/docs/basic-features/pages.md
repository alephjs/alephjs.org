---
title: Pages
authors:
  - ije
  - razermoon
---

# Pages

In Aleph.js, a **page** is a [React Component](https://reactjs.org/docs/components-and-props.html) exported as **default** from a `.js`, `.jsx`, `.ts`, `.tsx` or `.mjs` file in the `pages` directory. Each page is associated with a route based on its file name.

**Example**: If you create `pages/about.tsx` and it exports a React component like below, it will be accessible at `/about`.

```jsx
import React from "https://esm.sh/react";

export default function About() {
  return <h1>About</h1>;
}
```

> To learn more about routing, check out the [Routing documentation](/docs/basic-features/routing).

### Markdown Pages

Aleph.js also supports pages that use **markdown**. Just create a `.md` file in the `pages` directory, and define page meta with **yaml** at the top.

For example:

```
---
title: About
---
# About
```

will be transformed to:

```jsx
import React from "https://esm.sh/react";

export default function MarkdownPage() {
  return <h1>About</h1>;
}

MarkdownPage.meta = {
  title: "About",
};
```

## Pre-rendering

By default, Aleph.js **pre-renders** every page. This means that Aleph.js generates HTML for each page in advance, instead of rendering it with client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML page only needs a small amount of JavaScript. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called _hydration_.)

> To learn more about rendering, check the [SSR & SSG](/docs/basic-features/ssr-and-ssg).
