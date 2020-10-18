---
title: APIs
author: postUI Lab.
date: 2020-10-01
---

# APIs

Aleph.js provide a straightforward solution to build your **APIs**.

Any file(`.ts`,`.js`,`.mjs`) inside the folder `api/` is mapped to `/api/*` and will be treated as an API endpoint instead of a page.

**For example**, the following API route `api/user.ts` replies a json response to `api/user`:

```typescript
import type { APIRequest } from "https://deno.land/x/aleph/types.ts"

export default function handler(req: APIRequest) {
    req.status(200).json({ name: 'Carol' })
}
```

For an API route to work, you need to export as **default** a function, which then receives a `req` (instance of [`APIRequest`](/docs/api-reference/types_ts#APIRequest)) parameter.

## Dynamic API Routes

The API route also suports the **dynamic routes** just like [pages routing](/docs/basic-features/routing#dynamic-routes):

Let's create an API route called `api/user/[name].ts`:

```typescript
import type { APIRequest } from "https://deno.land/x/aleph/types.ts"

export default function handler(req: APIRequest) {
    req.status(200).json({ name: req.url.params.name })
}
```

This route will handle all `/api/user/:name` requests and replies a json response with the `name` param.

