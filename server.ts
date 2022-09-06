import presetUno from "@unocss/preset-uno.ts";
import { serve } from "aleph/react-server";
import routes from "./routes/_export.ts";
import { CSS } from "./utils/gfm.ts";

serve({
  router: {
    routes,
  },
  unocss: {
    presets: [presetUno()],
  },
  middlewares: [
    {
      name: "gfm-css",
      fetch: (req) => {
        const url = new URL(req.url);
        if (url.pathname === "/gfm.css") {
          return new Response(
            CSS + "\n.markdown-body ul { list-style: disc; }",
            {
              headers: { "content-type": "text/css" },
            },
          );
        }
      },
    },
  ],
  ssr: true,
});
