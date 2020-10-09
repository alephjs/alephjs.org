import { Head, Import } from 'https://deno.land/x/aleph/mod.ts'
import React, { ComponentType } from 'https://esm.sh/react'
import Header from './components/header.tsx'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
    return (
        <>
            <Import from="./style/app.less" />
            <Head>
                <title>Aleph.js - The React Framework in Deno.</title>
                <meta name="viewport" content="user-scalable=no,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
                <meta name="description" content="The React Framework in Deno." />
                <meta name="keywords" content="react,deno,ssr,typescript,esm,fast-refresh" />
            </Head>
            <Header />
            <Page {...pageProps} />
        </>
    )
}
