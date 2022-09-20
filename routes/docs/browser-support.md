---
title: Browser Support
authors:
  - ije
  - razermoon
---

# Browser Support

Aleph.js requires a modern browser to support
[native ES module imports](https://caniuse.com/#feat=es6-module) and **dynamic
imports**:

- Chrome >= 61
- Edge >= 16
- Firefox >= 60
- Safari >= 11
- Opera >= 48

## Build Target

Aleph.js uses **esbuild** to bundle modules at optimization time for production.
You can set the `optimization.buildTarget` in the server config.

```js
import { serve } from "aleph/server";

serve({
  optimization: {
    buildTarget: "es2020",
  },
});
```
