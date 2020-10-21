import React from 'https://esm.sh/react'
import { TSType, IProperty } from './deno-doc-interface.tsx'

interface FunctionNode {
    kind: 'function'
    name: string
    jsDoc: string | null
    functionDef: IProperty
}

export default function DenoDocFunction({ node }: { node: FunctionNode }) {
    return (
        <section key={node.name}>
            <h2>
                <code>
                    <span className="keyword">{node.kind} </span>
                    <strong>{node.name}</strong>
                    <span>(</span>
                    {node.functionDef.params?.map((t, i, { length }) => (
                        <>
                            {t.kind === 'identifier' && (
                                <span>{t.name}{t.optional ? '?' : ''}</span>
                            )}
                            {t.kind === 'object' && (
                                <span>props</span>
                            )}
                            <span>: </span>
                            <TSType tsType={t.tsType} />
                            {i < length - 1 && <span className="separator">, </span>}
                        </>
                    ))}
                    <span>)</span>
                    {node.functionDef.returnType && (
                        <>
                            <span>: </span>
                            <TSType tsType={node.functionDef.returnType} />
                        </>
                    )}
                </code>
            </h2>
            {node.jsDoc && (
                <p>{node.jsDoc}</p>
            )}
        </section>
    )
}
