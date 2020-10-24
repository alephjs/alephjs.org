---
title: Custom Head
authors:
  - ije
---

# Custom Head

Aleph.js allows you to custom the app **head**. A [`Head`](/docs/api-reference/mod.ts#Head) React Component provided which can be added in the `app.tsx` to defined the global head:

```jsx
import React from "https://esm.sh/react"
import { Head } from "https://deno.land/x/aleph/mod.ts"

export default function App({ Page, pageProps }) {
  return (
    <>
      <Head>
        <title>Aleph.js</title>
        <meta name="description" content="The React Framework in Deno." />
        <meta name="keywords" content="aleph,js,react,framework,deno" />
      </Head>
      <Page {...pageProps} />
    </>
  )
}
```

or use it in the page components:

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

and support **multiple** `Head` in your components:

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
Two *shortcut* components `SEO` and `Viewport` provided to defined **head** more easy:

```jsx
import React from "https://esm.sh/react"
import { Head } from "https://deno.land/x/aleph/mod.ts"

export default function App({ Page, pageProps }) {
  return (
    <>
      <Head>
        <Viewport
            width="device-width"
            initialScale={1.0}
            minimumScale={1.0}
            maximumScale={1.0}
        />
        <SEO
          title="Aleph.js"
          description="The React Framework in Deno."
          keywords="aleph,js,react,framework,deno"
        />
      </Head>
      <Page {...pageProps} />
    </>
  )
}
```