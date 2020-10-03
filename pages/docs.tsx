import React, { PropsWithChildren } from 'https://esm.sh/react'
import '../style/docs.less'

export default function App({ children }: PropsWithChildren<{}>) {
     return (
        <div className="doc-page">
            {children}
        </div>
    )
}
