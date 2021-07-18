---
title: APIs
authors:
  - ije
  - razermoon
---

# APIs

Any file ends with `.ts`, `.js`, and `.mjs` inside the `api/` directory is mapped to `/api/*` and will be treated as an API endpoint. For an API to work, you need to export a **default** function with a `req` parameter (instance of `APIRequest`.

**For example**, the following API route `api/user.ts` sends a json response when you visit `/api/user`.

```typescript
import type { APIRequest } from 'https://deno.land/x/aleph/types.ts'

export default function handler({ resp }: APIRequest) {
  resp.json({ name: 'Aleph' })
}
```

## Dynamic API Routes

Aleph.js supports **dynamic API routes** as well. For example, the route `api/user/[name].ts` has the following code:

```typescript
import type { APIRequest } from 'https://deno.land/x/aleph/types.ts'

export default function handler({ resp, router }: APIRequest) {
  resp.json({ name: router.params.name })
}
```

This route will handle all `/api/user/:name` requests and reply with a json response that has the `name` param.
