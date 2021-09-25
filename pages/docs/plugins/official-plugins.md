---
title: Official Plugins
authors:
  - ije
---

# Official Plugins

- [CSS Loader](https://deno.land/x/aleph/plugins/css.ts) - builtin CSS loader (**don't use**)
  ```ts
  import 'https://esm.sh/tailwindcss/dist/tailwind.min.css'
  ```
- [JSON Loader](https://deno.land/x/aleph/plugins/json.ts) - load JSON as module
  ```ts
  import json from 'https://deno.land/x/aleph/plugins/json.ts'

  export default <Config>{
    plugins: [
      json()
    ]
  }
  ```
  **limit**: don't use it in APIs since Deno doesn't support JSON module yet.
- [Markdown Loader](https://deno.land/x/aleph/plugins/markdown.ts) - load markdown as page
  ```ts
  import markdown from 'https://deno.land/x/aleph/plugins/markdown.ts'

  export default <Config>{
    plugins: [
      markdown()
    ]
  }
  ```
  now, you can add `{dir}/{name}.md` in `pages/` dir as pages. You can link between pages with `[title](path)`. For code **highlight**, check [this example](https://github.com/alephjs/aleph.js/blob/master/examples/markdown-pages/aleph.config.ts#L7).
