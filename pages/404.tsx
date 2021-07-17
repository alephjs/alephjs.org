import { dynamic, Fallback } from 'aleph/react'
import React from 'react'
import PlainLogo from '~/components/plain-logo.tsx'

const Logo = dynamic(() => import('~/components/logo.tsx'))

export default function E404() {
  return (
    <>
      <head>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex" />
      </head>
      <div className="fullscreen-page">
        <Fallback to={<PlainLogo size={150} />}>
          <Logo
            size={150}
            glitch={true}
          />
        </Fallback>
        <p style={{ marginTop: '1.8rem' }}><strong style={{ color: 'black' }}>404</strong> - Page Not Found</p>
      </div>
    </>
  )
}
