import React from 'react'

const apiRefs = [
  [
    'useDeno',
    '',
  ],
  [
    'useRouter',
    ''
  ],
  [
    'withRouter',
    ''
  ],
  [
    'dynamic',
    ''
  ]
]

export default function FrameworkAPI() {
  return (
    <div className="doc-page">
      <h1>Framework API</h1>
      {apiRefs.map(([title, description]) => (
        <div className="api-description" key={title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ))}
    </div>
  )
}

FrameworkAPI.meta = {
  title: 'FrameworkAPI',
  authors: ['ije'],
  date: '2020-10-20',
  editable: false
}
