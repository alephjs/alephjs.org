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

You can configure the `router` in `server.ts`.

```js
// server.ts

import { serve } from "aleph/server";

serve({
  router: {
    // use glob pattern to match routes
    glob: "./routes/**/*.{ts,tsx,mdx}",

    // or use dir prefix and extnames
    dir: "./routes",
    exts: ["ts", ".tsx", ".mdx"],
  },
});
```

### Index Routes

The router will automatically route files named `index` to the root of the
directory.

- `routes/index.tsx` → `/`
- `routes/blog/index.tsx` → `/blog`

### Dynamic Routes

To match a dynamic segment, you can use bracket syntax or start the segment with
**$**:

- `routes/blog/$slug.tsx` → `/blog/:slug` (`/blog/hello-world`)
- `routes/$username/settings.tsx` → `/:username/settings` (`/foo/settings`)
- `routes/post/$all+.tsx` → `/post/*` (`/post/2020/id/title`)

### Nested Routes

Aleph.js supports nested route structures like:

- `routes/blog.tsx`
- `routes/blog/$slug.tsx`

In the example, routes in `/blog/:slug` will be rendered under the
`routes/blog.tsx`, that is useful to create a **layout** for routes:

```jsx
// routes/blog.tsx

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
