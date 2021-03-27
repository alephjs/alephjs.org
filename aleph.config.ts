import css from 'https://deno.land/x/aleph@v0.3.0-alpha.19/plugins/css.ts'
import markdown from 'https://deno.land/x/aleph@v0.3.0-alpha.19/plugins/markdown.ts'
import type { Config } from 'https://deno.land/x/aleph@v0.3.0-alpha.19/types.ts'

export default (): Config => ({
  plugins: [
    css({
      postcss: { plugins: ['postcss-nested', 'autoprefixer'] }
    }),
    markdown(),
  ]
})
