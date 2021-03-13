---
title: Custom `Loading` Page
authors:
  - ije
  - razermoon
---

# Custom `Loading` Page

In **SPA** mode, the **index** page will display as blank before your app is loaded. You can override the blank page by creating a file called `loading.tsx` in the root directory:

```jsx
import React from "https://esm.sh/react";

export default function Loading() {
  return <div>loading...</div>;
}
```

To enable the **SPA** mode, disable **SSR** in the `aleph.config.js`:

```javascript
export default {
  "ssr": false // SPA mode,
  ...
}
```
