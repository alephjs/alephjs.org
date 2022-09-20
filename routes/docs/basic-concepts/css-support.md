---
title: CSS Support
authors:
  - ije
---

# CSS Support

Aleph.js use the `index.html` as page entry, that means you can add any **CSS** files with `link`

```html
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="./style/app.css">
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

## CSS Imports (`@import`)

Aleph.js uses [lightningcss](https://lightningcss.dev/) to bundle your CSS code that means you can use `@import` syntax safety.