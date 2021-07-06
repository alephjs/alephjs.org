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
    "react": "https://esm.sh/react@17.0.2",
    ...
  }
}
```

then in your code:

```tsx
import React from "react";
import Logo from "@/components/logo.tsx";

export default function Hi() {
  return <Logo />;
}
```

If you are using **VS Code**, please add below settings to `.vscode/settings.json`:

```json
{
  "deno.enable": true,
  "deno.unstable": true,
  "deno.importMap": "./import_map.json"
}
```
