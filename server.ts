import presetUno from "@unocss/preset-uno";
import { serve } from "aleph/react-server";
import MDXLoader from "aleph/react/mdx-loader";
import routes from "./routes/_export.ts";
import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";

serve({
  router: {
    glob: "./routes/**/*.{ts,tsx,mdx,md}",
    routes,
  },
  unocss: {
    presets: [presetUno()],
  },
  loaders: [
    new MDXLoader({
      remarkPlugins: [remarkFrontmatter],
      rehypePlugins: [rehypeHighlight],
    }),
  ],
  middlewares: [
    {
      name: "proxy-init-script",
      fetch(req: Request) {
        if (req.url.endsWith("/init.ts")) {
          return fetch(
            "https://deno.land/x/aleph" + (new URL(req.url)).pathname,
          );
        }
      },
    },
  ],
  ssr: true,
});
