import markdown from 'aleph/plugins/markdown.ts'
import type { Config } from 'aleph/types.ts'

export default (): Config => ({
  plugins: [
    markdown(),
  ],
  css: {
    postcss: {
      plugins: ['postcss-nested', 'autoprefixer']
    }
  }
})
