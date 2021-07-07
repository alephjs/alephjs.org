---
title: JSX Magic
authors:
  - ije
---

# JSX Magic

Aleph.js provides a [`Head`](/docs/api-reference/mod.ts#Head) component to customize the global app head in `app.tsx`:

```jsx
import React from 'https://esm.sh/react'

export default function App({ Page, pageProps }) {
  return (
    <>
      <head>
        <title>Aleph.js</title>
        <meta name="description" content="The React Framework in Deno." />
        <meta name="keywords" content="alephjs,react,framework,deno" />
      </head>
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

## Custom Script

Aleph.js allows you to add custom scripts to the application, and those _scripts_ will be appended to the **html body** at build time:

```jsx
// app.tsx

import React from 'https://esm.sh/react'

export default function App({ Page, pageProps }) {
  return (
    <>
      <Page {...pageProps} />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1234567890"
      ></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-1234567890');
      `}</script>
    </>
  )
}
```
