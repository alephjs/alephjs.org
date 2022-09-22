---
title: Import Maps
authors:
  - ije
  - razermoon
---

# Import Maps

To use [import maps](https://github.com/WICG/import-maps), create a `import_map.json` file in the root directory:

```json
{
  "imports": {
    "@/": "./",
    "react": "https://esm.sh/react@18.2.0",
    ...
  }
}
```

Add the `importMap` option in the `deno.json` file:

```json
{
  "importMap": "import_map.json"
}
```

then in your code:

```tsx
import { useState } from "react";
import Logo from "@/components/logo.tsx";

export default function App() {
  return <Logo />;
}
```
