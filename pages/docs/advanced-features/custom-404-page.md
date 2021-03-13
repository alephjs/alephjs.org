---
title: Custom `404` Page
authors:
  - ije
  - razermoon
---

# Custom `404` Page

By default, Aleph.js will render a static 404 page for bad requests, you can override it by creating a `404.tsx` file in the root directory:

```jsx
export default function E404() {
  return <h1>404 - Page Not Found</h1>;
}
```

> check out our [404 page](/404).
