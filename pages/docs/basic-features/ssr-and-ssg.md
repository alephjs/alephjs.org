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

You can disable **SSR** functionality in `aleph.config.js`:

```javascript
export default {
  "ssr": false, // SPA mode
  ...
}
```

or specify exclude paths:

```javascript
export default {
  "ssr": {
    "exclude": [
      "/admin/"
      "/dashboard/"
    ]
  },
  ...
}
```

## SSR Data Fetching

If you want to fetch data during **build time** (SSR), you can do so with the [`useDeno`](/docs/api-reference/mod.ts#useDeno) hook will get the **Deno** runtime in your component:

```jsx{5-7}
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

or fetch data **asynchronously**:

```jsx
import React from "https://esm.sh/react";
import { useDeno, useRouter } from "https://deno.land/x/aleph/mod.ts";

export default function Post() {
  const { params } = useRouter();
  const post = useDeno(
    async () => {
      return await (await fetch(`https://.../post/${params.id}`)).json();
    },
    true,
    [params]
  ); // true means to refetch data in the browser deps the `params`

  return <h1>{post.title}</h1>;
}
```

> To learn more `useDeno`, check the [useDeno Hook documentation](/docs/advanced-features/use-deno-hook).

## Static Site Generation (SSG)

Aleph.js allows you to export your app to a **static site**, which can be served as static html on any server or CDN.

```bash
$ aleph build
```

For **dynamic routes**, your can define the `staticPaths` in the `aleph.config.js`:

```javascript
export default async () => {
  const posts = await (await fetch("https://.../posts")).json()
  return {
    ssr: {
      exclude: [...],
      staticPaths: posts.map(({id}) => `/post/${id}`)
    }
  }
}
```

> See the [hello-world](https://alephjs-hello-world.vercel.app/) example on [Vercel](https://vercel.com).
