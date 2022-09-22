---
title: Plugin API
authors:
  - ije
---

import Border from "components/Border.tsx"

# Middleware API

In Aleph.js, a **Middleware** is an object with a `fetch` method. The `fetch`
method will be invoked when a request is received by the server. You can end the
request by returning a `Response` object in the `fetch` method.

<Border color="#d63369">

```ts
type Middleware = {
  /** The middleware name. */
  readonly name?: string;
  /** The middleware fetch method. */
  fetch(req: Request, context: Context): Promise<Response> | Response | void;
};
```

</Border>

## Use Middlewares

To use a middleware, add it to the `middlewares` array in the server config.

```ts
// server.ts

import { serve } from "aleph/server";

serve({
  middlewares: [
    {
      name: "my-middleware",
      fetch(req) {
        if (req.url === "/my-middleware") {
          return new Response("Hello, World!");
        }
      },
    },
  ],
});
```

## Use `Context` Object

The `fetch` method of a middleware will receive a `Context` object as the second
parameter. You can use it to store data that can be accessed by other
middlewares and data fetchers.

<Border color="#d63369">

```ts
export interface Context extends Record<string, unknown> {
  /** The request connection info. */
  readonly connInfo?: ConnInfo;
  /** The params of dynamic routes. */
  readonly params: Record<string, string>;
  /** The headers for final response. */
  readonly headers: Headers;
  /** The cookies from client. */
  readonly cookies: Cookies;
  /** The HtmlRewriter to rewrite the html output. */
  readonly htmlRewriter: HTMLRewriter;
  /** Returns the `Session` object. */
  getSession<
    T extends Record<string, unknown> = Record<string, unknown>,
  >(): Promise<Session<T>>;
}
```

</Border>

## Examples

The example middlewares below are meant to give you an idea of the different
types of things you can do with the middleware API.

#### Google Analytics

This example middleware shows how to insert custom scripts to SSR output HTML.

```ts
import type { Middleware } from "aleph/server/types.ts";

export default <Middleware> {
  name: "google-analytics-plugin",
  fetch: (req, ctx) => {
    const id = Deno.env.get("GTAGID");
    if (id) {
      ctx.htmlRewriter.on("body", {
        element(el) {
          el.append(
            `<script src="https://www.googletagmanager.com/gtag/js?id=${
              encodeURIComponent(id)
            }"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", ${JSON.stringify(id)});
            </script>
            `,
            { html: true },
          );
        },
      });
    }
  },
};
```

#### Github Oauth

This example middleware shows how to use **session** to store login status.

```ts
import type { Middleware } from "aleph/server/types.ts";

export default <Middleware> {
  name: "github-oauth",
  async fetch(req, ctx) {
    const { pathname, searchParams } = new URL(req.url);
    const session = await ctx.getSession<{ user: GithubUser }>();

    if (pathname === "/logout") {
      return session.end("/");
    }

    if (!session.store?.user) {
      const clientId = Deno.env.get("GITHUB_OAUTH_CLIENT_ID");
      const clientSecret = Deno.env.get("GITHUB_OAUTH_CLIENT_SECRET");
      const code = searchParams.get("code");
      if (!code) {
        const loginUrl =
          `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=read:user+user:email`;
        return new Response("Not logged in", {
          status: 302,
          headers: { Location: loginUrl },
        });
      }

      const ret: { access_token: string; error?: string } = await fetch(
        "https://github.com/login/oauth/access_token",
        {
          method: "POST",
          body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            state: searchParams.get("state") || undefined,
            code,
          }),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        },
      ).then((res) => res.json());
      if (ret.error) {
        return new Response(ret.error, { status: 500 });
      }

      const user: GithubUser = await fetch("https://api.github.com/user", {
        headers: {
          "Authorization": `token ${ret.access_token}`,
          "Accept": "application/json",
        },
      }).then((res) => res.json());

      return session.update(
        { user },
        searchParams.get("redirect") ?? "/",
      );
    }

    // store the user info in context
    ctx.user = session.store.user;
  },
};
```
