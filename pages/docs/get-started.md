---
title: Get Started
author: postUI Lab.
date: 2020-10-01
---

# Get Started
Welcome to use **Aleph.js**!

## System Requirements
You will need [deno](https://deno.land/) 1.4+ and [vscode](https://code.visualstudio.com/) with deno [extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno).

## Installation
```bash
$ deno install -A -f -n aleph https://deno.land/x/aleph/cli.ts
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

- Compile modules(`js,jsx,ts,tsx,md,css,less...`) and download deps
- HMR With React Fast Refresh
- Serve APIs of `./api/`
- Server-side rendering of `./pages/`
- Serve Static files of `./public/` (mapped to `/`)

**Start the app in `production` mode**:
```bash
$ aleph start
```
The application will start at http://localhost:8080 by default.
<br>
The default port can be changed with `-p`.

**Build the app in production mode**:
```bash
$ aleph build
```
This will export a static site in the `output` directory, you can deploy it on any servers.
<br>
See the [hello-world](https://aleph-hello-world.netlify.com) example on [netlify](https://netlify.com).

**More usages**:
```bash
$ aleph -h
```
