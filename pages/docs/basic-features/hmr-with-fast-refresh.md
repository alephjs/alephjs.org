---
title: HMR with Fast Refresh
authors:
  - ije
  - razermoon
---

# HMR with Fast Refresh

Hot Module Replacement (or HMR) allows modules to be updated at runtime without the need for a full refresh during **development**. To support this, Aleph.js's built-in **HMR** module creates a **WebSocket** connection to the dev server on the client, and the server listens for file changes. Once the HMR client gets an update signal from the server, Aleph.js will re-import the updated module.

For a CSS module, the old style will be removed after the new one is applied. For a React Component, Fast Refresh will re-render the component view without losing component state.

Aleph.js supports full HMR out-of-the-box for the following served files:

- **JSX**/**TSX** in `pages` and `components` directory
- Files loaded by loader plugin with `acceptHMR` enabled

## What Is Fast Refresh

> It's a reimplementation of "hot reloading" with full support from React. It's originally [shipped for React Native](https://twitter.com/dan_abramov/status/1169687758849400832), but most of the implementation is platform-independent. The plan is to use it across the board, as a replacement for purely userland solutions (like react-hot-loader). [¹]

<video src="/docs/fast-refresh.mp4" loop autoplay muted></video>

[¹]: https://github.com/facebook/react/issues/16604#issuecomment-528663101

### Limits

- Fast Refresh only supports functional components with hooks.
- Functional components using default exports must be named: `export default function ComponentName() { ... }`.
