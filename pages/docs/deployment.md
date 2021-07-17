---
title: Deployment
authors:
  - ije
  - razermoon
---

# Deployment

Aleph.js allows you to export your application to a **static site**, which can run standalone on any server:

```bash
$ aleph build
```

or run it in **production** mode with Aleph.js server and get API routes support in Deno:

```bash
$ deno run -A https://deno.land/x/aleph@${VERSION}/cli.ts start ${APP_DIR} --port 80
```

## Deploy on Deno

_In the plan, currently not supported._

## Deploy on Vercel

To deploy your app to [Vercel](https://vercel.com), you need to configure your _vercel project_ manually:

- **Build Command**: `curl -fsSL https://deno.land/x/install/install.sh | sh && /vercel/.deno/bin/deno run -A https://deno.land/x/aleph@${VERSION}/cli.ts build`
- **Output Directory**: `dist` (**outputDir**, you can override it in `aleph.config.js`)
- **API Routes (Functions)**: _currently not supported_

> See the [hello-world](https://alephjs-hello-world.vercel.app/) example on [Vercel](https://vercel.com).

## Deploy on Fleek

To deploy your app to [Fleek](https://fleek.co), you need to configure your _fleek project_ manually:

- **Build Command**: `deno run -A https://deno.land/x/aleph@${VERSION}/cli.ts build`
- **Docker Image Name**: `hayd/deno:latest`
- **Output Directory**: `dist` (**outputDir**, you can override it in `aleph.config.js`)
- **API Routes (Functions)**: _currently not supported_
