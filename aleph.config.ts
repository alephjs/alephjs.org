import type { Config } from 'aleph/types'
import markdown from 'aleph/plugins/markdown.ts'

export default <Config>{
  plugins: [
    markdown(),
    {
      name: 'google-analytics-plugin',
      setup: aleph => {
        const id = Deno.env.get('GTAGID')
        if (id && aleph.mode === 'production') {
          aleph.onRender(({ html }) => {
            html.scripts.push(
              {
                src: `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`,
                async: true
              },
              `window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', ${JSON.stringify(id)});`
            )
          })
        }
      }
    }
  ],
  css: {
    postcss: {
      plugins: ['postcss-nested', 'autoprefixer']
    }
  }
}
