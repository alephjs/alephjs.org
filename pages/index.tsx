import React, { useState } from 'https://esm.sh/react'
import { Link } from 'https://deno.land/x/aleph/mod.ts'
import Button from '../components/button.tsx'
import Logo from '../components/logo.tsx'
import '../style/index.less'

export default function Home() {
    const [count, setCount] = useState(0)

    return (
        <div className="index-page wrapper">
            <Logo size={210} />
            <h1>The React Framework in Deno.</h1>
            <p>Aleph.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript in  deno, ES module, route pre-fetching, and more. No config needed.</p>
            <p className="buttons">
                <Link to="/docs/get-started"> <Button strong>Get Started</Button></Link>
                <Link to="/docs"> <Button strong>Documentation</Button></Link>
            </p>
        </div>
    )
}
