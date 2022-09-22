---
title: Server Config
authors:
  - ije
---

import Border from "components/Border.tsx"

# Server Config

The server config is an object that contains the following properties:

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

<Border color="#d63369">

```ts
export interface ServerConfig extends ServeInit {
  /** The cert file for tls. */
  certFile?: string;
  /** The key file for tls. */
  keyFile?: string;
  /** The log level, default is 'info'. */
  logLevel?: LevelName;
  /** The error handler. */
  onError?: ErrorHandler;
  /** The base url of the server. */
  baseUrl?: string;
  /** The router options for the file-system based routing. */
  router?: RouterInit;
  /** The module loaders. */
  loaders?: ModuleLoader[];
  /** The server middlewares. */
  middlewares?: Middleware[];
  /** The options for session. */
  session?: SessionOptions;
  /** The options for SSR. */
  ssr?: SSR;
  /** The options for optimization. */
  optimization?: OptimizationOptions;
  /** The config for UnoCSS. */
  unocss?: UnoConfig;
}
```

</Border>

### TLS

_WIP_

### Router

_WIP_

### Server-side Rendering (SSR)

_WIP_

### Middlewares

_WIP_

### UnoCSS (Automatic CSS)

_WIP_

### Module Loader

_WIP_

### Setup Session

_WIP_

### Optimization Options

_WIP_

### Error Handler

_WIP_
