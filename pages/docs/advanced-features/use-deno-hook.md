---
title: useDeno Hook
author: postUI Lab.
date: 2020-10-20
---

# `useDeno` Hook

In [Next.js](https://nextjs.org), two functions called `getStaticProps` and `getServerSideProps` are used by the pages to fetch data at **build time(SSR)** or on **each request**. This solution isolates the `data` and  `view` likes different roles of the `back-end` and `front-end`.

In Aleph.js, we perfer the *mixed* solution, a **react hook** called `useDeno` provided that allows you *fetch data* at **build time(SSR)** in a component, that's more *React Style*:

```jsx
import React from "https://esm.sh/react"
import { useDeno } from "https://deno.land/x/aleph/mod.ts"

export default function Page() {
  const version = useDeno(() => {
    return Deno.version
  })

  return (
    <p>Powered by Deno v{version.deno}</p>
  )
}
```

or *fetch data* **asynchronously**:

```jsx
import React from "https://esm.sh/react"
import { useDeno, userRouter } from "https://deno.land/x/aleph/mod.ts"

export default function Post() {
  const { params } = userRouter()
  const post = useDeno(async () => {
    return await (await fetch(`https://.../post/${params.id}`)).json()
  })

  return (
    <h1>{post.title}</h1>
  )
}
```

## How It Works

The `useDeno` hook can receive a sync or async **callback**(the first parameter), in the build time(SSG) each **callback** of `useDeno` will be invoked and then cache the returned data, after in the browser the callbacks of `useDeno` will be ignored and the cached data will be used, that's it.

## Refresh on Each Request

By default, the **callback** of `useDeno` only runs at **build time(SSR)**, but you also can run it in the browser by passing the second parameter `true`:

```jsx
 const post = useDeno(async () => {
    return await (await fetch(`https://.../post/${params.id}`)).json()
  }, true)
```

even refresh depends `deps`:

```jsx
 const post = useDeno(async () => {
    return await (await fetch(`https://.../post/${params.id}`)).json()
  }, true, [params.id])
```

## Caveats

- When you passed the second parameter `true` to the `useDeno` hook, you can't not use the **Deno runtime** since the **callback** will be invoked in the browser.
  ```jsx
  const version = useDeno(() => {
    return Deno.version
  }, true)
  ```
  > ReferenceError: Deno is not defined.
- To fetch data asynchronously in the build time(SSG), the `renderToString` maybe invoked repeatedly until all the async data is ready.
