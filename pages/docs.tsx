/// <reference lib="dom" />
import { Head, Import, NavLink, useRouter } from 'https://deno.land/x/aleph/mod.ts'
import hljs from 'https://esm.sh/highlight.js/lib/core'
import bash from 'https://esm.sh/highlight.js/lib/languages/bash'
import javascript from 'https://esm.sh/highlight.js/lib/languages/javascript'
import json from 'https://esm.sh/highlight.js/lib/languages/json'
import React, { ComponentType, useEffect, useMemo, Fragment, useState } from 'https://esm.sh/react'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('bash', (hljs: any) => {
    const l = bash(hljs)
    l.keywords.built_in += ' deno aleph'
    return l
})

interface Metadata {
    title: string
    author: string
    date: string
}

const navMenu = [
    {
        name: 'Documentation',
        items: [
            { title: 'About Aleph.js', pathname: '/docs' },
            { title: 'Get Started', pathname: '/docs/get-started' },
            {
                title: 'Basic Features',
                pathname: '/docs/basic-features',
                submenu: [
                    { title: 'Pages', pathname: '/pages' },
                    { title: 'HMR with Fast Refresh', pathname: '/hmr-with-fast-refresh' },
                    { title: 'Static File Serving', pathname: '/static-file-serving' },
                    { title: 'Built-in CSS Support', pathname: '/built-in-css-support' },
                ]
            },
            {
                title: 'Routing',
                pathname: '/docs/routing',
                submenu: [
                    { title: 'Introduction', pathname: '/' },
                    { title: 'Dynamic Routes', pathname: '/dynamic-routes' },
                    { title: 'Link & Redirect', pathname: '/link-and-redirect' },
                ]
            },
            {
                title: 'API Routes',
                pathname: '/docs/api-routes',
                submenu: [
                    { title: 'Introduction', pathname: '/' },
                    { title: 'Dynamic API Routes', pathname: '/dynamic-api-routes' }
                ]
            },
            {
                title: 'Advanced Features',
                pathname: '/docs/advanced-features',
                submenu: [
                    { title: 'Custom `App`', pathname: '/custom-app' },
                    { title: 'Custom `404` Page', pathname: '/custom-404-page' },
                    { title: 'Global Static Data', pathname: '/global-static-data' }
                ]
            },
        ]
    },
    {
        name: 'API Reference',
        items: [
            { title: 'config.js', pathname: '/docs/api-reference/config.js' },
        ]
    }
]

export default function Docs({ Page }: { Page?: ComponentType<any> & { meta: Metadata } }) {
    const { pagePath } = useRouter()
    const [opened, setOpened] = useState(() => navMenu.map(m => m.items).flat().filter(item => item.submenu).reduce((m, item) => {
        m[item.pathname] = false
        return m
    }, {} as Record<string, boolean>))
    const editUrl = useMemo(() => {
        const md = pagePath === '/docs' ? pagePath + '/index.md' : pagePath + '.md'
        return 'https://github.com/postui/alephjs.org/edit/master/pages' + md
    }, [pagePath])

    useEffect(() => {
        document.querySelectorAll('.docs pre > code').forEach(block => {
            hljs.highlightBlock(block)
        })
    }, [Page])

    return (
        <div className="docs">
            <Head>
                <title>{Page?.meta.title} - Aleph.js</title>
            </Head>
            <Import from="../style/docs.less" />
            <aside>
                <input placeholder="Search..." />
                {navMenu.map(g => (
                    <Fragment key={g.name}>
                        <h2>{g.name}</h2>
                        <ul>
                            {g.items.map(item => {
                                if (item.submenu) {
                                    return (
                                        <Fragment key={item.title + item.pathname}>
                                            <li>
                                                <label
                                                    className={opened[item.pathname] ? 'open' : 'close'}
                                                    onClick={() => setOpened(opened => {
                                                        opened[item.pathname] = !opened[item.pathname]
                                                        console.log({ ...opened })
                                                        return { ...opened }
                                                    })}
                                                >
                                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7" stroke="#999" strokeLinecap="square"></path>
                                                    </svg>
                                                    {item.title}
                                                </label>
                                            </li>
                                            {opened[item.pathname] && item.submenu.map(({ title, pathname }) => (
                                                <li className="indent" key={title + pathname}>
                                                    <NavLink to={item.pathname + pathname}>{title}</NavLink>
                                                </li>
                                            ))}
                                        </Fragment>
                                    )
                                } else {
                                    return (
                                        <li key={item.title + item.pathname}>
                                            <NavLink to={item.pathname}>{item.title}</NavLink>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </Fragment>
                ))}
            </aside>
            <div className="content">
                {Page && <Page />}
                <p className="edit-link">
                    <a href={editUrl} target="_blank">Edit this page on Github</a>
                </p>
            </div>
        </div>
    )
}
