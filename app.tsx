import { Head, Import, Scripts, useDeno, Viewport } from 'https://deno.land/x/aleph/mod.ts'
import React, { ComponentType } from 'https://esm.sh/react'
import Header from './components/header.tsx'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
    const { isDev } = useDeno(() => ({
        isDev: (window as any).ALEPH.ENV.__buildMode === 'development'
    }))

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
            </Head>
            <Header />
            <Page {...pageProps} />
            {!isDev && (
                <Scripts>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-WDCBBBRC98"></script>
                    <script>{`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){
                            dataLayer.push(arguments);
                        }
                        gtag('js', new Date());
                        gtag('config', 'G-WDCBBBRC98');
                    `}</script>
                </Scripts>
            )}
        </>
    )
}
