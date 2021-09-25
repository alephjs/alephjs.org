---
title: Framework API
authors:
  - ije
---

# Framework API

### `dynamic` <samp>hoc</samp>
`dynamic` allows you import a component asynchronously with `import(url)` syntax, and this component will be ignored at the SSR time.

```tsx
import React from 'https://esm.sh/react'
import { dynamic } from 'https://deno.land/x/aleph/framework/react/mod.ts'

const Logo = dynamic(() => import('../components/logo.tsx'))

export default function About() {
  return (
    <div>
      <Logo size={100} />
      <h1>About Me</h1>
    </div>
  )
}
```

- **@param** `load: () => Promise<{ default: ComponentType }>`
- **@return** `ComponentType`

### `Fallback` <samp>component</samp>

`Fallback`is a component to provide a fallback UI during the asynchronous component is loading. The fallback UI will be rendered at the SSR time.

```tsx
import React from 'https://esm.sh/react'
import { dynamic, Fallback } from 'https://deno.land/x/aleph/framework/react/mod.ts'

const Logo = dynamic(() => import('../components/logo.tsx'))

export default function About() {
  return (
    <div>
      <Fallback to={<p>loading...</p>}>
        <Logo size={100} />
      </Fallback>
      <h1>About Me</h1>
    </div>
  )
}
```

- **@props** `{ to: ReactNode, children: ReactNode }`

### `useDeno` <samp>hook</samp>

`useDeno` receives a callback as first parameter that will be invoked at build time (SSR), then cache the callback result. In the browser, the callback will be ignored, and the cached result will be used instead.

```tsx
import React from 'https://esm.sh/react'
import { useDeno } from 'https://deno.land/x/aleph/framework/react/mod.ts'

export default function Page() {
  const version = useDeno(() => {
    return Deno.version
  })

  return (
    <p>Powered by Deno v{version.deno}</p>
  )
}
```

- **@param** `callback: () => T`
- **@param** `options?: { revalidate: number }`
- **@return** `T`

### `useRouter` <samp>hook</samp>

`useRouter` is a hook to use the `RouterURL` object.

```jsx
import React from 'https://esm.sh/react'
import { useRouter } from 'https://deno.land/x/aleph/framework/react/mod.ts'

export default function Component({ href, children }) {
  const {
    basePath,      // string
    locale,        // string
    defaultLocale, // string
    locales,       // string[]
    pathname,      // string
    routePath,     // string
    params,        // object
    query,         // URLSearchParams
  } = useRouter()

  return <p>current pathname: {pathname}</p>
}
```

- **@return** `RouterURL`

### `withRouter` <samp>hoc</samp>

`withRouter` is a hoc to inject the `RouterURL` object to the component props.

```jsx
import React, { Component } from 'https://esm.sh/react'
import { useRouter } from 'https://deno.land/x/aleph/framework/react/mod.ts'

class MyComponent extends Component  {
  render() {
    return <p>current pathname: {this.props.router.pathname}</p>
  }
}

export default useRouter(MyComponent)
```

- **@param** `component: ComponentType`
- **@return** `ComponentType`

### `redirect` <samp>function</samp>

`redirect` is a _low-level_ api to move between pages without refresh whole page, similarly to a SPA (single-page application). The second parameter `replace` is optional that makes `redirect` has same behavior with `history.replace`.

```jsx
import React, { FC, useCallback } from 'https://esm.sh/react'
import { redirect } from 'https://deno.land/x/aleph/framework/core/mod.ts'

export const Link: FC<{to: string, replace?: boolean}> = ({ to, replace, children }) => {
  const onClick = useCallback(e => {
    e.preventDefault()
    redirect(to, replace)
  }, [to, replace])

  return (
    <span onClick={onClick}>
      {children}
    </span>
  )
}
```

- **@param** `path: string`
- **@param** `replace?: boolean`
