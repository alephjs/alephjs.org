---
title: Routing
author: postUI Lab.
date: 2020-10-01
---

# Routing

Aleph.js has a file-system based router built on the [concept of pages](/docs/basic-features/pages).
<br>
When a file(`.js`, `.jsx`, `.ts`, `.tsx`, `.mjs`, `.md`) is added to the `pages` or `api` directory it's automatically available as a route.

### Index routes

The router will automatically route files named `index` to the root of the directory.

- `pages/index.tsx` → `/`
- `pages/blog/index.tsx` → `/blog`

### Dynamic routes

To match a dynamic segment you can use the bracket syntax or segment starts with **$**:

- `pages/blog/[slug].tsx` (`pages/blog/$slug.tsx`) → `/blog/:slug` (`/blog/hello-world`)
- `pages/[username]/settings.tsx` → `/:username/settings` (`/foo/settings`)
- `pages/post/[...all].tsx` → `/post/*` (`/post/2020/id/title`)

### Nested routes

The router supports nested routes like:

- `pages/blog.tsx`
- `pages/blog/index.tsx`
- `pages/blog/[slug].tsx`

This router will match `/blog` and `/blog/:slug`, then `blog.tsx` will be the parent component of `index.tsx` and `[slug].tsx`, ensure `blog.tsx` renders the children, you can also  add some public components:

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

## Linking between pages

The Aleph.js router allows you to do client-side route redirects between pages, similarly to a SPA(single-page application). A React component called `Link` is provided to do this client-side route redirect.

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

In the example above we have multiple links, each one maps a path (`to`) to the specify page:

- `/` → `pages/index.tsx`
- `/about` → `pages/about.tsx`
- `/blog/hello-world` → `pages/blog/[slug].tsx`

## Use the `Router`

To access the [`Router`](/docs/api-reference/type_ts/#router) in a React component you can use the [`useRouter`](/docs/api-reference/mod_ts#useRouter) hook:

```jsx
import React, { useMemo, useCallback } from "https://esm.sh/react"
import { useRouter, redirect } from "https://deno.land/x/aleph/mod.ts"

export default function NavLink({ href, children }) {
  const { pathname } = useRouter()
  const className = useMemo(() => pathname === href ? "active" : "", [pathname])
  const onClick = useCallback(e => {
    e.preventDefault()
    redirect(href)
  }, [href]]

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  )
}
```
