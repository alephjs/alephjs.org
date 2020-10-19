---
title: Deployment
author: postUI Lab.
date: 2020-10-01
---

# Deployment
Aleph.js allows you export your app as a **static site**, which can run standalone on any server. Or just run it in **production** mode with Aleph.js server in Deno.

## Run Your App in `Production`
```bash
$ deno run -A https://deno.land/x/aleph@v0.2.6/cli.ts start ${APP_DIR} --port 80
```

## Deploy as Static Site on Vercel

- **Build Command**: `curl -fsSL https://deno.land/x/install/install.sh | sh && /vercel/.deno/bin/deno run -A https://deno.land/x/aleph@v0.2.6/cli.ts build`
- **Output Directory**: `dist` (**outputDir**, you can override it in `config.json`)
- **Environment**: `NO_COLOR` (recommended)
- **APIs**: not support currently

> See the [hello-world](https://alephjs-hello-world.vercel.app/) example on [Vercel](https://vercel.com).
