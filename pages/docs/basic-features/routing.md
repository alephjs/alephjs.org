---
title: Routing
authors:
  - ije
  - razermoon
---

# Routing

Aleph.js has a file-system based router built on the [concept of pages](/docs/basic-features/pages).
<br>
When a file (`.js`, `.jsx`, `.ts`, `.tsx`, and `.mjs`) is added to the `pages` directory, it is automatically available as a route.

### Index Routes

The router will automatically route files named `index` to the root of the directory.

- `pages/index.tsx` → `/`
- `pages/blog/index.tsx` → `/blog`

### Dynamic Routes

To match a dynamic segment, you can use bracket syntax or start the segment with **$**:

- `pages/blog/[slug].tsx` → `/blog/:slug` (`/blog/hello-world`)
- `pages/[username]/settings.tsx` → `/:username/settings` (`/foo/settings`)
- `pages/post/[...all].tsx` → `/post/*` (`/post/2020/id/title`)

### Nested Routes

Aleph's router supports nested route structures like:

- `pages/blog.tsx`
- `pages/blog/[slug].tsx`

In the example, routes in `/blog/:slug` will be rendered under the `pages/blog.tsx`, that is useful to create a **layout** for pages:

```jsx
import React from "https://esm.sh/react"
import BlogHeader from "../components/blog-header.tsx"

export default function Blog({ Page, pageProps }) {
  return (
    <>
      <BlogHeader />
      <Page ...pageProps />
    </>
  )
}
```

## `RouterURL` object

To access the`RouterURL` object in a component, you can use the `useRouter` hook:

```jsx
import { useRouter } from "https://deno.land/x/aleph/aleph/react/mod.ts";

// hypothetically current location patname is '/post/hello-world?theme=dark'
export default function Component({ href, children }) {
  const {
    pathname, // string, should be '/post/hello-world'
    pagePath, // string, should be '/post/[slug]'
    params,   // object, should be {slug: 'hello-world'}
    query,    // URLSearchParams, `query.get('theme')` sholud be 'dark'
  } = useRouter()

  return <p>current pathname: {pathname}</p>
}
```

## I18N routing

Aleph.js don't provide **I18N** function directly, but the routing supports the **locale prefix**. You need to config the locales in `aleph.config.ts`:

```ts
export default {
  defaultLocale: 'en',
  locales: ['en', 'zh-CN'],
  ...
}
```

In the above example, all the routes will match paths with the **'zh-CN'** prefix, even if _zh-CN_ don't exist in the `pages` dir:

- `pages/index.tsx` → `/` and `/zh-CN` (pathname is `/`)
- `pages/blog.tsx` → `/blog` and `/zh-CN/blog` (pathname is `/blog`)

Now you can access **locale** in the [`Router`](/docs/api-reference/types.ts/#RouterURL) object using the [`useRouter`](/docs/api-reference/mod.ts#useRouter) hook:

```jsx
import React from "https://esm.sh/react"
import { useRouter } from "https://deno.land/x/aleph/mod.ts"

export default function Page() {
  const { locale } = useRouter()

  if (locale === "zh-CN") {
    return <h1>你好世界</h1>
  }
  return <h1>Hello World</h1>
}
```

And the `build` command (**SSG**) will generate all the locale pages from the locale list.
