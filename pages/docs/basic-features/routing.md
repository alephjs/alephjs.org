---
title: Routing
authors:
  - ije
  - razermoon
---

# Routing

Aleph.js has a file-system based router built on the [concept of pages](/docs/basic-features/pages).
<br>
When a file (`.js`, `.jsx`, `.ts`, `.tsx`, `.mjs`, `.md`) is added to the `pages` directory, it is automatically available as a route.

### Index Routes

The router will automatically route files named `index` to the root of the directory.

- `pages/index.tsx` → `/`
- `pages/blog/index.tsx` → `/blog`

### Dynamic Routes

To match a dynamic segment, you can use bracket syntax or start the segment with **$**:

- `pages/blog/[slug].tsx` (`pages/blog/$slug.tsx`) → `/blog/:slug` (`/blog/hello-world`)
- `pages/[username]/settings.tsx` → `/:username/settings` (`/foo/settings`)
- `pages/post/[...all].tsx` → `/post/*` (`/post/2020/id/title`)

### Nested Routes

The router supports nested route structures such as:

- `pages/blog.tsx`
- `pages/blog/[slug].tsx`

or

- `pages/blog/index.tsx`
- `pages/blog/[slug].tsx`

Both are equivalent, make sure the top file renders the child components.

You can also add some public components:

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

A [`Link`](/docs/api-reference/mod.ts#Link) component is provided to move between pages, similarly to a SPA (single-page application).

```jsx
import React from "https://esm.sh/react";
import { Link } from "https://deno.land/x/aleph/mod.ts";

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
  );
}
```

In the example above we have three links, each one maps a path (`to`) to the specified page:

- `/` → `pages/index.tsx`
- `/about` → `pages/about.tsx`
- `/blog/hello-world` → `pages/blog/[slug].tsx`

### Use the `redirect` function

You can also redirect users with the `redirect` function:

```jsx
import React, { useCallback } from "https://esm.sh/react";
import { redirect } from "https://deno.land/x/aleph/mod.ts";

export default function Link({ to, replace, children }) {
  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      redirect(to, replace);
    },
    [to, replace]
  );

  return (
    <a href={to} onClick={onClick}>
      {children}
    </a>
  );
}
```

## Use the `Router`

To access the [`Router`](/docs/api-reference/types.ts/#RouterURL) object in a React component, you can use the [`useRouter`](/docs/api-reference/mod.ts#useRouter) hook:

```jsx
import { useRouter } from "https://deno.land/x/aleph/mod.ts"

// hypothetically current location patname is '/post/hello-world?theme=dark'
export default function Component({ href, children }) {
  const {
    pathname, // string, should be '/post/hello-world'
    pagePath, // string, should be '/post/[slug]'
    params,   // object, should be {slug: 'hello-world'}
    query     // URLSearchParams, `query.get('theme')` sholud be 'dark'
  } = useRouter()
  ...
}
```

## I18N

Aleph.js don't provide **I18N** function directly, but routing supports the **locale prefix**. You need to config the locale list in `aleph.config.js`:

```javascript
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
import React from "https://esm.sh/react";
import { useRouter } from "https://deno.land/x/aleph/mod.ts";

export default function Page() {
  const { locale } = useRouter();

  if (locale === "zh-CN") {
    return <h1>你好世界</h1>;
  }
  return <h1>Hello World</h1>;
}
```

And **SSG** will generate all the pages from the locale list with the prefix.
