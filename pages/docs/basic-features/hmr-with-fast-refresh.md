---
title: HMR with Fast Refresh
authors:
  - ije
---

# HMR with Fast Refresh

**HMR** (Hot Module Replacement) allows you update Aleph.js application without refreshing the page during **development**.  Any change instantly updates in the browser.

## How It Works

The built-in **HMR** module of Aleph.js will create a **WS** connection to the dev server on the client during **development**, and the server will listen for app file changes. Once the HMR client gets an update signal from the server, Aleph.js will re-import the updated module. For a CSS module, the old style will be removed after the new one is applied. For a React Component, the Fast Refresh will re-render the component view without losing component state.

Aleph.js supports full HMR out-of-the-box for the following served files:

- **JSX**/**TSX** in `pages` and `components` directory
- **Markdown** in `pages`  directory
- **CSS**/**Less**
- **Sass**, **CSS Modules**, etc (in the planning)

## What Is Fast Refresh

> It's a re-implementation of "hot reloading" with full support from React. It originally [shipped for React Native](https://twitter.com/dan_abramov/status/1169687758849400832), but most of the implementation is platform-independent. The plan is to use it across the board as a replacement for purely userland solutions (like react-hot-loader). [¹]

<video src="/docs/fast-refresh.mp4" loop autoplay muted></video>

[¹]: https://github.com/facebook/react/issues/16604#issuecomment-528663101

### Limits
- Fast Refresh only supports function component with hooks.
- Export as default function component must be named: `export default function ComponentName() { ... }`.
