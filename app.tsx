import { useDeno } from 'aleph/react'
import React, { ComponentType } from 'react'
import Header from './components/header.tsx'
import './style/app.css'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  const GTAGID = useDeno(() => {
    return Deno.env.get('GTAGID')
  })

  return (
    <main>
      <Header />
      <Page {...pageProps} />
      {GTAGID && (
        <script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GTAGID)}`} async></script>
      )}
      {GTAGID && (
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(GTAGID)});
       `}</script>
      )}
    </main>
  )
}

// set scrollFixer with offset to avoid the fixed header override the hash scroll element
(window as any).scrollFixer = { offset: { top: 80 } }
