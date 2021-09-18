import { dynamic, Fallback } from 'aleph/react'
import React from 'react'
import GreyTriangle from '~/components/GreyTriangle.tsx'

const UniverseTriangle = dynamic(() => import('~/components/UniverseTriangle.tsx'))

export default function E404() {
  return (
    <>
      <head>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex" />
      </head>
      <div className="fullscreen-page">
        <Fallback to={<GreyTriangle size={150} />}>
          <UniverseTriangle
            size={150}
            glitch={true}
          />
        </Fallback>
        <p style={{ marginTop: '1.8rem' }}><strong style={{ color: 'black' }}>404</strong> - Page Not Found</p>
      </div>
    </>
  )
}
