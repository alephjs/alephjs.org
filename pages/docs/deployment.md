---
title: Deployment
authors:
  - ije
---

# Deployment
Aleph.js allows you to build the application to a **static site**, which can run standalone on any server:

```bash
$ aleph build
```

or run it in **production** mode with Aleph.js server with APIs support in Deno:

```bash
$ deno run -A https://deno.land/x/aleph@v0.2.19/cli.ts start ${APP_DIR} --port 80
```

## Deploy on Vercel

To deploy your app to [Vercel](https://vercel.com), you need to config your *vercel project* manually:

- **Build Command**: `curl -fsSL https://deno.land/x/install/install.sh | sh && /vercel/.deno/bin/deno run -A https://deno.land/x/aleph@v0.2.19/cli.ts build`
- **Output Directory**: `dist` (**outputDir**, you can override it in `aleph.config.js`)
- **Environment Variables**: `NO_COLOR` (recommended)
- **APIs(Functions)**: not supported currently

> See the [hello-world](https://alephjs-hello-world.vercel.app/) example on [Vercel](https://vercel.com).
