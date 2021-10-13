---
title: SSR & SSG
authors:
  - ije
  - Serdar Sever
  - razermoon
---

# SSR & SSG

By default, Aleph.js **pre-renders** every page. This means that Aleph.js generates HTML for each page in advance, instead of rendering it with client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML page only needs a small amount of JavaScript. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called _hydration_.)

You can disable **SSR** functionality in `aleph.config.ts`:

```ts
export default <Config>{
  ssr: false, // SPA mode
  ...
}
```

or specify exclude paths:

```ts
export default <Config>{
  ssr: {
    exclude: [
      /^\/admin\//,
      /^\/dashboard\//
    ]
  },
  ...
}
```

## SSR Options

If you export an object called `ssr` with a `props` function from a page, Aleph.js will pre-render this page using the returned props by the `props` function at build time. The [`Reqeust`](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request) object is passed as the first parameter of the function. (This is equal to `getStaticProps` of Next.js)

The `paths` in the `ssr` options returns a static paths if the page is a dynamic route. (This is equal to `getStaticPaths` of Next.js)

```tsx
import React from 'https://esm.sh/react'
import type { SSROptions } from 'https://deno.land/x/aleph/types.d.ts'

export const ssr: SSROptions = {
  props: async req => {
    return {
      $revalidate: 1, // revalidate props after 1 second
      username: await auth(req.headers.get('Auth-Token')),
      serverTime: Date.now()
    }
  },
  paths: async () => {
    return []
  }
}

export default function Page(props) {
  return (
    <p>Welcome back {props.username}, the server time is {props.serverTime}</p>
  )
}
```

We don't provide the `getServerSideProps` of Next.js, instead we allow the `ssr.props` access to `Request`, with `$revalidate` in the returned props equals `true` or `0`, you can complete same thing.

```ts
export const ssr: SSROptions = {
  props: async req => {
    return {
      $revalidate: 0, // revalidate props each request
      username: await auth(req.headers.get('Auth-Token'))
    }
  }
}
```

## `useDeno` hook

Aleph.js also provides an `useDeno` hook to mix the **Deno** runtime in your component:

```tsx
import React from 'https://esm.sh/react'
import { useDeno } from 'https://deno.land/x/aleph/framework/react/mod.ts'

export default function Page() {
  const version = useDeno(() => {
    return Deno.version
  })

  return (
    <p>Powered by Deno v{version.deno}</p>
  )
}
```

> To learn more `useDeno`, check the [`useDeno` Hook](/docs/advanced-features/use-deno-hook) documentation.

## Static Site Generation (SSG)

Aleph.js can export your app as a **static site** with rendered htmls, which can be served on any server or CDN.

```bash
$ aleph build
```

For **dynamic routes** with SSR, your can define the **static paths** in the `ssr` options:

```tsx
// pages/post/[id].tsx

import type { SSROptions } from 'https://deno.land/x/aleph/types.d.ts'

export const ssr: SSROptions = {
  paths: async () => {
    const posts = await (await fetch('https://.../api/posts')).json()
    return posts.map(({ id }) => `/post/${id}`)
  }
}

export default function Post() {
  return (
    <div>...</div>
  )
}
```

> See the [hello-world](https://alephjs-hello-world.vercel.app/) example on [Vercel](https://vercel.com).
