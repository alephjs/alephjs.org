---
title: useDeno hook
authors:
  - ije
  - Noah Jorgensen
  - Serdar Sever
  - razermoon
---

# `useDeno` hook

In [Next.js](https://nextjs.org/docs/basic-features/data-fetching), two functions called `getStaticProps` and `getServerSideProps` are used by the pages to fetch data at **build time (SSR)** or on **each request** respectively. This solution isolates the `data` and `view` like different roles of the `back-end` and `front-end`.

In Aleph.js, we prefer to use hooks. A **react hook** we provide called `useDeno` allows you to access **Deno runtime** in a component, that's more closed to React's credo.

```jsx
import React from 'https://esm.sh/react'
import { useDeno } from 'https://deno.land/x/aleph/aleph/react/mod.ts'

export default function Page() {
  const version = useDeno(() => {
    return Deno.version
  })

  return (
    <p>Powered by Deno v{version.deno}</p>
  )
}
```

Even **asynchronous** callback is accepted:

```jsx
import React from 'https://esm.sh/react'
import { useDeno, useRouter } from 'https://deno.land/x/aleph/aleph/react/mod.ts'

export default function Post() {
  const { params } = useRouter()
  const post = useDeno(async () => {
    return await (await fetch(`https://.../post/${params.id}`)).json()
  })

  return (
    <h1>{post.title}</h1>
  )
}
```

## How It Works

The `useDeno` hook receives a **callback** (the first parameter) that will be invoked during build time (SSG), then cache the callback result. In the browser, the callback will be ignored, and the cached result will be used instead.

## Revalidate

An optional amount in seconds after which a page re-generation can occur (defaults is no revalidating). More on Incremental Static Regeneration.

```jsx
import React from 'https://esm.sh/react'
import { useDeno } from 'https://deno.land/x/aleph/aleph/react/mod.ts'

export default function Page() {
  const now = useDeno(() => {
    return Date.now()
  }, { revalidate: 1 })

  return (
    <p>Server Time: {now}</p>
  )
}
```

## Caveats

- `useDeno` only works in **SSR** mode.
- To fetch data asynchronously at **build time (SSG)**, the `renderToString` method may be invoked repeatedly until all the async data is ready.
