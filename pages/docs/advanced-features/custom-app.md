---
title: Custom `App`
authors:
  - ije
  - razermoon
---

# Custom `App`

Aleph.js uses the `App` component to initialize pages. You can override it to control the page initialization, which allows you to:

- Add global heam element(meta, link...)
- Add global styles
- Add global layout elements
- Add custom `ErrorBoundary`
- Inject **props** into pages

To override the default `App`, create an `app.tsx` file in the root directory:

```tsx
import React from 'https://esm.sh/react'

export default function App({ Page, pageProps }) {
  return (
    <>
      <head>
        <meta name="foo" content="bar" />
      </head>
      <Page {...pageProps} />
    </>
  )
}
```
