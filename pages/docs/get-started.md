---
title: Get Started
authors:
  - ije
  - razermoon
---

# Get Started

Welcome to use **Aleph.js**!

If you're new to Aleph.js you should check out the [About](/docs/) page.

## Installation

```bash
$ deno run -A https://deno.land/x/aleph/install.ts
```

or use [land](https://deno.land/x/land) without installation:

```bash
$ land aleph
```

## Usage

**Create a new app**:

```bash
$ aleph init
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
The default port can be changed with `-p` (or `--port`) flag.

**Build the app to a static site (SSG)**:

```bash
$ aleph build
```

This will export a static site to the `output` directory, which can be run standalone on any server.

> See the [hello-world](https://alephjs-hello-world.vercel.app/) example on [Vercel](https://vercel.com).

**More usages**:

```bash
$ aleph -h
```
