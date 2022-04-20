import presetUno from "@unocss/preset-uno.ts";
import { Router } from "aleph/react";
import { serve } from "aleph/server";
import { renderToString } from "react-dom/server";

serve({
  config: {
    routes: "./routes/**/*.tsx",
    atomicCSS: {
      presets: [presetUno()],
    },
  },
  ssr: (ctx) => renderToString(<Router ssrContext={ctx} />),
});
