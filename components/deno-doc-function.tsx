import React, { Fragment } from 'react'
import { Def, TSType } from './deno-doc-tstype.tsx'
import JSDoc from './deno-doc-js-doc.tsx'

interface FunctionNode {
  kind: 'function'
  name: string
  jsDoc: string | null
  functionDef: Def
}

export default function DenoDocFunction({ node }: { node: FunctionNode }) {
  return (
    <section key={node.name}>
      <h2 className="single-line">
        <code className="keyword">{node.kind} </code>
        <strong>{node.name}</strong>
        <code>
          <span>(</span>
          {node.functionDef.params?.map((t, i, { length }) => (
            <Fragment key={t.kind + t.name}>
              {t.kind === 'identifier' && (
                <span>{t.name}{t.optional ? '?' : ''}</span>
              )}
              {t.kind === 'object' && (
                <span>props</span>
              )}
              <span>: </span>
              <TSType tsType={t.tsType} />
              {i < length - 1 && <span className="separator">, </span>}
            </Fragment>
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
        <JSDoc jsDoc={node.jsDoc} />
      )}
    </section>
  )
}
