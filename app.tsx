import { Head, Import, Viewport, SEO } from 'https://deno.land/x/aleph/mod.ts'
import React, { ComponentType } from 'https://esm.sh/react'
import Header from './components/header.tsx'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
    return (
        <>
            <Import from="./style/app.less" />
            <Head>
                <Viewport
                    width="device-width"
                    initialScale={1.0}
                    minimumScale={1.0}
                    maximumScale={1.0}
                />
                <SEO
                    title="Aleph.js"
                    description="The React Framework in Deno."
                    keywords="react,deno,ssr,ssg,typescript,esm,import-maps,hmr,fast-refresh"
                    image="https://alephjs.org/poster.png"
                />
            </Head>
            <Header />
            <Page {...pageProps} />
        </>
    )
}
