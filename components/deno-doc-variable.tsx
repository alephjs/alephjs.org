import React from 'https://esm.sh/react@17.0.1'
import JSDoc from './deno-doc-js-doc.tsx'
import { Def } from './deno-doc-tstype.tsx'

interface VariableNode {
    kind: 'variable'
    name: string
    jsDoc: string | null
    variableDef: Def
}

export default function DenoDocVariable({ node }: { node: VariableNode }) {
    return (
        <section key={node.name}>
            <h2 className="single-line">
                <code className="keyword">{node.variableDef.kind} </code>
                <strong>{node.name}</strong>
            </h2>
            {node.jsDoc && (
                <JSDoc jsDoc={node.jsDoc} />
            )}
        </section>
    )
}
