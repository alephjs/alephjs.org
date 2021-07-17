import markdown from 'aleph/plugins/markdown.ts'
import type { Config } from 'aleph/types'

export default (): Config => ({
  plugins: [
    {
      name: 'markdown',
      setup: (aleph: any) => {
        aleph.addModuleLoader(markdown())
      },
    },
  ],
  css: {
    postcss: {
      plugins: ['postcss-nested', 'autoprefixer']
    }
  }
})
