import css from '../aleph.js/plugins/css.ts'
import markdown from '../aleph.js/plugins/markdown.ts'
import type { Config } from '../aleph.js/types.ts'

export default (): Config => ({
  plugins: [
    css({
      postcss: { plugins: ['postcss-nested', 'autoprefixer'] }
    }),
    markdown(),
  ]
})
