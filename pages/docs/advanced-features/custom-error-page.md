---
title: Custom Error Page
authors:
  - ije
---

# Custom Error Page

By default, Aleph.js will render a default error page for bad requests, you can override it by creating `404.tsx` and `500.tsx` files in the `pages` directory:

## 404

```tsx
// pages/404.tsx

export default function E404() {
  return <h1>404 - Page Not Found</h1>;
}
```

> check out our [404 page](/404).

## 500

```tsx
// pages/500.tsx

export default function E500({ error }: {error: Error}) {
  return <h1>500 - {error.mesage}</h1>;
}
```
