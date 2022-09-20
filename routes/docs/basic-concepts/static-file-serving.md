---
title: Static File Serving
authors:
  - ije
  - razermoon
---

# Static File Serving

Aleph.js will serve any static files in the project directory. Files inside the project directory can then be referenced by your code by using the base URL (`/`).

For example, if you add an image `assets/logo.png`, the following code will access the image:

```jsx
export default function Logo() {
  return (
    <img src="/assets/logo.png" alt="Logo" />
  )
}
```

You can also serve other static assets such as:

- `favicon.ico`
- `manifest.json`
- `robots.txt`
- Google Site Verification, etc
