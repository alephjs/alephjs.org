---
title: Custom `404` Page
author: postUI Lab.
date: 2020-10-20
---

# Custom `404` Page

By default, Aleph.js will render a static 404 page for the bad requests, you can override it by creating the file `404.tsx` in your app root directory:

```jsx
export default function E404() {
  return <h1>404 - Page Not Found</h1>
}
```

> check this site [404 page](/404).