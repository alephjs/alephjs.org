---
title: API Routes
authors:
  - ije
  - razermoon
---

# API Routes

Any file (`.ts`,`.js`,`.mjs`) inside the `api/` directory is mapped to `/api/*` and will be treated as an API endpoint. For an API route to work, you need to export a **default** function, with a `req` parameter (instance of [`APIRequest`](/docs/api-reference/types.ts#APIRequest)).

**For example**, the following API route `api/user.ts` sends a json response when you visit `api/user`:

```typescript
import type { APIRequest } from "https://deno.land/x/aleph/types.ts";

export default function handler(req: APIRequest) {
  req.status(200).json({ name: "Carol" });
}
```

## Dynamic API Routes

Aleph.js also suports **dynamic routes** (see [pages routing](/docs/basic-features/routing#dynamic-routes)).

Let's create an API route called `api/user/[name].ts`:

```typescript
import type { APIRequest } from "https://deno.land/x/aleph/types.ts";

export default function handler(req: APIRequest) {
  req.status(200).json({ name: req.params.name });
}
```

This route will handle all `/api/user/:name` requests and reply with a json response that has a `name` param.
