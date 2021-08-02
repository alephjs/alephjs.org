import React from 'react'

const apiRefs = [
  [
    'Framework',
    '',
  ],
  [
    'Base Path',
    ''
  ],
  [
    'Build',
    ''
  ],
  [
    'Configuring CSS',
    ''
  ],
  [
    'SSR Options',
    ''
  ],
  [
    'I18N',
    ''
  ],
  [
    'Server',
    ''
  ],
  [
    'Environment Variables',
    ''
  ],
  [
    'Plugins',
    ''
  ],
]

export default function Config() {
  return (
    <div className="doc-page">
      <h1>Config</h1>
      {apiRefs.map(([title, description]) => (
        <div className="api-description" key={title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ))}
    </div>
  )
}

Config.meta = {
  title: 'Config',
  authors: ['ije'],
  date: '2020-10-20',
  editable: false
}
