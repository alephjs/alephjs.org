---
title: Framework/React
authors:
  - ije
---

# React

Create a new [React](https://reactjs.org) app:

```bash
deno run -A -r https://alephjs.org/init.ts --template=react
```

## Pages

In Aleph.js, a **page** is a
[React Component](https://reactjs.org/docs/components-and-props.html) exported
as **default** from a `.jsx` or `.tsx` file in the `routes` directory.

Each page is associated with a route based on its file name.

**Example**: If you create `routes/about.tsx` and it exports a React component
like below, it will be accessible at `/about`.

```jsx
export default function About() {
  return <h1>About Me</h1>;
}
```

> To learn more about routing, check out the Routing documentation.

## Use Data

## Use Router

## Linking Between Pages

Aleph.js provides a `Link` component to move between pages without refresh whole
page, similarly to a SPA (single-page application).

```jsx
import { Link } from "aleph/react";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog/hello-world">Hello World</Link>
    </nav>
  );
}
```

In the example above we have three links, each one maps a path (`to`) to the
specified page:

- `/` → `pages/index.tsx`
- `/about` → `pages/about.tsx`
- `/blog/hello-world` → `pages/blog/$slug.tsx`

## NavLink

Aleph.js also provides a `NavLink` component that will add active class/style
when the specific page is activated. You can add the active class via
`activeClassName` or add active style using `activeStyle`.

```jsx
import { NavLink } from "aleph/react";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink activeClassName="active" to="/about">About</NavLink>
      <NavLink activeStyle={{ color: "red" }} to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}
```
