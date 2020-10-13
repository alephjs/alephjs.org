import { Head, Import } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react'
import Header from './components/header.tsx'
import Logo from './components/logo.tsx'

export default function E404() {
    return (
        <>
            <Import from="./style/app.less" />
            <Head>
                <title>404 - page not found | Aleph.js</title>
                <meta name="robots" content="noindex" />
            </Head>
            <Header />
            <div className="fullscreen-page">
                <Logo size={150} glitch />
                <p><br/><strong>Error 404</strong> - page not found</p>
            </div>
        </>
    )
}
