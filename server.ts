import presetUno from "@unocss/preset-uno.ts";
import { serve } from "aleph/server";
import ssr from "aleph/react-ssr";
import routes from "./routes/_export.ts";

serve({
  routeGlob: "./routes/**/*.tsx",
  routes,
  unocss: {
    presets: [presetUno()],
  },
  ssr,
});
