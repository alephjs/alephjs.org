---
title: Framework/React with MDX
authors:
  - ije
---

# React with MDX

Create a new [React](https://reactjs.org) app with [MDX](https://mdxjs.com)
support:

```bash
deno run -A -r https://alephjs.org/init.ts --template=react-mdx
```

## Extending MDX

You can add  [remark plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins) and [rehype plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins) for the MDX compiler in `server.ts`

```js
import { serve } from "aleph/server";
import remarkFrontmatter from "https://esm.sh/remark-frontmatter@4.0.1";
import rehypeHighlight from "https://esm.sh/rehype-highlight@5.0.2";

serve({
  loaders: [
    new MDXLoader({
      remarkPlugins: [remarkFrontmatter],
      rehypePlugins: [rehypeHighlight],
    }),
  ],
  router: {
    glob: "./routes/**/*.{tsx,mdx,md}",
  },
  ssr: true,
});
```

> See [Extending MDX](https://mdxjs.com/docs/extending-mdx/) for more details.
