---
title: Asynchronous Import
authors:
  - ije
  - razermoon
---

# Asynchronous Import

Sometimes you might want to import a component **asynchronously (lazy)** if it is too large or if you don't want it to be rendered during **SSR**. Aleph.js provides an [`Import`](/docs/api-reference/mod.ts#import) component that allows you to import components asynchronously:

```jsx
import React from "https://esm.sh/react";
import { Import } from "https://deno.land/x/aleph/mod.ts";

export default function About() {
  return (
    <div>
      <Import
        from="../components/logo.tsx"
        name={"Logo"}
        props={{ size: 100 }}
        fallback={<Loading />}
      />
      <h1>About</h1>
    </div>
  );
}
```

- prop `from` specifies the import url (same with `import * from "..."`).
- prop `name` specifies the import member name (default is `default`).
- prop `props` will be passed to the imported component.
- prop `fallback` will be rendered when the component is _loading_.

## Import Styles

The `Import` component can also be used to import styles without the need for ESM syntax.

```jsx
import React from "https://esm.sh/react";
import { Import } from "https://deno.land/x/aleph/mod.ts";

export default function About() {
  return (
    <div>
      <Import from="../style/about.css" />
      <h1>About</h1>
    </div>
  );
}
```
