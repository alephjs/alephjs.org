---
title: Plugin API
authors:
  - ije
---

# Plugin API

In Aleph.js, a **Plugin** is an object with a `name` and a `setup` method. The
`setup` method will be invoked once before the Aleph server runtime is
initialized.

```ts
type Plugin = {
  name: string;
  setup(aleph: Aleph): Promise<void> | void;
}
```

## Writing First Aleph Plugin

Here's a simple plugin example that allows you to add a virtual dist file to the
server:

```ts
// aleph.config.ts

import type { Config, Plugin } from 'https://deno.land/x/aleph/types.d.ts'

const helloPlugin: Plugin = {
  name: 'hello-plugin',
  setup: aleph => {
    aleph.addDist(
      'hello.js',
      (new TextEncoder()).encode('console.log("Hello World!")'),
    )
  },
}

export default <Config> {
  plugins: [helloPlugin],
}
```

then you can download the `hello.js` file from
http://localhost:8080/_aleph/hello.js

## Using `Aleph` Object

The `Aleph` object is the server runtime reference of Aleph.js, that allows you
to hack into the server runtime lifecycle.

#### Properties

- **`mode`** specifies the build mode that should be **'development'** or
  **'production'**.
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
- **`workingDir`** shows the application absolute path that is a **read-only**
  property.
  ```ts
  {
    name: 'plugin-name',
    setup: async aleph => {
      const fp = path.join(aleph.workingDir, 'data.json')
      const data = JSON.parse(await Deno.readFile(fp))
    }
  }
  ```
- **`config`** is an object parsed from **'aleph.config.ts'**, you can update it to
  add more options, check [Config](/docs/api-reference/config) to get more
  usage.
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

- **`addDist`** adds a virtual dist file to the server, then access it from
  `/_aleph/$NAME`.
  ```ts
  {
    name: 'plugin-name',
    setup: async aleph => {
      aleph.addDist('hello.js', (new TextEncoder).encode('console.log("Hello World!")'))
    }
  }
  ```
- **`addModule`** adds a virtual module to the server, that can be a page or API.
  ```ts
  {
    name: 'plugin-name',
    setup: async aleph => {
      // adds a virtual module
      aleph.addModule('https://deno.land/x/aleph/hello.ts', 'export default { ... }')
      // adds a virtual module as API
      aleph.addModule('api/hello.ts', 'export const handler = (req) => { ... }')
      // adds a virtual module as Page
      aleph.addModule('pages/hello.tsx', 'export defaut function Hello() { ... }')
    }
  }
  ```
  > The available module type: `js`, `jsx`, `ts`, `tsx` and `css`.

#### Lifecycle Hooks

- **`onResolve`** customizes how Aleph does path resolution.
  ```ts
  {
    name: 'plugin-name',
    setup: async aleph => {
      aleph.onResolve(/.(md|markdown)$/, specifier => {
        return {
          // rewrite the import specifier to other
          specifier: specifier,
          // allows modules as page when it is in the `pages/` dir
          asPage: true,
          // allows modules to be updated at runtime during development
          acceptHMR: true,
          // don't download/compile remote modules, let browser handles it
          external: false,
          // defines any data that will be passed to the next `onResolve` hook
          data: {} as any
        }
      })
    }
  }
  ```
- **`onLoad`** allows you to load any content as a JS module, for example load
  _markdown_ as pages.
  ```ts
  {
    name: 'plugin-name',
    setup: async aleph => {
      // the `data` is passed from previous `onResolve` hook
      aleph.onLoad(/.(md|markdown)$/, async ({ specifier, data }) => {
        // loads and caches content as `Uint8Array` by the specifier
        const { content } = await aleph.loadModule(specifier)

        return {
          // specifies the output code type (Available type: `css` | `js` | `jsx` | `ts` | `tsx`)
          type: 'js',
          // defines transformed code in above type
          code: mdjs(content),
          // provides source map if available
          map: undefined,
        }
      })
    }
  }
  ```
