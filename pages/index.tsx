import { Head, Import, Link, SEO, useDeno } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react'
import Button from '../components/button.tsx'
import PlainLogo from '../components/plain-logo.tsx'

const thisYear = (new Date).getFullYear()
const features = [
    { href: '/docs', title: 'Zero Config' },
    { href: '/docs', title: 'Typescript in Deno' },
    { href: '/docs/basic-features/import-from-npm', title: 'ES Module Ready' },
    { href: '/docs/basic-features/import-maps', title: 'Import Maps' },
    { href: '/docs/basic-features/hmr-with-fast-refresh', title: 'HMR with Fast Refresh' },
    { href: '/docs/basic-features/routing', title: 'File-system Routing' },
    { href: '/docs/basic-features/pages#markdown-pages', title: 'Markdown Page' },
    { href: '/docs/basic-features/built-in-css-support', title: 'Built-in CSS(Less) Support' },
    { href: '/docs/basic-features/ssr-and-ssg', title: 'SSR & SSG' },
]

export default function Home() {
    const { version } = useDeno(() => ({
        version: Deno.env.get('__version')
    }))

    return (
        <div className="index-page">
            <Head>
                <SEO
                    title="Aleph.js"
                    description="The React Framework in Deno."
                    keywords={[
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
                    ]}
                    image="https://alephjs.org/twitter_card.jpg"
                    twitter={{ site: '@alephjs' }}
                />
            </Head>
            <Import from="../style/index.less" />
            <div className="fullscreen-page">
                <Import
                    from="../components/logo.tsx"
                    fallback={<PlainLogo />}
                />
                <h1>The React Framework in Deno.</h1>
                <p className="intro"><strong>Aleph.js</strong> gives you the best developer experience for building modern web applications:<br /> TypeScript in Deno, ES module imports, file-system routing, SSR & SSG,<br /> HMR with Fast Refresh, and more. No config needed.</p>
                <p className="intro short"><strong>Aleph.js</strong> gives you the best developer experience for building modern web applications.</p>
                <div className="buttons">
                    <Link to="/docs/get-started">
                        <Button strong>Get Started</Button>
                    </Link>
                    <Link to="/docs">
                        <Button strong>Documentation</Button>
                    </Link>
                </div>
            </div>
            <section>
                <h2>Features</h2>
                <ul>
                    {features.map(({ href, title }) => (
                        <li key={href + title}><Link to={href}>{title}</Link></li>
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
