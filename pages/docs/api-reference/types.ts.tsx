import React from 'https://esm.sh/react'
import { useDeno } from 'https://deno.land/x/aleph/mod.ts'
import { run } from '../../../shared/util.ts'
import DenoDocInterface from '../../../components/deno-doc-interface.tsx'

export default function TypesTS() {
    const { doc, version } = useDeno(async () => {
        const version = (window as any).ALEPH.ENV.__version
        const outputJson = await run(Deno.execPath(), 'doc', `https://deno.land/x/aleph@v${version}/types.ts`, '--json')
        const doc = JSON.parse(outputJson)
        if (Array.isArray(doc)) {
            return { doc, version }
        }
        return { doc: [], version }
    })

    return (
        <div className="api-doc-page">
            <header><a href={`https://deno.land/x/aleph@v${version}/types.ts`}>{`https://deno.land/x/aleph@v${version}/types.ts`}</a></header>
            {doc.map((node: any) => {
                if (node.kind === 'interface') {
                    return <DenoDocInterface node={node} key={node.name} />
                }
                return null
            })}
            <details>
                <summary><code>deno doc types.ts --json</code></summary>
                <pre><code className="lang-json">{JSON.stringify(doc, undefined, 4)}</code></pre>
            </details>
        </div>
    )
}

TypesTS.meta = {
    title: 'types.ts',
    author: 'postUI Lab.',
    date: '2020-10-20',
    editable: false
}
