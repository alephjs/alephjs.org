import { Head, Import, Link, SEO, useDeno } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react'
import Button from '../components/button.tsx'
import PlainLogo from '../components/plain-logo.tsx'

const thisYear = (new Date).getFullYear()

export default function Home() {
    const { version } = useDeno(() => ({
        version: (window as any).ALEPH.ENV.__version
    }))

    return (
        <div className="index-page">
            <Head>
                <SEO
                    title="Aleph.js"
                    description="The React Framework in Deno."
                    keywords="aleph,aleph.js,react,framework,deno,ssr,ssg,typescript,esm,import-maps,hmr,fast-refresh"
                    image="https://alephjs.org/twitter_card.jpg"
                />
                <meta name="twitter:image" content="https://alephjs.org/twitter_card.jpg" />
                <meta name="twitter:site" content="@alephjs" />
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
                    <li>Zero Config</li>
                    <li>Typescript in Deno</li>
                    <li>ES Module Ready</li>
                    <li>Import Maps</li>
                    <li>HMR with Fast Refresh</li>
                    <li>File-system Routing</li>
                    <li>Markdown Page</li>
                    <li>Built-in CSS(Less) Support</li>
                    <li>SSR & SSG</li>
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
