---
title: Import Maps
authors:
  - ije
  - razermoon
---

# Import Maps

Aleph.js supports [import maps](https://github.com/WICG/import-maps). To use import maps, create a `import_map.json` file in the root directory:

```json
{
  "imports": {
    "@/": "./",
    "react": "https://esm.sh/react@18.2.0",
    ...
  }
}
```

then in your code:

```tsx
import React from "react";
import Logo from "@/components/logo.tsx";

export default function App() {
  return <Logo />;
}
```

