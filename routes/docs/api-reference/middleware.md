---
title: Plugin API
authors:
  - ije
---

# Middleware API

In Aleph.js, a **Middleware** is an object with a `name` and a `fetch` method.
The `fetch` method will be invoked when a request is received by the server. And
the `fetch` method will end the request if returns a `Response` object.

```ts
type Middleware = {
  name: string;
  fetch(req: Request, context: Context): Promise<Response> | Response | void;
};
```

## Use Middlewares

Here's a simple plugin example that allows you to add a virtual dist file to the
server:

```ts
// server.ts

import foo from "./middleware/foo.ts";

serve({
  middlewares: [
    foo,
    {
      name: "my-middleware",
      fetch(req) {
        if (req.url === "/my-middleware") {
          return new Response("Hello, Middleware!");
        }
      },
    },
  ],
});
```

## Use `Context` Object

_WIP_

## Examples

The example plugins below are meant to give you an idea of the different types
of things you can do with the plugin API.

#### Google Analytics

This example plugin shows how to insert custom scripts to SSR output HTML using middleware.

```ts
// wIP
```
