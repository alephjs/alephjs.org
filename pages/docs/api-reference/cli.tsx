import { useDeno } from 'framework/react'
import React from 'react'
import { run } from '~/shared/util.ts'

export default function CLI() {
  const { version, helpMessage } = useDeno(async () => {
    return {
      version: Deno.env.get('ALEPH_VERSION'),
      helpMessage: await run(Deno.execPath(), 'run', '-A', Deno.mainModule, '-h')
    }
  })

  return (
    <div className="doc-page">
      <h1>CLI</h1>
      <h2>Installation</h2>
      <pre><code className="language-bash">$ deno run -A https://deno.land/x/aleph@v{version}/install.ts</code></pre>
      <h2>Usage</h2>
      <pre><code className="language-bash">{'$ aleph -h\n' + helpMessage.trim()}</code></pre>
    </div>
  )
}

CLI.meta = {
  title: 'CLI',
  author: 'The Aleph.js Authors',
  date: '2020-10-20',
  editable: false
}
