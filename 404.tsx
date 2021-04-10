import { dynamic } from 'framework/react'
import React from 'react'
import Header from './components/header.tsx'
import PlainLogo from './components/plain-logo.tsx'

const Logo = dynamic(() => import('./components/logo.tsx'))

export default function E404() {
  return (
    <>
      <head>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex" />
        <link rel="stylesheet" href="./style/app.css" />
      </head>
      <Header />
      <div className="fullscreen-page">
        <Logo
          size={150}
          glitch={true}
          fallback={<PlainLogo size={150} />}
        />
        <p style={{ marginTop: '1.8rem' }}><strong style={{ color: 'black' }}>404</strong> - Page Not Found</p>
      </div>
    </>
  )
}
