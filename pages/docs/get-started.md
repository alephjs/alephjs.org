---
title: Get Started
authors:
  - ije
---

# Get Started

Welcome to **Aleph.js**!

## Prerequisites

 - [Deno](https://deno.land/) **1.6.3**
 - [VS Code](https://code.visualstudio.com/) with [deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno) (recommended)

## Installation

```bash
# Install latest version
$ deno install --unstable -A -f -n aleph https://deno.land/x/aleph/cli.ts

# Install specific version
$ deno install --unstable -A -f -n aleph https://deno.land/x/aleph@v0.3.0-alpha.8/cli.ts
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

This starts the development server on http://localhost:8080.
<br>
Visit http://localhost:8080 to view your application.

Server features:

- Compile modules(`js,jsx,ts,tsx,md,css,less...`) and manage deps
- HMR With React Fast Refresh
- Serve APIs from `./api/`
- Server-side rendering of `./pages/`
- Serve Static files from `./public/` (mapped to `/`)

**Start the app in `production` mode**:

```bash
$ aleph start
```

The application will start at http://localhost:8080 by default.
<br>
The default port can be changed with `-p` (or `--port`).

**Build the app to a static site(SSG)**:

```bash
$ aleph build
```

This will export a static site in the `dist` directory, which can be run standalone on any server.

> See the [hello-world](https://alephjs-hello-world.vercel.app/) example on [Vercel](https://vercel.com).

**More usages**:

```bash
$ aleph -h
```
