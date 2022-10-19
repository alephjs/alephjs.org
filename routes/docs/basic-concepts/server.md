---
title: Server
authors:
  - ije
---

# Server

In Aleph.js, the server handles all incoming requests, everything is
just-in-time, includes static files, server-side rendering, data fetching, and
module transpiling.

```jsx
// server.ts

import { serve } from "aleph/server";

serve({
  port: 8080,
  router: {
    glob: "./routes/**/*.{ts,tsx}",
  },
  middlewares: [/* ... */],
  uncoss: {/* ... */},
  ssr: (ctx) => {
    return renderToString(<App />);
  },
});
```

> Normally you don't need to configure the server by using Aleph's template
> created by the `init` script. To learn more about server configuration, check
> out the <Link to="/docs/api-reference/server-config">Server Config API</Link>.

## `index.html`

Aleph.js uses `index.html` (in the project root directory) as the page html
output template, you can add your own tags to it, like `<meta>`, `<script>`,
`<link>`, etc.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="./assets/logo.svg">
  <link rel="stylesheet" href="./style/app.css">
</head>

<body>
  <div id="root" data-ssr-root></div>
  <script type="module" src="./main.ts"></script>
  <script>console.log("Hello world!")</script>
</body>

</html>
```

- The attribute `data-ssr-root` is to point out the root element for server-side
  rendering.
- Aleph.js will transpile modules for browsers automatically, you can safely add
  non-JS modules like `JSX` or `TS`.
- CSS files will be bundled using [lightningcss](https://lightningcss.dev/)
