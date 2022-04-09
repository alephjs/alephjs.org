import { Router } from "aleph/react";
import { serve } from "aleph/server";
import { renderToString } from "react-dom/server";
import presetUno from "https://esm.sh/@unocss/preset-uno@0.30.3";

serve({
  config: {
    routeFiles: "./routes/**/*.tsx",
    atomicCSS: {
      presets: [presetUno()],
    },
  },
  ssr: (ctx) => renderToString(<Router ssrContext={ctx} />),
});
