---
title: Import Maps
author: postUI Lab.
date: 2020-10-01
---

# Import Maps

Aleph.js supports the [import maps](https://github.com/WICG/import-maps).

To use **import maps**, create `import_map.json` in your application root directory:
```json
{
  "imports": {
    "react": "https://esm.sh/react@16.13.1",
    ...
  }
}
```

then in your code:

```jsx
import React from "react"

export default function About() {
  return <h1>About</h1>
}
```

If you are using VS Code, please add below settings in `.vscode/settings.json`:
```json
{
    "deno.enable": true,
    "deno.unstable": true,
    "deno.import_map": "./import_map.json"
}
```