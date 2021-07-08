---
title: JSX Magic
authors:
  - ije
---

# JSX Magic

Aleph.js uses [swc](https://swc.rs) to transpile your code to browser, with that we have the power to check your JSX code at compilation phase to implement some features with the native JSX tags.

## Custom Head Meta

```tsx
import React from 'https://esm.sh/react'

export default function Index({ Page, pageProps }) {
  return (
    <>
      <head>
        <title>Aleph.js</title>
        <meta name="description" content="The React Framework in Deno." />
        <meta name="keywords" content="alephjs,react,framework,deno" />
      </head>
      <h1>Aleph.js</h1>
    </>
  );
}
```

## Load Style from Files

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

## Inline Style

```tsx
import React from 'https://esm.sh/react'

const color = 'black'

export default function App() {
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

```jsx
import React from "https://esm.sh/react";

export default function Nav() {
  return (
    <>
      <a href="/">Home</a>
      <a rel="nav" href="/about">About</a>
    </>
  );
}
```

## Custom Scripts

Aleph.js allows you to add custom scripts to your app, and those _scripts_ will be appended to the **html body** at build time:

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
