---
title: Deployment
author: postUI Lab.
date: 2020-10-20
---

# Deployment
Aleph.js allows you export your app as a **static site**, which can run standalone on any server. Or just run it in **production** mode with Aleph.js server in Deno.

## Run Your App in `Production`
```bash
$ deno run -A https://deno.land/x/aleph@v0.2.10/cli.ts start ${APP_DIR} --port 80
```

## Deploy as Static Site on Vercel/Netlify

- **Build Command**: `curl -fsSL https://deno.land/x/install/install.sh | sh && /vercel/.deno/bin/deno run -A https://deno.land/x/aleph@v0.2.10/cli.ts build`
- **Output(Publish) Directory**: `dist` (**outputDir**, you can override it in `aleph.config.js`)
- **Environment Variables**: `NO_COLOR` (recommended)
- **APIs(Functions)**: not support currently

> See the [hello-world](https://alephjs-hello-world.vercel.app/) example on [Vercel](https://vercel.com).
