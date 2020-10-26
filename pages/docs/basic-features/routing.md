---
title: Routing
authors:
  - ije
---

# Routing

Aleph.js has a file-system based router built on the [concept of pages](/docs/basic-features/pages).
<br>
When a file(`.js`, `.jsx`, `.ts`, `.tsx`, `.mjs`, `.md`) is added to the `pages` directory it's automatically available as a route.

### Index Routes

The router will automatically route files named `index` to the root of the directory.

- `pages/index.tsx` → `/`
- `pages/blog/index.tsx` → `/blog`

### Dynamic Routes

To match a dynamic segment you can use the bracket syntax or segment starts with **$**:

- `pages/blog/[slug].tsx` (`pages/blog/$slug.tsx`) → `/blog/:slug` (`/blog/hello-world`)
- `pages/[username]/settings.tsx` → `/:username/settings` (`/foo/settings`)
- `pages/post/[...all].tsx` → `/post/*` (`/post/2020/id/title`)

### Nested Routes

The router supports nested routes like:

- `pages/blog.tsx`
- `pages/blog/index.tsx`
- `pages/blog/[slug].tsx`

This router will match `/blog` and `/blog/:slug`, and `blog.tsx` will be the parent component of `index.tsx` and `[slug].tsx`, ensure `blog.tsx` renders the child components, you can also add some public components:

```jsx
// blog.tsx
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

## Linking Between Pages

A React Component called [`Link`](/docs/api-reference/mod.ts#Link) is provided to do this client-side route redirects between pages, similarly to a SPA(single-page application).

```jsx
import React from "https://esm.sh/react"
import { Link } from "https://deno.land/x/aleph/mod.ts"

export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog/hello-world">Hello World</Link>
      </li>
    </ul>
  )
}
```

In the example above we have three links, each one maps a path (`to`) to the specify page:

- `/` → `pages/index.tsx`
- `/about` → `pages/about.tsx`
- `/blog/hello-world` → `pages/blog/[slug].tsx`

### Use the `redirect` function
you can also redirect page with the `redirect` function:

```jsx
import React, { useCallback } from "https://esm.sh/react"
import { redirect } from "https://deno.land/x/aleph/mod.ts"

export default function Link({to, replace, children}) {
  const onClick = useCallback(e => {
    e.preventDefault()
    redirect(to, replace)
  }, [to, replace])

  return (
    <a href={to} onClick={onClick}>{children}</a>
  )
}
```

## Use the `Router`

To access the [`Router`](/docs/api-reference/types.ts/#RouterURL) object in a React component you can use the [`useRouter`](/docs/api-reference/mod.ts#useRouter) hook:

```jsx
import { useRouter } from "https://deno.land/x/aleph/mod.ts"

// current location patname: '/post/hello-world?theme=dark'
export default function Component({ href, children }) {
  const {
    pathname, // the pathname of current router, sholud be: '/post/hello-world'
    pagePath, // the pagePath of current router, sholud be: '/post/[slug]'
    params,   // the params object of current router, sholud be: {slug: 'hello-world'}
    query     // the URLSearchParams object of current router, `query.get('theme')` sholud be: 'dark'
  } = useRouter()

  ...
}
```

## I18N

Aleph.js don't provide the **I18N** function directly, but the routing supports the **locale prefix**, you need to config the locale list in `aleph.config.js`, then access the locale in the [`Router`](/docs/api-reference/types.ts/#RouterURL) object with [`useRouter`](/docs/api-reference/mod.ts#useRouter) hook, and the **SSG** will generate all the pages in the locale list will the prefix.

```javascript
export default {
  defaultLocale: 'en',
  locales: ['en', 'zh-CN'],
  ...
}
```

then all the routes will match paths with **'zh-CN'** prefix, even the *zh-CN* don't exist in the `pages` dir:

- `pages/index.tsx` →  `/` and `/zh-CN` (pathname is `/`)
- `pages/blog.tsx` →  `/blog` and `/zh-CN/blog` (pathname is `/blog`)

```jsx
import React from "https://esm.sh/react"
import { useRouter } from "https://deno.land/x/aleph/mod.ts"

export default function Page() {
  const { locale } = useRouter()

  if (locale === 'zh-CN') {
    return <h1>你好世界</h1>
  }
  return <h1>Hello World</h1>
}
```
