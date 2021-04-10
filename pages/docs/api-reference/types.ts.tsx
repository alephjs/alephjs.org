import { useDeno } from 'framework/react'
import React from 'react'
import DenoDocInterface from '~/components/deno-doc-interface.tsx'
import { run } from '~/shared/util.ts'

export default function TypesTS() {
  const { doc, version } = useDeno(async () => {
    const version = Deno.env.get('ALEPH_VERSION')
    const buildMode = Deno.env.get('BUILD_MODE')
    const tsFile = buildMode === 'development' ? Deno.mainModule.replace(/cli\.ts$/, 'types.ts') : `https://deno.land/x/aleph@v${version}/types.ts`
    const outputJson = await run(Deno.execPath(), 'doc', tsFile, '--json')
    const doc = JSON.parse(outputJson)
    if (Array.isArray(doc)) {
      return { doc, version }
    }
    return { doc: [], version }
  })

  return (
    <div className="api-doc-page">
      <header><a href={`https://deno.land/x/aleph@v${version}/types.ts`}>{`https://deno.land/x/aleph@v${version}/types.ts`}</a></header>
      {doc.map((node: any) => {
        if (node.kind === 'interface') {
          return <DenoDocInterface node={node} key={node.name} />
        }
        return null
      })}
      <details>
        <summary><code>deno doc types.ts --json</code></summary>
        <pre><code className="lang-json">{JSON.stringify(doc, undefined, 4)}</code></pre>
      </details>
    </div>
  )
}

TypesTS.meta = {
  title: 'types.ts',
  author: 'The Aleph.js Authors',
  date: '2020-10-20',
  editable: false
}
