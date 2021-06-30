---
title: Built-in CSS Support
authors:
  - ije
  - razermoon
---

# Built-in CSS Loader

Aleph.js includes a builtin css loader that allows you to import `.css` files with `link` tag:

```tsx
import React from "https://esm.sh/react";

export default function App() {
  return (
    <>
      <link rel="stylesheet" href="../style/app.css" />
      <h1>Hi :)</h1>
    </>
  );
}
```

## How It Works

Aleph.js will look for all the `link` tags with `rel="stylesheet"`, then load them using the builtin css loader. **For example**:

```javascript
<link rel="stylesheet" href="../style/app.css" />
```

will become:

```javascript
import "../style/app.css.js";
```

the `style.css.js` file looks like:

```javascript
import { applyCSS } from "https://deno.land/x/aleph/framework/core/style.ts";
applyCSS("/style/app.css", `${CSS_CODE}`);

// Support HMR in development mode.
import.meta.hot.accept();
```

## CSS Modules

Any CSS file ending with `.module.css` is considered a [CSS modules](https://github.com/css-modules/css-modules) file. With Aleph's [JSX magic](/docs/advanced-features/jsx-magic) you can use the scoped class names like `$title`:

```css
.bold {
  font-weight: bold;
}
.title {
  font-size: 30px;
}
.intro {
  font-size: 14px;
}
```

```tsx
import React from "https://esm.sh/react";

export default function App() {
  return (
    <>
      <link rel="stylesheet"  href="../style/app.module.css" />
      <h1 className="$title $bold">Hi :)</h1>
      <p className="$intro">Welcome!</p>
    </>
  );
}
```

CSS modules behavior can be configured via the `css.modules` option.

## PostCSS

If the `aleph.config.ts` contains valid `css.postcss` config, it will be automatically applied to all imported CSS.

## Global Stylesheet

To add a global stylesheet to your application, import the CSS files in `app.tsx`.


## CSS Imports (@import)

Aleph.js doesn't currently support `@import` in CSS modules. You need to put the imported CSS files into the `public` directory and import them using _absolute_ URLs.

