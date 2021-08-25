import React, { ComponentType } from 'react'
import Header from './components/Header.tsx'
import './style/app.css'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  return (
    <main>
      <Header />
      <Page {...pageProps} />
    </main>
  )
}

// set scrollFixer with offset to avoid the fixed header override the hash scroll element
(window as any).scrollFixer = { offset: { top: 80 } }
