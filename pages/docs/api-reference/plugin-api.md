---
title: Plugin API
authors:
  - ije
---

# Plugin API

In Aleph.js, a **Plugin** is an object with a `name` and a `setup` method. The `setup` method will be invoked once before the Aleph server runtime is initialized.

```ts
type Plugin = {
  name: string
  setup(aleph: Aleph): Promise<void> | void
}
```

## Writing First Aleph Plugin

Here's a simple plugin example that allows you to add a virtual dist file to the server:

```ts
// aleph.config.ts

import type { Config, Plugin } from 'https://deno.land/x/aleph/types.ts'

const helloPlugin: Plugin = {
  name: 'my-first-aleph-plugin',
  setup: aleph => {
    aleph.addDist('hello.js', (new TextEncoder).encode('console.log("Hello World!")'))
  }
}

export default <Config>{
  plugins: [ helloPlugin ]
}
```

then you can download the `hello.js` file from http://localhost:8080/_aleph/hello.js

## Get Runtime Variables

## Add Virtual Content

## Add Lifetime Hooks
