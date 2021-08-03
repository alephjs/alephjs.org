---
title: Plugin API
authors:
  - ije
---

# Plugin API

In Aleph.js, a **Plugin** is an object with a `setup` method that will be invoked once before the Aleph server runtime is initialized.

```ts
type Plugin = {
  name: string
  setup(aleph: Aleph): Promise<void> | void
}
```

## Writing First Aleph Plugin

Here's a simple plugin example that allows you to add a virtual dist file to the server:

```ts
import type { Plugin } from 'https://deno.land/x/aleph/types.ts'

export default <Plugin>{
  name: 'my-first-aleph-plugin',
  setup(aleph) {
    aleph.addDist('/hello-world.txt', (new TextEncoder).encode('Hello World!'))
  }
}
```

then you can download the txt file in http://localhost:8080/hello-world.txt
