import { Head, Import, Link, SEO, useDeno } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react'
import Button from '../components/button.tsx'
import PlainLogo from '../components/plain-logo.tsx'

const thisYear = (new Date).getFullYear()

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
                        'deno',
                        'ssr',
                        'server side rendering',
                        'ssg',
                        'static site generator',
                        'markdown docs',
                        'makdown blog',
                        'typescript',
                        'out-of-the-box',
                        'esm',
                        'import-maps',
                        'hmr',
                        'fast-refresh',
                        'apis',
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
                <p className="intro"><strong>Aleph.js</strong> gives you the best developer experience on building modern web application:<br /> TypeScript in Deno, ES module imports, file-system routing, SSR & SSG,<br /> HMR with Fast Refresh, and more. No config needed.</p>
                <p className="intro short"><strong>Aleph.js</strong> gives you the best developer experience on building modern web application.</p>
                <div className="buttons">
                    <Link to="/docs/get-started"> <Button strong>Get Started</Button></Link>
                    <Link to="/docs"> <Button strong>Documentation</Button></Link>
                </div>
            </div>
            <section>
                <h2>Features</h2>
                <ul>
                    <li>
                        <Link to="/docs">Zero Config</Link>
                    </li>
                    <li>
                        <Link to="/docs">Typescript in Deno</Link>
                    </li>
                    <li>
                        <Link to="/docs/basic-features/import-from-npm">ES Module Ready</Link>
                    </li>
                    <li>
                        <Link to="/docs/basic-features/import-maps">Import Maps</Link>
                    </li>
                    <li>
                        <Link to="/docs/basic-features/hmr-with-fast-refresh">HMR with Fast Refresh</Link>
                    </li>
                    <li>
                        <Link to="/docs/basic-features/routing">File-system Routing</Link
                        ></li>
                    <li>
                        <Link to="/docs/basic-features/pages#markdown-pages">Markdown Page</Link>
                    </li>
                    <li>
                        <Link to="/docs/basic-features/built-in-css-support">Built-in CSS(Less) Support</Link>
                    </li>
                    <li>
                        <Link to="/docs/basic-features/ssr-and-ssg">SSR & SSG</Link>
                    </li>
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
