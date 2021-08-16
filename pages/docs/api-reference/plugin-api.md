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

## Using `Aleph` Object

The `Aleph` object is the runtime instance for Aleph.js's server

#### Runtime Variables

- `mode` sepecifies Aleph build mode in **'development'** or **'production'**.
  ```ts
  setup: aleph => {
    if (aleph.mode === 'development') {
      aleph.onSSR((path, html) => {
        return html.replace('</body>', `<script>console.log('Hi :)')</script></body>`)
      })
    }
  }
  ```
- `workingDir`: The Aleph application directory in fullpath.
  ```ts
  setup: async aleph => {
    const fp = path.join(aleph.workingDir, 'data.json')
    const data = await Deno.readFile(fp)
  }
  ```
- `config`: Parsed configuration from 'aleph.config.ts', check [Config](/docs/api-reference/config) to get more usage.
  ```ts
  setup: async aleph => {
    aleph.config.env['foo'] = await getDynamicEnv('foo')
    aleph.config.server.headers['X-Foo'] = 'bar'
  }
  ```

#### Virtual Content

- `addDist`:
- `addModule`:

#### Lifetime Hooks

- `onResolve`:
- `onLoad`:
- `onTransform`:
- `onSSR`:
