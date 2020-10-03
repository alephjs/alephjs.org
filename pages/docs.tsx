import React, { PropsWithChildren } from 'https://esm.sh/react'
import { Import } from 'https://deno.land/x/aleph/mod.ts'

export default function App({ children }: PropsWithChildren<{}>) {
     return (
        <div className="doc-page">
            <Import from="../style/docs.less" />
            {children}
        </div>
    )
}
