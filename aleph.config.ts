import markdown from '../aleph.js/plugins/markdown.ts'
import type { Config } from '../aleph.js/types.ts'

export default (): Config => ({
  buildTarget: 'es2015',
  plugins: [
    markdown(),
  ],
  css: {
    postcss: {
      plugins: ['postcss-nested', 'autoprefixer']
    }
  }
})
