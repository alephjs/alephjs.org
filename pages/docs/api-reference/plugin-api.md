---
title: Plugin API
authors:
  - ije
---

# Plugin API

In Aleph.js, a **Plugin** is an object with a `setup` method that can access the runtime data, call internal methods, and add lifetime event hooks.

```ts
type Plugin = {
  name: string
  setup(aleph: Aleph): Promise<void> | void
}
```

## Write First Aleph Plugin

Let's write a plugin for Aleph with below code:

```ts
import type { Plugin } from 'https://deno.land/x/aleph/types.ts'

export default <Plugin>{
  name: 'my-first-aleph-plugin',
  setup(aleph) {

  }
}

```
