---
title: Plugin API
authors:
  - ije
---

# Plugin API

In Aleph.js, a **Plugin** is an object with a `setup` method that can access the aleph internal data and methods.

```ts
type Plugin = {
  name: string
  setup(aleph: Aleph): Promise<void> | void
}
```

## Write First Aleph Plugin

Let's write a plugin for aleph

```ts
import type { Aleph } from "https://deno.land/x/aleph/types.ts"

export default {
  name: 'my-first-aleph-plugin',
  setup(aleph: Aleph) {

  }
}

```
