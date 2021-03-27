import React from 'react'
import marked from 'marked'

export default function DenoDocJSDoc({ jsDoc }: { jsDoc: string }) {
  return (
    <div className="jsdoc" dangerouslySetInnerHTML={{ __html: marked.parse(jsDoc.replace(/@param ([^\s]+) /g, '- **param** `$1` ')) }} />
  )
}
