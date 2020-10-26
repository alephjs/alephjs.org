---
title: Custom `Scripts`
authors:
  - ije
---

# Custom `Scripts`

Aleph.js allows you to add custom scripts to the application, and those *scripts* will be appended in the **html body** when defined in the [`Scripts`](/docs/api-reference/mod.ts#Scripts) component:

```jsx
import React from "https://esm.sh/react"
import { Head, Scripts } from "https://deno.land/x/aleph/mod.ts"

export default function App({ Page, pageProps }) {
  return (
    <>
      <Head>
        <title>Aleph.js</title>
      </Head>
      <Scripts>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1234567890"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-1234567890');
        `}</script>
      </Scripts>
      <Page {...pageProps} />
    </>
  )
}
```
