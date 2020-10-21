import React from 'https://esm.sh/react'
import { useDeno } from 'https://deno.land/x/aleph/mod.ts'
import { run } from '../../../shared/util.ts'
import DenoDocFunction from '../../../components/deno-doc-function.tsx'
import DenoDocVariable from '../../../components/deno-doc-variable.tsx'

export default function ModTS() {
    const { doc } = useDeno(async () => {
        const outputJson = await run(Deno.execPath(), 'doc', 'https://deno.land/x/aleph/mod.ts', '--json')
        const doc = JSON.parse(outputJson)
        if (Array.isArray(doc)) {
            doc.sort((a: any, b: any) => {
                if (a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                }
                return 0
            })
            return { doc }
        }
        return {
            doc: []
        }
    })

    return (
        <div className="api-doc-page">
            <header><a href="https://deno.land/x/aleph/mod.ts">https://deno.land/x/aleph/mod.ts</a></header>
            {doc.map((node: any) => {
                if (node.kind === 'variable') {
                    return <DenoDocVariable node={node} key={node.name} />
                }
                return null
            })}
            {doc.map((node: any) => {
                if (node.kind === 'function') {
                    return <DenoDocFunction node={node} key={node.name} />
                }
                return null
            })}
            <details>
                <summary><code>deno doc mod.ts --json</code></summary>
                <pre><code className="lang-json">{JSON.stringify(doc, undefined, 4)}</code></pre>
            </details>
        </div>
    )
}

ModTS.meta = {
    title: 'mod.ts',
    author: 'postUI Lab.',
    date: '2020-10-20',
    editable: false
}