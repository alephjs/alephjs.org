---
title: JSX Magic
authors:
  - ije
---

# JSX Magic

Aleph.js uses [swc](https://swc.rs) to transpile your code to browser, with that we have the power to check your JSX code at compilation phase to implement some features with the native JSX elements.

## Custom Head Meta

You can add page meta tags under the native `head` element, and these tags will be wrote to the page html with SSR enabled. This is useful the [Search Engine Optimization](https://en.wikipedia.org/wiki/Search_engine_optimization) (**SEO**).

```tsx
import React from 'https://esm.sh/react'

export default function Index({ Page, pageProps }) {
  return (
    <>
      <head>
        <title>Aleph.js</title>
        <meta name="description" content="The React Framework in Deno." />
        <meta name="keywords" content="alephjs,react,framework,deno" />
        <meta name="og:image" content="/twitter-image.png" />
      </head>
      <h1>Aleph.js</h1>
    </>
  );
}
```

## Importing Style from Files

Import CSS files via `link` tag, and clean up them automatically when page(component) unactivated, or get better **CSS Modules** experience.

```tsx
import React from 'https://esm.sh/react'

export default function App() {
  return (
    <>
      <link rel="stylesheet" href="../style/app.css" />
      <link rel="stylesheet" href="../style/page.module.css" />
      <h1 className="$title">Hi :)</h1>
    </>
  )
}
```

## Inline Style

Aleph.js provides a built-in `CSS-in-JS` solution **out-of-the-box** using the native JSX `style` element.

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

## Linking Between Pages

Linking between pages in Aleph.js is very easy, just use the `a` tag with page path.

You can set the `rel` to get some extra feature:

- **nav**: play as `NavLink`
- **preload**: preload page's component code and SSR data

```jsx
import React from "https://esm.sh/react";

export default function Nav() {
  return (
    <>
      <a href="/">Home</a>
      <a rel="nav" href="/about">About</a>
      <a rel="preload" href="/contact">Contact</a>
    </>
  );
}
```

## Custom Scripts

Aleph.js allows you to add custom scripts to your app, and these _scripts_ will be appended to the **html body** at build time.

```tsx
import React from 'https://esm.sh/react'

export default function App({ Page, pageProps }) {
  return (
    <>
      <Page {...pageProps} />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1234567890"
      ></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-1234567890');
      `}</script>
    </>
  )
}
```
