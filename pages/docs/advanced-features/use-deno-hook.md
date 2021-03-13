---
title: useDeno Hook
authors:
  - ije
  - Noah Jorgensen
  - Serdar Sever
  - razermoon
---

# `useDeno` Hook

In [Next.js](https://nextjs.org/docs/basic-features/data-fetching), two functions called `getStaticProps` and `getServerSideProps` are used by the pages to fetch data at **build time (SSR)** or on **each request** respectively. This solution isolates the `data` and `view` like different roles of the `back-end` and `front-end`.

In Aleph.js, we prefer to use a _mixed_ solution. A **react hook** we provide called [`useDeno`](/docs/api-reference/mod.ts#useDeno) allows you to _fetch data_ at **build time (SSR)** in a component with **Deno runtime**, that's more like the _React Style_:

```jsx
import React from "https://esm.sh/react";
import { useDeno } from "https://deno.land/x/aleph/mod.ts";

export default function Page() {
  const version = useDeno(() => {
    return Deno.version;
  });

  return <p>Powered by Deno v{version.deno}</p>;
}
```

or _fetch data_ **asynchronously**:

```jsx
import React from "https://esm.sh/react";
import { useDeno, useRouter } from "https://deno.land/x/aleph/mod.ts";

export default function Post() {
  const { params } = useRouter();
  const post = useDeno(async () => {
    return await (await fetch(`https://.../post/${params.id}`)).json();
  });

  return <h1>{post.title}</h1>;
}
```

## How It Works

The `useDeno` hook will receive a sync or async **callback** (the first parameter), during build time (SSG) each callback passed to useDeno will be invoked, and the returned data will be cached. In the browser, the callbacks passed to useDeno will be ignored, and the cached data will be used instead.

## Refresh on Each Request

By default, the **callback** of `useDeno` is only invoked at **build time (SSR)**, but you can also call it in the browser by passing `true` as the second parameter:

```jsx
const post = useDeno(async () => {
  return await (await fetch(`https://.../post/${params.id}`)).json();
}, true);
```

even refresh `deps`:

```jsx
const post = useDeno(
  async () => {
    return await (await fetch(`https://.../post/${params.id}`)).json();
  },
  true,
  [params.id]
);
```

## Caveats

- When `true` is passed as the second param, you should _NOT_ use the **Deno runtime** since the **callback** will be invoked in the browser.

  ```jsx
  const version = useDeno(() => {
    return Deno.version;
  }, true);
  ```

  > ReferenceError: Deno is not defined.

- To fetch data asynchronously at **build time (SSG)**, the `renderToString` method may be invoked repeatedly until all the async data is ready.
