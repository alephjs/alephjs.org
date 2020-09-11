import React, { Fragment, PropsWithChildren } from 'https://esm.sh/react'
import { Head } from 'https://postjs.io/mod.ts'

export default function App({ children }: PropsWithChildren<{}>) {
    return (
        <Fragment>
            <Head>
                <title>Welcome - postjs</title>
            </Head>
            {children}
        </Fragment>
    )
}
