---
title: Built-in CSS Support
authors:
  - ije
---

# Built-in CSS Support

Aleph.js allows you to import **CSS** files with ESM syntax:

```javascript
import '../style.css'
```

or external styles:

```javascript
import 'https://esm.sh/tailwindcss/dist/tailwind.min.css'
```

## How It Works

Aleph's built-in CSS Loader transpiles `.css` file as JS module that will be ignored in Deno runtime and be applied in browser.

```javascript
import '../style.css';
```

will become:

```javascript
import '../style.css.js'
```

the `style.css.js` file looks like:

```javascript
import { applyCSS } from 'https://deno.land/x/aleph/framework/core/style.ts'
applyCSS('/style/app.css', `${CSS_CODE}`)

// Support HMR in development mode.
import.meta.hot.accept()
```

## Using `link` Tag

**If you import CSS files using ESM syntax above, these CSS files will not be removed when page(component) unmounted.** To imporve this, Aleph's compiler checks all the `link` JSX elements with `rel="stylesheet"` then transpiles them as ES modules, and these CSS files will be **cleaned up** automatically when current page(component) unmounted (we call it [JSX Magic](/docs/advanced-features/jsx-magic)).

```tsx
import React from 'https://esm.sh/react'

export default function App() {
  return (
    <>
      <link rel="stylesheet" from="../style/app.css" />
      <h1>Hi :)</h1>
    </>
  )
}
```

## Inline CSS

Aleph.js supports _Inline CSS_, that means you can write CSS in `.tsx` files directly, this concept is called **CSS-in-JS**:

```tsx
import React from 'https://esm.sh/react'

export default function App() {
  const color = 'black'
  return (
    <>
      <style>{`
        h1 {
          font-size: 2em;
          color: ${color};
        }
      `}</style>
      <h1>Hi :)</h1>
    </>
  )
}
```

## CSS Modules

Any CSS file ending with `.module.css` is considered a [CSS modules](https://github.com/css-modules/css-modules) file:

```tsx
import React from 'https://esm.sh/react'
import styles from '../style/app.module.css'

export default function App() {
  return (
    <>
      <h1 className={styles.title}>Hi :)</h1>
    </>
  )
}
```

With Aleph's [JSX Magic](/docs/advanced-features/jsx-magic) you can use the scoped class names via `$CLASSNAME` magic trick, when the CSS Modules is loaded by the `link` tag that can give a **better experience**:

```tsx
import React from 'https://esm.sh/react'

export default function App() {
  return (
    <>
      <link rel="stylesheet" href="../style/app.module.css" />
      <h1 className="$title">Hi :)</h1>
    </>
  )
}
```

CSS modules behavior can be configured via the `css.modules` option.

## PostCSS

If the `aleph.config.ts` contains valid `css.postcss` config, it will be automatically applied to all imported CSS.

## Global Stylesheet

To add a global stylesheet to your application, import the CSS files in `app.tsx`.

## CSS Imports (@import)

Aleph.js doesn't currently support `@import` in CSS modules. You need to put the imported CSS files into the `public` directory and import them using _absolute_ URLs.

