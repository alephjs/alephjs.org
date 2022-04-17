---
title: Custom Server
authors:
  - ije
---

# Custom Server

By default, Aleph.js includes its own server with `aleph start`. A custom Aleph.js server allows you to start a server 100% programmatically in order to use custom server patterns. Most of the time, you will not need this – but it's available for complete customization.

Custom server with Deno native http server:

```ts
import { Aleph, Server } from 'https://deno.land/x/aleph/server/mod.ts'

const aleph = new Aleph()
const server = new Server(aleph)
const listener = Deno.listen({ port: 8080 })

for await (const conn of listener) {
  // In order to not be blocking, we need to handle each connection individually
  // in its own async function.
  (async () => {
    const httpConn = Deno.serveHttp(conn)
    for await (const e of httpConn) {
      server.handle(e)
    }
  })()
}
```

Custom server with [oak](https://deno.land/x/oak):

```ts
import { Aleph, oakify } from 'https://deno.land/x/aleph/server/mod.ts'
import { Application } from 'https://deno.land/x/oak/mod.ts'

const app = new Application()
const aleph = new Aleph()

app.use(oakify(aleph))

await app.listen({ port: 8080 })
```