import css from 'https://deno.land/x/aleph@v0.3.0-alpha.20/plugins/css.ts'
import markdown from 'https://deno.land/x/aleph@v0.3.0-alpha.20/plugins/markdown.ts'
import type { Config } from 'https://deno.land/x/aleph@v0.3.0-alpha.20/types.ts'

export default (): Config => ({
  buildTarget: 'es2015',
  plugins: [
    css({
      postcss: { plugins: ['postcss-nested', 'autoprefixer'] }
    }),
    markdown(),
  ]
})
