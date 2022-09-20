---
title: Routing
authors:
  - ije
  - razermoon
---

# Routing

Aleph.js has a file-system based router. When a file (`.js`, `.jsx`, `.ts`,
`.tsx`, and `.mjs`) is added to the `routes` directory, it is automatically
available as a route.

You can configruate the `router` in `server.ts`.

```js
// server.ts

import { server } from "aleph/server";

serve({
  router: {
    // use glob
    glob: "./routes/**/*.{tsx,jsx,mdx}",

    // use dir prefix and exts
    dir: "./routes",
    exts: [".tsx", ".jsx", ".mdx"],
  },
});
```

### Index Routes

The router will automatically route files named `index` to the root of the
directory.

- `pages/index.tsx` → `/`
- `pages/blog/index.tsx` → `/blog`

### Dynamic Routes

To match a dynamic segment, you can use bracket syntax or start the segment with
**$**:

- `pages/blog/$slug.tsx` → `/blog/:slug` (`/blog/hello-world`)
- `pages/$username/settings.tsx` → `/:username/settings` (`/foo/settings`)
- `pages/post/$all+.tsx` → `/post/*` (`/post/2020/id/title`)

### Nested Routes

Aleph.js supports nested route structures like:

- `pages/blog.tsx`
- `pages/blog/$slug.tsx`

In the example, routes in `/blog/:slug` will be rendered under the
`pages/blog.tsx`, that is useful to create a **layout** for pages:

```jsx
import BlogHeader from "../components/blog-header.tsx";

export default function Blog({ children }) {
  return (
    <>
      <BlogHeader />
      <div className="blog-body">
        {children}
      </div>
    </>
  );
}
```
