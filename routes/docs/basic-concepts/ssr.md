---
title: Server-side Rendering
authors:
  - ije
  - Serdar Sever
  - razermoon
---

# Server-side Rendering

By default, Aleph.js **pre-renders** every page. This means that Aleph.js generates HTML for each page in advance, instead of rendering it with client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML page only needs a small amount of JavaScript. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called _hydration_.)

You can enable **SSR** functionality in `server.ts`:

```ts
serve({
  ssr: true
})
```
