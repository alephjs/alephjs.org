import presetUno from "@unocss/preset-uno";
import { serve } from "aleph/react-server";
import MDXLoader from "aleph/react/mdx-loader";
import routes from "./routes/_export.ts";

serve({
  router: {
    glob: "./routes/**/*.{ts,tsx,mdx,md}",
    routes,
  },
  unocss: {
    presets: [presetUno()],
  },
  loaders: [new MDXLoader()],
  middlewares: [
    {
      name: "proxy-module",
      fetch(req: Request) {
        if (req.url.endsWith(".ts")) {
          return fetch(
            "https://deno.land/x/aleph" + (new URL(req.url)).pathname,
          );
        }
      },
    },
  ],
  ssr: true,
});
