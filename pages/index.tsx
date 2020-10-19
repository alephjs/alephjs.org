import React from 'https://esm.sh/react'
import { Link, Import, useDeno } from 'https://deno.land/x/aleph/mod.ts'
import Button from '../components/button.tsx'

const thisYear = (new Date).getFullYear()

export default function Home() {
    const { version } = useDeno(() =>  ({
        version: (window as any).ALEPH.__version
    }))

    return (
        <div className="index-page">
            <Import from="../style/index.less" />
            <div className="fullscreen-page">
                <Import
                    from="../components/logo.tsx"
                    props={{ size: 200 }}
                    fallback={<div style={{ height: 200 }} />}
                />
                <h1>The React Framework in Deno.</h1>
                <p><strong>Aleph.js</strong> gives you the best developer experience on building modern web application:<br/> TypeScript in Deno, ES module imports, file-system routing, SSR & SSG,<br /> HMR with Fast Refresh, and more. No config needed.</p>
                <p className="buttons">
                    <Link to="/docs/get-started"> <Button strong>Get Started</Button></Link>
                    <Link to="/docs"> <Button strong>Documentation</Button></Link>
                </p>
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
