---
title: Asynchronous Import
authors:
  - ije
---

# Asynchronous Import

Sometimes you need to import a component **asynchronously(lazy)** because it is too heavy or you don't want it is rendered during the SSR.

Aleph.js provides a [`Import`](/docs/api-reference/mod.ts#import) component  that allows you import components asynchronously:

```jsx
import React from "https://esm.sh/react"
import { Import } from "https://deno.land/x/aleph/mod.ts"

export default function Page() {
    return (
        <div className="page">
            <Import
                from="../components/logo.tsx"
                name={"Logo"}
                props={{ size: 100 }}
                fallback={<Loading />}
            />
            <h1>About</h1>
        </div>
    )
}
```

- prop `from` specifies the import url (same with `import * from "..."`).
- prop `name` specifies the import member name (default is `default`).
- prop `props` will be passed to the imported component.
- prop `fallback` will be displayed when the component is *loading*.

## Import Styles
The `Import` component also allows you import styles to replace the ESM imports syntax.

```jsx
import React from "https://esm.sh/react"
import { Import } from "https://deno.land/x/aleph/mod.ts"

export default function Page() {
    return (
        <div className="page">
            <Import from="../style/about.css" />
            <h1>About</h1>
        </div>
    )
}
```
