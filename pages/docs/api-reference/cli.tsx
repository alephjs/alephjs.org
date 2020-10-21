import React from 'https://esm.sh/react'
import { useDeno } from 'https://deno.land/x/aleph/mod.ts'

async function run(...cmd: string[]) {
    const p = Deno.run({
        cmd,
        stdout: 'piped',
        stderr: 'piped'
    })
    const [output, stderrOutput] = await Promise.all([p.output(), p.stderrOutput()])
    await Deno.stderr.write(stderrOutput)
    p.close()
    return new TextDecoder().decode(output)
}

export default function CLI() {
    const { version, helpMessage } = useDeno(async () => {
        return {
            version: (window as any).ALEPH.ENV.__version,
            helpMessage: await run(Deno.execPath(), 'run', '-A', Deno.mainModule, '-h')
        }
    })

    return (
        <div className="markdown-page">
            <h1>CLI</h1>
            <h2>Installation</h2>
            <pre><code className="language-bash">$ deno install -A -f -n aleph https://deno.land/x/aleph@v{version}/cli.ts</code></pre>
            <h2>Usage</h2>
            <pre><code className="language-bash">{'$ aleph -h\n' + helpMessage}</code></pre>
        </div>
    )
}

CLI.meta = {
    title: 'CLI',
    author: 'postUI Lab.',
    date: '2020-10-20',
    editable: false
}
