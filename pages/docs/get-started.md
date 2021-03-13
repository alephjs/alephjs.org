---
title: Get Started
authors:
  - ije
  - razermoon
---

# Get Started

Welcome to **Aleph.js**!

If you're new to Aleph.js you should check out the [about](/docs/) page.

## Prerequisites

- [Deno](https://deno.land/) **1.6.3**
- [VS Code](https://code.visualstudio.com/) with [deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno) (recommended)

## Installation

```bash
$ deno install --unstable -A -f -n aleph https://deno.land/x/aleph@v0.2.28/cli.ts
```

## Usage

**Create a new app**:

```bash
$ aleph init hello
$ cd hello
```

**Start the app in `development` mode**:

```bash
$ aleph dev
```

**Start the app in `production` mode**:

```bash
$ aleph start
```

The application will start at http://localhost:8080 by default.
<br>
The default port can be changed with `-p` (or `--port`).

**Build the app to a static site (SSG)**:

```bash
$ aleph build
```

This will export a static site to the `output` directory, which can be run standalone on any server.

> See the [hello-world](https://alephjs-hello-world.vercel.app/) example on [Vercel](https://vercel.com).

### Server features

- Compile modules (`js,jsx,ts,tsx,md,css,less...`) and manage deps
- HMR With React Fast Refresh
- Serve API routes from `./api/`
- Server-side rendering of `./pages/`
- Serve Static files from `./public/` (mapped to `/`)

**More usages**:

```bash
$ aleph -h
```
