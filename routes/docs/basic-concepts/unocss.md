---
title: Unocss
authors:
  - ije
---

# Unocss

Aleph.js uses [Unocss](https://github.com/unocss/unocss/) as the Atomic CSS
engine. To enable unocss, add `presets` to the `unocss` option in `server.ts`:

```js
import presetUno from "https://esm.sh/@unocss/preset-uno";
import { serve } from "aleph/server";

serve({
  unocss: {
    presets: [presetUno()],
  },
});
```

Check out the [available presets](https://github.com/unocss/unocss/#presets) or
Unocss [configurations](https://github.com/unocss/unocss/#configurations).
