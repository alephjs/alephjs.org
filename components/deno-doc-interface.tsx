import React, { Fragment } from 'react'
import { Def, TSType, ITSType } from './deno-doc-tstype.tsx'
import JSDoc from './deno-doc-js-doc.tsx'

interface InterfaceNode {
  kind: 'interface'
  name: string
  jsDoc: string | null
  interfaceDef: {
    extends: ITSType[]
    properties: Def[]
    methods: Def[]
    indexSignatures: Def[]
    callSignatures: Def[]
  }
}

export default function DenoDocInterface({ node }: { node: InterfaceNode }) {
  return (
    <section id={node.name} key={node.name}>
      <h2>
        <code className="keyword">{node.kind} </code>
        <strong>{node.name}</strong>
        {node.interfaceDef.extends.length > 0 && (
          <>
            <code className="keyword"> extends </code>
            <strong>{node.interfaceDef.extends.map(e => e.repr).join(', ')}</strong>
          </>
        )}
      </h2>
      {node.jsDoc && (
        <JSDoc jsDoc={node.jsDoc} />
      )}

      {node.interfaceDef.indexSignatures.length > 0 && (
        <>
          <h3>Index Signatures</h3>
          {node.interfaceDef.indexSignatures.map((prop, i) => (
            <div className="def" key={i}>
              <pre>
                <code>
                  <span>[</span>
                  {prop.params?.map((t, i, { length }) => (
                    <Fragment key={i}>
                      <span>{t.name}{t.optional ? '?' : ''}: </span>
                      <TSType tsType={t.tsType} />
                      {i < length - 1 && <span className="separator">, </span>}
                    </Fragment>
                  ))}
                  <span>]: </span>
                  <TSType tsType={prop.tsType} />
                </code>
              </pre>
              {prop.jsDoc && (
                <JSDoc jsDoc={prop.jsDoc} />
              )}
            </div>
          ))}
        </>
      )}
      {node.interfaceDef.callSignatures.length > 0 && (
        <>
          <h3>Call Signatures</h3>
          {node.interfaceDef.callSignatures.map((prop, i) => (
            <div className="def" key={i}>
              <pre>
                <code>
                  <span>(</span>
                  {prop.params?.map((t, i, { length }) => (
                    <Fragment key={i}>
                      <span>{t.name}{t.optional ? '?' : ''}: </span>
                      <TSType tsType={t.tsType} />
                      {i < length - 1 && <span className="separator">, </span>}
                    </Fragment>
                  ))}
                  <span>): </span>
                  <TSType tsType={prop.tsType} />
                </code>
              </pre>
              {prop.jsDoc && (
                <JSDoc jsDoc={prop.jsDoc} />
              )}
            </div>
          ))}
        </>
      )}
      {node.interfaceDef.properties.length > 0 && (
        <>
          <h3>Properties</h3>
          {node.interfaceDef.properties.map(prop => (
            <div className="def" key={prop.name}>
              <pre>
                <code>
                  <span>{prop.name}{prop.optional ? '?' : ''}</span>
                  <span>: </span>
                  <TSType tsType={prop.tsType} />
                </code>
              </pre>
              {prop.jsDoc && (
                <JSDoc jsDoc={prop.jsDoc} />
              )}
            </div>
          ))}
        </>
      )}
      {node.interfaceDef.methods.length > 0 && (
        <>
          <h3>Methods</h3>
          {node.interfaceDef.methods.map(prop => (
            <div className="def" key={prop.name}>
              <pre>
                <code>
                  <span>{prop.name}{prop.optional ? '?' : ''}(</span>
                  {prop.params?.map((t, i, { length }) => (
                    <Fragment key={i}>
                      <span>{t.name}{t.optional ? '?' : ''}: </span>
                      <TSType tsType={t.tsType} />
                      {i < length - 1 && <span className="separator">, </span>}
                    </Fragment>
                  ))}
                  <span>): </span>
                  {prop.returnType && (<TSType tsType={prop.returnType} />)}
                </code>
              </pre>
              {prop.jsDoc && (
                <JSDoc jsDoc={prop.jsDoc} />
              )}
            </div>
          ))}
        </>
      )}
    </section>
  )
}
