---
title: Dynamic Importing
authors:
  - ije
---

# Dynamic Importing

Aleph.js provides a [`dynamic`](/docs/api-reference/aleph/react/mod.ts#dynamic) HOC that allows you to import components asynchronously, in case you might want to import a component **asynchronously (lazy)** if it is too large or you don't want it to be rendered during **SSR**.

```tsx
import React from 'https://esm.sh/react'
import { dynamic } from 'https://deno.land/x/aleph/aleph/react/mod.ts'

const Logo = dynamic(() => import('../components/logo.tsx'))

export default function About() {
  return (
    <div>
      <Logo size={100}/>
      <h1>About</h1>
    </div>
  )
}
```

## Fallback

Aleph.js also provides a `Fallback` component to render a fallback UI during the asynchronous component module is loading.

```tsx
import React from 'https://esm.sh/react'
import { dynamic, Fallback } from 'https://deno.land/x/aleph/aleph/react/mod.ts'

const Logo = dynamic(() => import('../components/logo.tsx'))

export default function About() {
  return (
    <Fallback to={<p>loading...</p>}>
      <Logo size={100} />
    </Fallback>
  )
}
