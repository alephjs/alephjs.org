import React, { Fragment } from 'react'

export interface Def {
  kind: string
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
    props?: {
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
    union: ITSType[]
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
          <Fragment key={i}>
            <TSType tsType={u} />
            {i < length - 1 && <span className="separator"> | </span>}
          </Fragment>
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
          <Fragment key={i}>
            <TSType tsType={t} />
            {i < length - 1 && <span className="separator">, </span>}
          </Fragment>
        ))}
        {tsType.typeRef!.typeParams && <span className="separator">{'>'}</span>}
      </>
    )
  }
  if (tsType.kind === 'fnOrConstructor') {
    return (
      <>
        <span>{'() => '}</span>
        <TSType tsType={tsType.fnOrConstructor!.tsType} />
      </>
    )
  }
  if (tsType.kind === 'parenthesized') {
    return (
      <>
        <span>(</span>
        {tsType.parenthesized!.union!.map((u, i, { length }) => (
          <Fragment key={i}>
            <TSType tsType={u} />
            {i < length - 1 && <span className="separator"> | </span>}
          </Fragment>
        ))}
        <span>)</span>
      </>
    )
  }
  return null
}
