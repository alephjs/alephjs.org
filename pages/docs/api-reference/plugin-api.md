---
title: Plugin API
authors:
  - ije
---

# Plugin API

There are two plugin types in Aleph.js:

- **Loader Plugin**: extends importable source media
- **Server Plugin**: enhances aleph runtime

In Aleph.js, a **Plugin** is an object with options and the `type` specifies the plugin type.:

```ts
type LoaderPlugin = {
  type: 'loader'
  name: string
  test: RegExp
  acceptHMR?: boolean
  allowPage?: boolean
  resolve?(specifier: string): ResolveResult
  load?(input: { specifier: string, data?: any }, aleph: Aleph): LoaderOutput | Promise<LoaderOutput>
}

type ServerPlugin = {
  type: 'server'
  name: string
  setup(aleph: Aleph): Promise<void> | void
}
``