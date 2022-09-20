---
title: Import From NPM
authors:
  - ije
  - razermoon
---

# Import From NPM

Aleph.js uses **ESM** imports syntax in Deno. To import modules from **NPM**, you can use [esm.sh](https://esm.sh) CDN that is maintained by Aleph.js team.

```jsx
import useSWR from 'https://esm.sh/swr'

export default function About() {
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) {
    return <div>failed to load</div>
  }
  if (!data) {
    return <div>loading...</div>
  }
  return <div>hello {data.name}!</div>
}
```

## Next

Deno is adding built-in npm support: https://deno.com/blog/changes#compatibility-with-node-and-npm