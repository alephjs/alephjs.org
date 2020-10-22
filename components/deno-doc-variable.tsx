import React from 'https://esm.sh/react'
import { IProperty } from './deno-doc-interface.tsx'

interface VariableNode {
    kind: 'variable'
    name: string
    jsDoc: string | null
    variableDef: IProperty
}

export default function DenoDocVariable({ node }: { node: VariableNode }) {
    return (
        <section key={node.name}>
            <h2 className="single-line">
                <code className="keyword">{node.variableDef.kind} </code>
                <strong>{node.name}</strong>
            </h2>
            {node.jsDoc && (
                <p>{node.jsDoc}</p>
            )}
        </section>
    )
}
