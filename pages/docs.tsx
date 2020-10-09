import { Import } from 'https://deno.land/x/aleph/mod.ts'
import React, { ComponentType } from 'https://esm.sh/react'

export default function Docs({ Page }: { Page?: ComponentType<any> }) {
   return (
        <div className="docs-page">
            <Import from="../style/docs.less" />
            {Page && <Page />}
        </div>
    )
}
