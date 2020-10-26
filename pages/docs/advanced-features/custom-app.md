---
title: Custom `App`
authors:
  - ije
---

# Custom `App`

Aleph.js uses the `App` component to initialize pages. You can override it and control the page initialization. Which allows you to do somethings like:

- Add global layout elements
- Add global Styles
- Add global Head
- Custom error handling using `componentDidCatch`
- Inject **props** into pages

To override the default `App`, create the file `app.tsx` in your app root directory:

```jsx
import React from "https://esm.sh/react"

export default function App({ Page, pageProps }) {
  return <Page {...pageProps} />
}
```
