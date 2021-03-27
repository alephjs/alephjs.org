import React from 'react'
import { Def } from './deno-doc-tstype.tsx'
import JSDoc from './deno-doc-js-doc.tsx'

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
