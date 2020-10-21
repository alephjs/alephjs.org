import React from 'https://esm.sh/react'
import marked from 'https://esm.sh/marked@1.2.0'
import util from 'https://deno.land/x/aleph/util.ts'

interface InterfaceNode {
    kind: 'interface'
    name: string
    jsDoc: string | null
    interfaceDef: {
        properties: IProperty[]
        methods: IProperty[]
        indexSignatures: IProperty[]
        callSignatures: IProperty[]
    }
}

export interface IProperty {
    name: string
    optional: boolean
    jsDoc: string | null
    location: {
        filename: string
        line: number
        col: number
    }
    params: {
        kind: string
        name?: string
        props?:{
            kind: string
            key: string
            value: any
        }[]
        optional: boolean
        tsType: ITSType
    }[]
    returnType?: ITSType
    isAsync?: boolean
    tsType: ITSType
}

export interface ITSType {
    repr: string
    kind: string
    keyword?: string
    array?: {
        repr: string
        kind: string
    }
    union?: ITSType[]
    typeRef?: {
        typeParams: ITSType[]
        typeName: string
    }
    fnOrConstructor?: {
        constructor: boolean
        tsType: ITSType
    }
    parenthesized?: {
        repr: string
        kind: string
        "union": ITSType[]
    }
}

export function TSType({ tsType }: { tsType: ITSType }) {
    if (tsType.kind === 'this') {
        return (
            <span className="keyword">this</span>
        )
    }
    if (tsType.kind === 'keyword') {
        return (
            <span className="keyword">{tsType.repr}</span>
        )
    }
    if (tsType.kind === 'array') {
        return (
            <>
                <span className="keyword">{tsType.array!.repr}</span>[]
            </>
        )
    }
    if (tsType.kind === 'union') {
        return (
            <>
                {tsType.union!.map((u, i, { length }) => (
                    <>
                        <TSType tsType={u} />
                        {i < length - 1 && <span className="separator"> | </span>}
                    </>
                ))}
            </>
        )
    }
    if (tsType.kind === 'typeRef') {
        return (
            <>
                <span className="keyword">{tsType.repr}</span>
                {tsType.typeRef!.typeParams && <span className="separator">{'<'}</span>}
                {tsType.typeRef!.typeParams?.map((t, i, { length }) => (
                    <>
                        <TSType tsType={t} />
                        {i < length - 1 && <span className="separator">, </span>}
                    </>
                ))}
                {tsType.typeRef!.typeParams && <span className="separator">{'>'}</span>}
            </>
        )
    }
    if (tsType.kind === 'fnOrConstructor') {
        return (
            <>
                <span className="keyword">{'() => '}<TSType tsType={tsType.fnOrConstructor!.tsType} /> </span>
            </>
        )
    }
    if (tsType.kind === 'parenthesized') {
        return (
            <>
                <span>(</span>
                {tsType.parenthesized!.union!.map((u, i, { length }) => (
                    <>
                        <TSType tsType={u} />
                        {i < length - 1 && <span className="separator"> | </span>}
                    </>
                ))}
                <span>)</span>
            </>
        )
    }
    return null
}

export default function DenoDocInterface({ node }: { node: InterfaceNode }) {
    return (
        <section key={node.name}>
            <h2><code className="keyword">{node.kind}</code> <strong>{node.name}</strong></h2>
            {node.jsDoc && (
                <p>{node.jsDoc}</p>
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
                                <p dangerouslySetInnerHTML={{ __html: util.trimSuffix(util.trimPrefix(marked.parse(prop.jsDoc).trim(), '<p>'), '</p>') }} />
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
                                        <>
                                            <span>{t.name}: </span>
                                            <TSType tsType={t.tsType} />
                                            {i < length - 1 && <span className="separator">, </span>}
                                        </>
                                    ))}
                                    <span>): </span>
                                    {prop.returnType && (<TSType tsType={prop.returnType} />)}
                                </code>
                            </pre>
                            {prop.jsDoc && (
                                <p dangerouslySetInnerHTML={{ __html: util.trimSuffix(util.trimPrefix(marked.parse(prop.jsDoc).trim(), '<p>'), '</p>') }} />
                            )}
                        </div>
                    ))}
                </>
            )}
            {node.interfaceDef.indexSignatures.length > 0 && (
                <>
                    <h3>Index Signatures</h3>
                    {node.interfaceDef.indexSignatures.map(prop => (
                        <div className="def" key={prop.name}>
                            <pre>
                                <code>
                                    <span>[</span>
                                    {prop.params?.map((t, i, { length }) => (
                                        <>
                                            <span>{t.name}: </span>
                                            <TSType tsType={t.tsType} />
                                            {i < length - 1 && <span className="separator">, </span>}
                                        </>
                                    ))}
                                    <span>]: </span>
                                    <TSType tsType={prop.tsType} />
                                </code>
                            </pre>
                            {prop.jsDoc && (
                                <p dangerouslySetInnerHTML={{ __html: util.trimSuffix(util.trimPrefix(marked.parse(prop.jsDoc).trim(), '<p>'), '</p>') }} />
                            )}
                        </div>
                    ))}
                </>
            )}
            {node.interfaceDef.callSignatures.length > 0 && (
                <>
                    <h3>Call Signatures</h3>
                    {node.interfaceDef.callSignatures.map(prop => (
                        <div className="def" key={prop.name}>
                            <pre>
                                <code>
                                    <span>(</span>
                                    {prop.params?.map((t, i, { length }) => (
                                        <>
                                            <span>{t.name}: </span>
                                            <TSType tsType={t.tsType} />
                                            {i < length - 1 && <span className="separator">, </span>}
                                        </>
                                    ))}
                                    <span>): </span>
                                    <TSType tsType={prop.tsType} />
                                </code>
                            </pre>
                            {prop.jsDoc && (
                                <p dangerouslySetInnerHTML={{ __html: util.trimSuffix(util.trimPrefix(marked.parse(prop.jsDoc).trim(), '<p>'), '</p>') }} />
                            )}
                        </div>
                    ))}
                </>
            )}
        </section>
    )
}
