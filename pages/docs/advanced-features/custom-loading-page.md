---
title: Custom `Loading` Page
author: postUI Lab.
date: 2020-10-20
---

# Custom `Loading` Page

In **SPA** mode, the **index** HTML will display a blank page before your app loaded. You can override the blank page by creating a file called `loading.tsx` in your app root directory:

```jsx
import React from "https://esm.sh/react"

export default function Loading() {
    return <div>loading...</div>
}
```

To enable the **SPA** mode, disable **SSR** in the `aleph.config.js`:

```json
{
  "ssr": false // SPA mode
}
```