---
title: Official Plugins
authors:
  - ije
---

# Official Plugins

- [CSS Loader](https://deno.land/x/aleph/plugins/css.ts) - builtin CSS loader (don't use)
- [JSON Loader](https://deno.land/x/aleph/plugins/json.ts) - load JSON as module
  ```ts
  import json from 'https://deno.land/x/aleph/plugins/json.ts'

  export default <Config>{
    plugins: [
      json()
    ]
  }
  ```
- [Markdown Loader](https://deno.land/x/aleph/plugins/markdown.ts) - load markdown as page
  ```ts
  import markdown from 'https://deno.land/x/aleph/plugins/markdown.ts'

  export default <Config>{
    plugins: [
      markdown()
    ]
  }
  ```