- **`onTransform`** injects code to compiled modules, you need to return an object with modified `code` or `undefined` to keep raw code.
  ```ts
  {
    name: 'plugin-name',
    setup: async aleph => {
      // inject code to the `main.js`
      aleph.onTransform('main', ({ module, code, map }) => {
        return {
          code: code + '\nconsole.log(":)")',
          map: undefined, // provides source map if available
        }
      })
      // inject code to modules when the HMR is avaiable
      aleph.onTransform('hmr', ({ module, code, map }) => {
        return {
          code: code + '\nimport.meta.hot.accept(__REACT_REFRESH__)',
          map: undefined, // provides source map if available
        }
      })
      // inject code to page modules
      aleph.onTransform(/pages\//, ({ module, code, map }) => {
        return {
          code: code + `\nconsole.log("current module is ${module.specifier}")`,
          map: undefined, // provides source map if available
        }
      })
    }
  }
  ```
- **`onRender`** modifies the **SSR** output HTML and data.
  ```ts
  {
    name: 'plugin-name',
    setup: async aleph => {
      aleph.onRender(({path, html, data}) => {
        html.headElements.push(`<script src="/gtag.js?id=${GTAG}" async></script>`)
      })
    }
  }
  ```

## Examples

The example plugins below are meant to give you an idea of the different types of things you can do with the plugin API.

#### WASM loader

This example plugin is a loader allows you to import `.wasm` files into JS module.

```ts
import type { Plugin } from 'https://deno.land/x/aleph/types.d.ts'

export default <Plugin> {
  name: 'wasm-loader',
  setup: aleph => {
    aleph.onLoad(/\.wasm$/i, async ({ specifier }) => {
      const { content } = await aleph.fetchModule(specifier)
      return {
        code: [
          `const wasmBytes = new Uint8Array([${content.join(',')}])`,
          'const wasmModule = new WebAssembly.Module(wasmBytes)',
          'const { exports } = new WebAssembly.Instance(wasmModule)',
          'export default exports',
        ].join('\n'),
      }
    })
  },
}
```

Now you can import `.wasm` files as ES Module:

```ts
import wasm from '../lib/42.wasm'

const answer = wasm.main() // 42
```

#### Tailwind JIT for JSX

Aleph's compiler will record the static class names in JSX files, with that you can create css on demand for tailwind vary easily.

```ts
import { basename } from 'https://deno.land/std/path/mod.ts'
import type { Plugin } from 'https://deno.land/x/aleph/types.d.ts'

export default <Plugin> {
  name: 'tailwind-loader',
  setup: aleph => {
    aleph.onTransform(/\.(j|t)sx$/i, async ({ module, code }) => {
      const { specifier, deps, sourceHash, jsxStaticClassNames } = module
      if (jsxStaticClassNames?.length) {
        const url = specifier.replace(/\.(j|t)sx$/i, '') + '.tailwind.css'
        const css = tailwindCompile(jsxStaticClassNames)
        const { jsFile } = aleph.addMoudle(url, css)

        // support SSR
        deps.push({specifier: url})

        return {
          // import tailwind css
          code: `import "./${basename(jsFile)}#${sourceHash.slice(0,8)}";` + code
        }
      }
    })
  }
}
```

#### Google Analytics

This example plugin shows how to insert custom scripts to SSR output HTML.

```ts
import { basename } from 'https://deno.land/std/path/mod.ts'
import type { Plugin } from 'https://deno.land/x/aleph/types.d.ts'

export default <Plugin> {
  name: 'google-analytics-plugin',
  setup: aleph => {
    const id = Deno.env.get('GTAG')
    if (id && aleph.mode === 'production') {
      aleph.onRender(({ html }) => {
        html.scripts.push(
          {
            src: `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`,
            async: true
          },
          `window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(id)});`
        )
      })
    }
  }
}
```
