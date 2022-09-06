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
      fetch: (req, ctx) => {
        const url = new URL(req.url);
        if (url.pathname === "/gfm.css") {
          return new Response(CSS, { headers: { "content-type": "text/css" } });
        }
      },
    },
  ],
  ssr: true,
});
