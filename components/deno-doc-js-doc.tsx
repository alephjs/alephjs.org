import React from 'https://esm.sh/react'
import marked from 'https://esm.sh/marked@1.2.0'

export default function DenoDocJSDoc({ jsDoc }: { jsDoc: string }) {
    return (
        <div className="jsdoc" dangerouslySetInnerHTML={{ __html: marked.parse(jsDoc.replace(/@param ([^\s]+) /g, '- **param** `$1` ')) }} />
    )
}
