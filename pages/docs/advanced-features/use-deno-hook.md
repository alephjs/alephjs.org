---
title: useDeno hook
authors:
  - ije
  - magus
  - znk
  - razermoon
---

# `useDeno` hook

In Next.js, two functions called `getStaticProps` and `getServerSideProps` are used by the pages to fetch data at **build time (SSG)** or on **each request (SSR)** respectively. This solution isolates the `data` and `view` like different roles of the `back-end` and `front-end`.

In Aleph.js, we prefer to use hooks. A **react hook** we provide called `useDeno` allows you to access **Deno runtime** in a component, that's more closed to React's credo.

```jsx
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

Even **asynchronous** callback is accepted:

```jsx
import React from 'https://esm.sh/react'
import { useDeno, useRouter } from 'https://deno.land/x/aleph/framework/react/mod.ts'

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

The `useDeno` hook receives a **callback** as first parameter that will be invoked during the server side rendering(SSR), then cache the returned result. In the browser, the callback will be ignored(tree-shaked), and the cached result will be used instead.

## Access to Request

Like the `ssr.props` option, you can access the [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request) in `useDeno` callback.

```tsx
export default function Page() {
  const isLogined = useDeno(req => {
    return req.headers.get('Auth') === 'XXX'
  }, { revalidate: true })

  return (
    <p>isLogined: {isLogined}</p>
  )
}
```

## Revalidate

An optional amount in seconds after which a page re-generation can occur (defaults is no revalidating). More on Incremental Static Regeneration (ISR).

```jsx
import React from 'https://esm.sh/react'
import { useDeno } from 'https://deno.land/x/aleph/framework/react/mod.ts'

export default function Page() {
  const now = useDeno(() => {
    return Date.now()
  }, { revalidate: 1 })

  return (
    <p>Server Time: {now}</p>
  )
}
```

If the `revalidate` equals `0` or `true`, then revalidates props each request.

```jsx
export default function Page() {
  const isLogined = useDeno(req => {
    return req.headers.get('Auth') === 'XXX'
  }, { revalidate: true })

  return (
    <p>isLogined: {isLogined}</p>
  )
}
```

## Caveats

- `useDeno` only works in **SSR** mode.
- To fetch data asynchronously at **build time (SSG)**, the `renderToString` method may be invoked repeatedly until all the async data is ready.
