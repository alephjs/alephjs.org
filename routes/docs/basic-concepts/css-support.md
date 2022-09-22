---
title: CSS Support
authors:
  - ije
---

# CSS Support

Aleph.js uses the `index.html` as the page entry template, that means you can
add any **CSS** files with `link` tag:

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

Aleph.js uses [lightningcss](https://lightningcss.dev/) to bundle your CSS code
when you use `@import` to import other CSS files.

```css
@import url("./reset.css");

body {
  font-family: "Roboto", sans-serif;
}
```

## Draft syntax

Aleph.js supports [Nesting](https://www.w3.org/TR/css-nesting-1/) and
[Custom media queries](https://www.w3.org/TR/mediaqueries-5/#custom-mq) draft
spec

```css
@custom-media --modern (color), (hover);

.foo {
  background: yellow;

  &.bar {
    color: green;
  }
}

@media (--modern) and (width > 1024px) {
  .a {
    color: green;
  }
}
```
