---
title: Static File Serving
author: postUI Lab.
date: 2020-10-01
---

# Static File Serving

Aleph.js can serve static files in `public` in the app root directory. Files inside `public` can then be referenced by your code starting from the base URL (`/`).

For example, if you add an image to `public/logo.png`, the following code will access the image:

```jsx
import React from "https://esm.sh/react"

export default function Logo() {
  return <img src="/logo.png" alt="Logo" />
}
```

or other functional asset files:

- `favicon.ico`
- `manifest.json`
- `robots.txt`
- Google Site Verification
