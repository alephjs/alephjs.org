import { useDeno } from 'aleph/react'
import React from 'react'

async function run(...cmd: string[]) {
  const p = Deno.run({
    cmd,
    stdout: 'piped',
    stderr: 'inherit'
  })
  const output = await p.output()
  p.close()
  return new TextDecoder().decode(output)
}

export default function CLI() {
  const { helpMessage } = useDeno(async () => {
    return {
      helpMessage: await run(Deno.execPath(), 'run', '-A', Deno.mainModule, '-h')
    }
  })

  return (
    <div className="doc-page">
      <h1>CLI</h1>
      <h2>Installation</h2>
      <pre><code className="language-bash">$ deno run -A https://deno.land/x/aleph/install.ts</code></pre>
      <p>or use <a href="https://deno.land/x/land">land</a> without installation:</p>
      <pre><code className="language-bash">$ land aleph</code></pre>
      <h2>Usage</h2>
      <pre><code className="language-bash">{'$ aleph -h\n' + helpMessage.trim()}</code></pre>
    </div>
  )
}

CLI.meta = {
  title: 'CLI',
  author: ['ije'],
  date: '2020-10-20',
  editable: false
}
