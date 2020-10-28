import { Import, Scripts, useEnv, Viewport } from 'https://deno.land/x/aleph/mod.ts'
import React, { ComponentType } from 'https://esm.sh/react'
import Header from './components/header.tsx'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
    const GTAGID = useEnv(env => env.GTAGID)

    return (
        <>
            <Import from="./style/app.less" />
            <Viewport
                width="device-width"
                initialScale={1.0}
                minimumScale={1.0}
                maximumScale={1.0}
            />
            <Header />
            <Page {...pageProps} />
            {GTAGID && (
                <Scripts>
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GTAGID)}`}></script>
                    <script>{`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){
                            dataLayer.push(arguments);
                        }
                        gtag('js', new Date());
                        gtag('config', ${JSON.stringify(GTAGID)});
                    `}</script>
                </Scripts>
            )}
        </>
    )
}

// set hashAnchorScroll with offset to avoid the fixed header override the hash scroll element
(window as any).hashAnchorScroll = { offset: { top: 80 } }
