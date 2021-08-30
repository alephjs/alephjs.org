---
title: APIs
authors:
  - ije
  - razermoon
---

# APIs

Any file ends with `.ts`, `.js`, and `.mjs` inside the `api/` directory is mapped to `/api/*` and will be treated as an API endpoint. For an API to work, you need to export a function as **default** or named to `handler`, that has the `context` object (instance of `APIContext`) as the first parameter.

**For example**, the following API route `api/user.ts` sends a json response when you visit `/api/user`.

```typescript
import type { APIHandler } from 'https://deno.land/x/aleph/types.d.ts'

export const handler: APIHandler = ({ response }) => {
  response.json({ name: 'Aleph' })
}
```

## Dynamic API Routes

Aleph.js supports **dynamic API routes** as well. For example, the route `api/user/[name].ts` has the following code:

```typescript
import type { APIHandler } from 'https://deno.land/x/aleph/types.d.ts'

export const handler: APIHandler = ({ response, router }) => {
  response.json({ name: router.params.name })
}
```

This route will handle all `/api/user/:name` requests and reply with a json response that has the `name` param.

## `APIContext` Object

The `APIContext` object aligns to the `Deno.RequestEvent` as the first argument of the API **handler** or **middleware**.

```ts
interface APIContext extends Deno.RequestEvent {
  data: Map<string, any> // The data handled by middlewares.
  response: APIResponse  // An interface that aligns to the parts of the `Response` with helper methods
  router: RouterURL      // The router for the api routing.
}

type APIHandler = {
  (context: APIContext): Promise<void> | void
}
type APIMiddleware = {
  (context: APIContext, next: () => void): Promise<void> | void
}
```

## Middlewares

In Aleph.js, a **middleware** for APIs is like `APIHandler` but with a `next` callback that calls next middleware or the final handler. You can have multiple middlewares that will be applied to all the API routes. 

To use middlewares add a `_middlewares.ts` in the `api/` directory and ensure export a middlewares array as default.

```ts
// api/_middlewares.ts

import type { APIMiddleware } from 'https://deno.land/x/aleph/types.d.ts'

const data:APIMiddleware = ({ response, data }, next) => {
  response.headers.set('server', 'Aleph.js')
  data.set('foo', 'bar')
  next()
}

const auth:APIMiddleware = ({ response, data, request }, next) => {
  const token = request.header.get('Authorization')
  if (!token) {
    response.status = 401
    response.body = 'Unauthorized'
    return
  }

  const currentUser = auth(token)
  data.set('currentUser', currentUser)
  next()

  // log message at last
  console.log(response.headers.get('server'))
  console.log(data.get('foo'))
}

export default [data, auth]
```

As optional, you can also add global middlewares in `aleph.config.ts` those are put in front of `api/_middlewares.ts` defines:

```ts
import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  server: {
    middlewares: [
      ({ response, data }, next) => {
        response.headers.set('server', 'Aleph.js')
        data.set('foo', 'bar')
        next()
      }
    ]
  }
}
```
