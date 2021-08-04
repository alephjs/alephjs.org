---
title: Using Plugins
authors:
  - ije
---

# Using Plugins

Aleph.js can be extended by the built-in Plugin System. An Aleph Plugin is an object with a `setup` method. You can import them as ES Modules in `.js` or `.ts`.

To use a plugin, add it to the `plugins` array in the `aleph.config.ts`. **For example**, load markdown as pages:

```ts
// aleph.config.ts

import markdown from 'https://deno.land/x/aleph/plugins/markdown.ts'

export default {
  plugins: [
    markdown()
  ]
}
```

## Finding Plugins

- [Official Plugins](/docs/plugins/official-plugins)
- [Community Plugins](/docs/plugins/community-plugins)
