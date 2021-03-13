---
title: Custom `App`
authors:
  - ije
  - razermoon
---

# Custom `App`

Aleph.js uses the `App` component to initialize pages. You can override it to control the page initialization, which allows you to:

- Add global layout elements
- Add global Styles
- Add global Head
- Add Custom error handling using `componentDidCatch`
- Inject **props** into pages

To override the default `App`, create a `app.tsx` file in the root directory:

```jsx
import React from "https://esm.sh/react";

export default function App({ Page, pageProps }) {
  return <Page {...pageProps} />;
}
```
