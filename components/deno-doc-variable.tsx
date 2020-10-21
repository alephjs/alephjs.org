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
            <h2>
                <code>
                    <span className="keyword">{node.kind} </span>
                    <strong>{node.name}</strong>
                </code>
            </h2>
            {node.jsDoc && (
                <p>{node.jsDoc}</p>
            )}
        </section>
    )
}
