import React from 'https://esm.sh/react'
import { useDeno } from 'https://deno.land/x/aleph/mod.ts'
import { run } from '../../../shared/util.ts'
import DenoDocInterface from '../../../components/deno-doc-interface.tsx'

export default function TypesTS() {
    const { doc } = useDeno(async () => {
        const outputJson = await run(Deno.execPath(), 'doc', 'https://deno.land/x/aleph/types.ts', '--json')
        return {
            doc: JSON.parse(outputJson)
        }
    })

    return (
        <div className="api-doc-page">
            <header><a href="https://deno.land/x/aleph/types.ts">https://deno.land/x/aleph/types.ts</a></header>
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
