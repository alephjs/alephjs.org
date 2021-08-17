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
  name: 'hello-plugin',
  setup: aleph => {
    aleph.addDist('hello.js', (new TextEncoder).encode('console.log("Hello World!")'))
  }
}

export default <Config>{
  plugins: [ helloPlugin ]
}
```

then you can download the `hello.js` file from http://localhost:8080/_aleph/hello.js

## Using `Aleph` Object

The `Aleph` object is the runtime instance of Aleph.js's server

#### Properties

- `mode` specifies the build mode that should be **'development'** or **'production'**.
  ```ts
  {
    name: 'plugin-name',
    setup: aleph => {
      if (aleph.mode === 'development') {
        console.log('development mode')
      }
    }
  }
  ```
- `workingDir` shows the application absolute path.
  ```ts
  {
    name: 'plugin-name',
    setup: async aleph => {
      const fp = path.join(aleph.workingDir, 'data.json')
      const data = JSON.parse(await Deno.readFile(fp))
    }
  }
  ```
- `config` is an object parsed from **'aleph.config.ts'**, you can change it, check [Config](/docs/api-reference/config) to get more usage.
  ```ts
  {
    name: 'plugin-name',
    setup: async aleph => {
      aleph.config.env['foo'] = await getEnv('foo')
      aleph.config.server.headers['X-Foo'] = 'bar'
    }
  }
  ```

#### Methods

- `addDist` adds a virtual dist file to the server.
  ```ts
  {
    name: 'plugin-name',
    setup: async aleph => {
      aleph.addDist('hello.js', (new TextEncoder).encode('console.log("Hello World!")'))
    }
  }
  ```
- `addModule` adds a virtual module to the server. That can be a page or API.
  ```ts
  {
    name: 'plugin-name',
    setup: async aleph => {
      // adds a virtual module
      aleph.addModule('https://deno.land/x/aleph/hello.ts', 'export default { ... }')
      // adds a virtual API
      aleph.addModule('/api/hello.ts', 'export const handler = () => { ... }')
      // adds a virtual page
      aleph.addModule('/pages/hello.tsx', 'export defaut function() { ... }')
    }
  }
  ```

#### Lifetime Hooks

- `onResolve`:
- `onLoad`:
- `onTransform`:
- `onSSR`:
