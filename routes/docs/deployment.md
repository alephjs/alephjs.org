---
title: Deployment
authors:
  - ije
  - razermoon
---

# Deployment on your own host with Deno CLI

You can run your app in production mode by `deno` CLI.

```bash
deno run --allow-network --allow-env --allow-read --allow-write server.ts
```

## Deploy on Deno Deploy

To deploy your app to [Deno Deploy](https://deno.com/deploy), please push your app to [Github](https://github.com) and create a new project on [Deno Deploy](https://dash.deno.com/new).

Then link to the Repo and set the entrypoint to `server.ts`

> See the [hello-world](https://aleph-hello.deno.dev/) example on [Deno Deploy](https://deno.com/deploy).
