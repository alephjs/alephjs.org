import presetUno from "@unocss/preset-uno.ts";
import { serve } from "aleph/react-server";
import routes from "./routes/_export.ts";

serve({
  router: {
    routes,
  },
  unocss: {
    presets: [presetUno()],
  },
  ssr: true,
});
