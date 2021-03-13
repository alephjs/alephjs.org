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

## `nomodule.js` Polyfill

(**WIP**, planning to implement in **v0.3**)

To support older browsers like _IE11_ in **production**, Aleph.js will create a polyfilled `nomodule.js` that uses [system.js](https://github.com/systemjs/systemjs) to import modules.
