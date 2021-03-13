---
title: Custom `Head`
authors:
  - ije
  - razermoon
---

# Custom `Head`

Aleph.js provides a [`Head`](/docs/api-reference/mod.ts#Head) component to customize the global app head in `app.tsx`:

```jsx
import React from "https://esm.sh/react";
import { Head } from "https://deno.land/x/aleph/mod.ts";

export default function App({ Page, pageProps }) {
  return (
    <>
      <Head>
        <title>Aleph.js</title>
        <meta name="description" content="The React Framework in Deno." />
        <meta name="keywords" content="alephjs,react,framework,deno" />
      </Head>
      <Page {...pageProps} />
    </>
  );
}
```

or customize the page head:

```jsx
import React from "https://esm.sh/react"
import { Head } from "https://deno.land/x/aleph/mod.ts"

export default function Page() {
  return (
    <div className="page">
      <Head>
        <title>Hello World</title>
        <meta name="description" content="Hello World." />
        <meta name="keywords" content="hello,world" />
      </Head>
      <h1>Hello World</h1>
    <div/>
  )
}
```

**multiple** [`Head`](/docs/api-reference/mod.ts#Head) elemenets will be combined intelligently:

```jsx
import React from "https://esm.sh/react"
import { Head } from "https://deno.land/x/aleph/mod.ts"

export default function Page() {
  return (
    <div className="page">
      <Head>
        <title>Hello World</title>
        <meta name="og:title" content="Hello" />
      </Head>
      <Head>
        <meta name="og:title" content="Hello World" />
      </Head>
      <h1>Hello World</h1>
    <div/>
  )
}
```

## `SEO` and `Viewport`

Two _shortcut_ components [`SEO`](/docs/api-reference/mod.ts#SEO) and [`Viewport`](/docs/api-reference/mod.ts#Viewport) are provided to customize **head** more easily:

```jsx
import React from "https://esm.sh/react";
import { Head, SEO, Viewport } from "https://deno.land/x/aleph/mod.ts";

export default function App({ Page, pageProps }) {
  return (
    <>
      <SEO
        title="Aleph.js"
        description="The React Framework in Deno."
        keywords="alephjs,react,framework,deno"
      />
      <Viewport
        width="device-width"
        initialScale={1.0}
        minimumScale={1.0}
        maximumScale={1.0}
      />
      <Page {...pageProps} />
    </>
  );
}
```
