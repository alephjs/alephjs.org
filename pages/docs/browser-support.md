---
title: Browser Support
authors:
  - ije
  - razermoon
---

# Browser Support

Aleph.js requires a modern browser to support [native ES module imports](https://caniuse.com/#feat=es6-module) and **dynamic imports** during **development**:

- Chrome >= 61
- Edge >= 16
- Firefox >= 60
- Safari >= 11
- Opera >= 48

## Build Target, Browserslist, and Polyfills

Aleph.js uses **esbuild** to bundle modules at build time for production. You can set the `build.target` and `build.browsers` in `aleph.config.ts`, a **polyfills** file will be created automatically that is based on the build target.

```ts
export default {
  build: {
    target: 'es2015', // available targets: es2015-es2021, esnext
    browsers: {
      chrome: 70,
      safari: 12
    }
  }
}
```