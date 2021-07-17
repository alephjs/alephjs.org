---
title: Custom Server
authors:
  - ije
---

# Custom Server

By default, Aleph.js includes its own server with `aleph start`. A custom Aleph.js server allows you to start a server 100% programmatically in order to use custom server patterns. Most of the time, you will not need this – but it's available for complete customization.

Custom server with Deno's std http server:

```ts
import { serve } from 'https://deno.land/std/http/server.ts'
import { Application, Server } from 'https://deno.land/x/aleph/server/mod.ts'

const app = new Appliaction()
const server = new Server(app)
const s = serve({ port: 8080 })

for await (const r of s) {
  server.handle(r.req, resp => )
}
```

Custom server with [oak](https://deno.land/x/oak):

```ts
import { Application } from 'https://deno.land/x/aleph/server/mod.ts'
import { Application as Oak } from 'https://deno.land/x/oak/mod.ts'

const oak = new Oak()
const app = new Appliaction()

oak.use(alephOak(app))

await oak.listen({ port: 8080 })
```