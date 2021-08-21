---
title: Framework API
authors:
  - ije
---

# Framework API

- **`dynamic`** allows you import a component asynchronously with `import()` syntax. This component will be ingored at the SSR time.
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
- **`Fallback`** is a component to provide a fallback UI during the asynchronous component is loading. The fallback UI will be rendered at the SSR time.
  ```tsx
  import React from 'https://esm.sh/react'
  import { dynamic, Fallback } from 'https://deno.land/x/aleph/framework/react/mod.ts'

  const Logo = dynamic(() => import('../components/logo.tsx'))

  export default function About() {
    return (
      <Fallback to={<p>loading...</p>}>
        <Logo size={100} />
      </Fallback>
    )
  }
  ```
- **`useDeno`**
- **`useRouter`**
- **`withRouter`**
