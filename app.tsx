import { Head, Import ,Viewport} from 'https://deno.land/x/aleph/mod.ts'
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
                <title>Aleph.js - The React Framework in Deno.</title>
                <meta name="description" content="The React Framework in Deno." />
                <meta name="keywords" content="react,deno,ssr,typescript,esm,fast-refresh" />
            </Head>
            <Header />
            <Page {...pageProps} />
        </>
    )
}
