---
title: Pages
author: postUI Lab.
date: 2020-10-01
---

# Pages

In Aleph.js, a **page** is a [React Component](https://reactjs.org/docs/components-and-props.html) exported from a `.js`, `.jsx`, `.ts`, `.tsx`, `.mjs` as **default** in the `pages` directory. Each page is associated with a route based on its file name.

**Example**: If you create `pages/about.jsx` that exports a React component like below, it will be accessible at `/about`.

```jsx
import React from "https://esm.sh/react"

export default function About() {
  return <h1>About</h1>
}
```
> To learn more about routing, check the [Routing documentation](/docs/basic-features/routing).

### Markdown Page
Aleph.js supports **markdown** pages from `.md` files in the `pages` directory, and you can define page meta with **yaml** format at front of this `.md` files:

```
---
title: About
date: 2020-10-01
---
# About
```

will be transformed to:

```jsx
import React from "https://esm.sh/react"

export default function MarkdownPage() {
  return <h1>About</h1>
}

MarkdownPage.meta = {
    title: "About",
    date: "2020-10-01T00:00:00.000Z"
}
```

## Pre-rendering

By default, Aleph.js **pre-renders** every page. This means that Aleph.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called _hydration_.)

You can disable the **pre-rendering** function in the `config.json`:

```json
{
  "ssr": false
}
```

or specify exclude paths:

```json
{
  "ssr": {
    "exclude": [
      "admin/"
      "dashboard/"
    ]
  }
}
```
