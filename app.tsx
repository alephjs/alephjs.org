import React, { Fragment, PropsWithChildren } from 'https://esm.sh/react'
import { Head } from 'https://deno.land/x/aleph/mod.ts'
import Header from './components/header.tsx'
import './style/app.less'

export default function App({ children }: PropsWithChildren<{}>) {
     return (
        <Fragment>
            <Head>
                <title>AlephJS - The React Framework in Deno.</title>
                <meta name="viewport" content="user-scalable=no,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
            </Head>
            <Header />
            {children}
        </Fragment>
    )
}
