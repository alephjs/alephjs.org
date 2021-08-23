import type { Config } from 'aleph/types'
import markdown from 'aleph/plugins/markdown.ts'

export default <Config>{
  plugins: [
    markdown(),
  ],
  css: {
    postcss: {
      plugins: ['postcss-nested', 'autoprefixer']
    }
  }
}
