---
title: Config
authors:
  - ije
---

# Config

For custom advanced behavior of Aleph.js, add an `aleph.config.ts` file in the root of your project directory.

#### Framework

Aleph.js is a fullstack framework in Deno. Currently we only support **React** as the frontend renderer.

```ts
import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  framework: 'react'
}
```

#### Base Path

`basePath` allows you to set a path prefix for the application.

```ts
import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  basePath: '/docs'
}
```

#### Build

`build` specifies the options for **Build** command.

- **target**: `string` specifies the build target in production mode (default is **'es2015'**, available targets: **'es2015'** - **'es2021'**, and **'esnext'**).
- **browsers**: `Record<string, number>` adds the target browsers for esbuild (supported browsers: **'chrome'** | **'edge'** | **'firefox'** | **'ios'** | **'safari'**).
- **outputDir**: `string` specifies the output directory for _build_ command (default is **'/dist'**).

```ts
import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  build: {
    target: 'es2015',
    browsers: { chrome: 90, safari: 12 },
    outputDir: '/dist',
  }
}
```

#### Configuring CSS

`css` specifies the css processing options.

- **cache**: `boolean` caches remote css to local if it equals `true`.
- **postcss**: `{ plugins: PostCSSPlugin[] }` specifies the postcss plugins. The `PostCSSPlugin` can be a name string that is imported from [esm.sh](https://esm.sh).
- **modules**: `CSSModulesOptions` specifies CSS modules behavior, the options are passed on to [postcss-modules](https://github.com/madyankin/postcss-modules).

```ts
import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  css: {
    cache: true,
    postcss: { plugins: [ 'autoprefixer' ] },
    modules: {
      scopeBehaviour: 'global', // can be 'global' or 'local'
    }
  }
}
```

#### SSR Options

`ssr` enables **SSR** feature for your project, default is enable for all pages.


```ts
import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  ssr: true
}
```

Mix **SSR** and **SPA**:

```ts
export default <Config>{
  ssr: {
    include: [/.html$/],
    exclude: [/^\/admin\//],
  }
}
```

Pure **SPA** mode:

```ts
export default <Config>{
  ssr: false
}
```

#### I18N

`i18n` enables multiple locales for the routing.

```ts
import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  }
}
```

> Check [I18n routing](/docs/basic-features/routing#i18n-routing) documentation for **I18N** support.

#### Server Options

`server` specifies the options for **Aleph Server**.
- **middlewares:** `APIMiddleware[]` a list of _Middleware_ for API requests.
- **headers**: `Record<string, string>` appends custom headers for server requests.
- **rewrites**: `Record<string, string>` specifies the server rewrite map.
- **compress**: `boolean` enables compression(gzip/brotli) for static files and SSR content (default is **true** for production mode).

```ts
import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  server: {
    middlewares: [
      ({ response, data }, next) => {
        response.headers.set('server', 'Aleph.js')
        data.set('foo', 'bar')
        next()
      }
    ],
    headers: {
      'Server': 'Custom'
    },
    rewrites: {
      '/p/[id]': '/blog/[id]'
    },
    compress: true
  }
}
```

#### Plugins

`plugins` provides some plugins to extend Aleph.js runtime.

```ts
import markdown from 'https://deno.land/x/aleph/plugins/markdown.ts'
import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  plugins: [
    markdown()
  ]
}
```

> To find Aleph plugins, check our  [Official Plugins](/docs/plugins/official-plugins) and [Community Plugins](/docs/plugins/community-plugins).
