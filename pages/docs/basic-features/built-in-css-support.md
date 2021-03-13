---
title: Built-in CSS Support
authors:
  - ije
  - razermoon
---

# Built-in CSS Support

Aleph.js allows you to import **CSS** (or **Less**) files using ESM syntax:

```javascript
import "../style.css";
```

or external styles:

```javascript
import "https://esm.sh/tailwindcss/dist/tailwind.min.css";
```

## How It Works

Aleph.js will transform all `.css` and `.less` imports to js modules. **For example**:

```javascript
import "../style.css";
```

will become:

```javascript
import "../style.css.{HASH}.js";
```

the `style.css.{HASH}.js` file looks like:

```javascript
import { applyCSS } from "https://deno.land/x/aleph/head.ts";
applyCSS("../style.css", `${CSS_CODE}`);

// Support HMR in development mode.
import.meta.hot.accept();
```

that will be ignored in Deno and applied in the browser.

## CSS Imports (@import)

Aleph.js doesn't currently support `@import` in CSS modules. You need to put the imported CSS files into the `public` directory and import them using _absolute_ URLs.

## The `Import` Component

Importing `.css` with ESM syntax will be flagged as a resolve error in **VS Code** when using the deno extension. You can **ignore** it if you are sure that the import URL is correct.

![Figure.1 CSS resolve error](/docs/figure-css-resolve-error.png)

To supplement this, Aleph.js provides a React Component called [`Import`](/docs/api-reference/mod.ts#import) that allows you to import modules asynchronously:

```jsx
import React from "https://esm.sh/react";
import { Import } from "https://deno.land/x/aleph/mod.ts";

export default function Page() {
  return (
    <>
      <Import from="../style/about.css" />
      <h1>About</h1>
    </>
  );
}
```

> To learn more about the `Import` component, check out the [Asynchronous Import documentation](/docs/advanced-features/asynchronous-import).

## Adding a Global Stylesheet

To add a global stylesheet to your application, import the CSS files in `app.tsx`.

## Sass

Aleph.js provides a `sass-loader` plugin that allows you to import `sass` files. To use the plugin, please update the `aleph.config.js`:

```javascript
import sass from 'https://deno.land/x/aleph/plugins/sass.ts'

export default {
    plugins: [sass, ...],
    ...
}
```

then in your code:

```jsx
import React from "https://esm.sh/react";
import "./style/about.sass";

export default function Page() {
  return <h1>About</h1>;
}
```
