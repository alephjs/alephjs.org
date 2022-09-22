---
title: Import From NPM
authors:
  - ije
  - razermoon
---

# Import From NPM

Aleph.js uses **ESM** imports syntax in Deno. To import modules from **NPM**,
you can use [esm.sh](https://esm.sh) CDN that is maintained by Aleph.js team.

```jsx
import useSWR from "https://esm.sh/swr";

export default function About() {
  const { data, error } = useSWR("/api/user", fetcher);

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return <div>hello {data.name}!</div>;
}
```

## Using NPM Specifier

The NPM Specifier is extremely new added in Deno 1.25

```js
import express from "npm:express@5";
```

These npm specifiers have the following format:

```
npm:<package-name>[@<version-requirement>][/<sub-path>]
```
