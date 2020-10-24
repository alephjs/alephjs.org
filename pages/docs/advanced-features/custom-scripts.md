---
title: Custom `Scripts`
authors:
  - ije
---

# Custom `Scripts`

Aleph.js allows you to add custom scripts to the application, and those custom *scripts* should be put in the  [`Scripts`](/docs/api-reference/mod.ts#Scripts) component:

```jsx
import React from "https://esm.sh/react"
import { Head, Scripts } from "https://deno.land/x/aleph/mod.ts"

export default function App({ Page, pageProps }) {
  return (
    <>
      <Head>
        <title>Aleph.js</title>
      </Head>
      <Page {...pageProps} />
      <Scripts>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WDCRFYDRC98"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-WDCRFYDRC98');
        `}</script>
      </Scripts>
    </>
  )
}
```
