import { dynamic, Fallback, useDeno } from 'aleph/react'
import React from 'react'
import Button from '~/components/Button.tsx'
import GreyTriangle from '~/components/GreyTriangle.tsx'

const thisYear = (new Date).getFullYear()
const title = 'Aleph.js'
const about = 'The Fullstack Framework in Deno.'
const keywords = [
  'aleph',
  'alephjs',
  'aleph.js',
  'react',
  'full-stack',
  'framework',
  'ssr',
  'ssg',
  'deno',
  'typescript',
  'out-of-the-box',
  'esm',
  'hmr',
  'fast-refresh',
  'tooling'
]
const ogImage = 'https://alephjs.org/twitter_card.jpg'
const features = [
  { href: '/docs', title: 'Zero Config' },
  { href: '/docs', title: 'Typescript in Deno' },
  { href: '/docs/basic-features/import-from-npm', title: 'ES Module Ready' },
  { href: '/docs/basic-features/import-maps', title: 'Import Maps' },
  { href: '/docs/basic-features/hmr-with-fast-refresh', title: 'HMR with Fast Refresh' },
  { href: '/docs/basic-features/routing', title: 'File-system Routing' },
  { href: '/docs/basic-features/ssr-and-ssg', title: 'SSR & SSG' },
  { href: '/docs/basic-features/built-in-css-support', title: 'Built-in CSS Support' },
  { href: '/docs/advanced-features/jsx-magic', title: 'JSX Magic' },
  { href: '/docs/advanced-features/using-plugins', title: 'Plugin System' },
]

const UniverseTriangle = dynamic(() => import('~/components/UniverseTriangle.tsx'))

export default function Home() {
  const { version } = useDeno(() => ({
    version: Deno.env.get('ALEPH_VERSION')
  }))

  return (
    <div className="index-page">
      <head>
        <title>{title}</title>
        <meta name="description" content={about} />
        <meta name="keywords" content={keywords.join(',')} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={about} />
        <meta name="og:image" content={ogImage} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={about} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alephjs" />
        <link rel="stylesheet" href="~/style/index.css" />
      </head>
      <div className="fullscreen-page">
        <Fallback to={<GreyTriangle />}>
          <UniverseTriangle />
        </Fallback>
        <h1>The Fullstack Framework in Deno.</h1>
        <p className="intro"><strong>Aleph.js</strong> gives you the best developer experience for building modern web applications:<br /> TypeScript in Deno, ES module imports, file-system routing, SSR & SSG,<br /> HMR with Fast Refresh, and more. No config needed.</p>
        <p className="intro short"><strong>Aleph.js</strong> gives you the best developer experience for building modern web applications in Deno.</p>
        <div className="buttons">
          <a href="/docs/get-started">
            <Button strong>Get Started</Button>
          </a>
          <a href="/docs">
            <Button strong>Documentation</Button>
          </a>
        </div>
      </div>
      <section>
        <h2>Features</h2>
        <ul>
          {features.map(({ href, title }) => (
            <li key={href + title}><a href={href}>{title}</a></li>
          ))}
        </ul>
      </section>
      <footer>
        <p>Copyright © {thisYear} postUI, Lab. All rights reserved.</p>
        <p>Built by Aleph.js - v{version}</p>
        <p>(MIT License)</p>
      </footer>
    </div>
  )
}
