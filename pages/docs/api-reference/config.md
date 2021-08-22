---
title: Config
authors:
  - ije
---

# Config

In order to customize Aleph.js, you can create an `aleph.config.ts` file in the project root.

Here's an Aleph config example:

```ts
import markdown from 'aleph/plugins/markdown.ts'
import type { Config } from 'aleph/types'

export default (): Config => ({
  plugins: [markdown()],
  css: {
    postcss: {
      plugins: ['postcss-nested', 'autoprefixer']
    }
  }
})
```

#### Framework

UI Framework to use. Default is `react`.

#### Base Path

`basePath` specifies the path prefix for the application (default is '/').

```ts
export default () => ({ basePath: '/blog' })
```

#### Build

#### Configuring CSS

With `css` you can tweak the CSS loader. For example, you can add custom plugins to PostCSS.

```ts
export default () => ({
  css: {
    postcss: {
      plugins: ['autoprefixer', 'precss']
    }
  }
})
```

Aleph also supports CSS modules out of the box. To enable them, set `css.modules` to `true`:

```ts
export default () => ({ css: { modules: true } })
```

#### SSR Options

#### I18N

#### Server

#### Environment Variables

#### Plugins
