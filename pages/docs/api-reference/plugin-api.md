---
title: Plugin API
authors:
  - ije
---

# Plugin API

In Aleph.js, a **Plugin** is an object with a `setup` method that can access the aleph internal runtime.

```ts
type Plugin = {
  name: string
  setup(aleph: Aleph): Promise<void> | void
}
```
