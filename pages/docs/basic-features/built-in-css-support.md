---
title: Built-in CSS Support
author: postUI Lab.
date: 2020-10-01
---

# Built-in CSS Support

Aleph.js allows you to import a **CSS**(or **Less**) with ESM syntax:

```javascript
import "../style.css"
```

or import styles from network:

```javascript
import "https://unpkg.com/tailwindcss@1.9.1/dist/tailwind.min.css"
```

## How It Works
Aleph.js will transform all `.css` and `.less` imports to js modules. **For example**:

```javascript
import "../style.css"
```

will be transformed to:

```javascript
import "../style.css.{HASH}.js"
```

the `style.css.{HASH}.js` file looks like:

```javascript
import { applyCSS } from "https://deno.land/x/aleph/head.ts";
applyCSS("../style.css", `${CSS_CODE}`);

// Support HMR in development mode.
import.meta.hot.accept();
```

that will be ignored in Deno and applied in browser.


## CSS Imports (@import)

Aleph.js don't handle `@import` in css module currently, you need to put the imported css files in the `public` directory and import them as a _absolute_ URL.

## The `Import` Component

Import `.css` with ESM syntax will be suggested it is an error in **VS Code** with deno extension, you can **ignore** it if you can ensure the import URL is correct.

![Figure.1](/docs/figure-1.png)

To supplement this, Aleph.js provides a React Component called [`Import`](/docs/api-reference/mod.ts#import) that allows you import module asynchronously:

```jsx
import React from "https://esm.sh/react"
import { Import } from "https://deno.land/x/aleph/mod.ts"

export default function Page() {
    return (
        <>
            <Import from="../style/about.css" />
            <h1>About</h1>
        </>
    )
}
```

> To learn more about `Import` component, check the [Asynchronous Import documentation](/docs/advanced-features/asynchronous-import).

## Adding a Global Stylesheet

To add a global stylesheet to your application, import the CSS files within `app.tsx`.
