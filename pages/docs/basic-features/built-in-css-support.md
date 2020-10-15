---
title: Built-in CSS Support
author: postUI Lab.
date: 2020-10-01
---

# Built-in CSS Support

Aleph.js allows you to import **CSS**/**Less** as ESM syntax:

```javascript
import '../styles.css'
```

or import styles from network:

```javascript
import 'https://unpkg.com/tailwindcss@1.9.1/dist/tailwind.min.css'
```

## How It Works
Aleph.js will transform all `.css` and `.less` imports as js module with HMR support. For example:

```javascript
import '../styles.css'
```

will be transformed to:

```javascript
import '../styles.css.HASH.js'
```

that will be ignored in Deno and applied in browser.


## CSS Imports (@import)

Aleph.js don't handle `@import` in css module currently, you need to put the imported css files in the `public` directory and import them as a absolute URL.

## The `Import` Component

Import `.css` with ESM syntax will be suggested it is an error in **VS Code** with deno extension, you can **ignore** it if you can ensure the import URL is correct.

![Figure.1](/docs/figure-1.png)

To supplement this, Aleph.js provides a React Component called `Import` that allows you import module asynchronously:

```jsx
import React, { Fragment } from "https://esm.sh/react"
import { Import } from "https://deno.land/x/aleph/mod.ts"

export default function MarkdownPage() {
    return (
        <Fragment>
            <Import from="../style/about.css" />
            <h1>About</h1>
        </Fragment>
    )
}
```

## Adding a Global Stylesheet

To add a global stylesheet to your application, import the CSS file within `app.tsx`.
