import presetUno from "@unocss/preset-uno.ts";
import { Router } from "aleph/react";
import { serve } from "aleph/server";
import { renderToReadableStream } from "react-dom/server";

serve({
  config: {
    routes: "./routes/**/*.tsx",
    unocss: {
      presets: [presetUno()],
    },
  },
  ssr: {
    suspense: true,
    render: (ctx) => renderToReadableStream(<Router ssrContext={ctx} />, ctx),
  },
});
