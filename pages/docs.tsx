/// <reference lib="dom" />
import { Head, Import, NavLink, useRouter } from 'https://deno.land/x/aleph/mod.ts'
import util from 'https://deno.land/x/aleph/util.ts'
import hljs from 'https://esm.sh/highlight.js/lib/core'
import bash from 'https://esm.sh/highlight.js/lib/languages/bash'
import javascript from 'https://esm.sh/highlight.js/lib/languages/javascript'
import json from 'https://esm.sh/highlight.js/lib/languages/json'
import typescript from 'https://esm.sh/highlight.js/lib/languages/typescript'
import xml from 'https://esm.sh/highlight.js/lib/languages/xml'
import React, { ComponentType, Fragment, useEffect, useMemo, useState } from 'https://esm.sh/react'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('xml', xml) // dep by jsx
hljs.registerLanguage('bash', (hljs: any) => {
    const l = bash(hljs)
    l.keywords.built_in += ' deno aleph'
    return l
})

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
                    { title: 'Routing', pathname: '/routing' },
                    { title: 'APIs', pathname: '/apis' },
                    { title: 'SSR & SSG', pathname: '/ssr-and-ssg' },
                    { title: 'HMR with Fast Refresh', pathname: '/hmr-with-fast-refresh' },
                    { title: 'Built-in CSS Support', pathname: '/built-in-css-support' },
                    { title: 'Custom Head', pathname: '/custom-head' },
                    { title: 'Static File Serving', pathname: '/static-file-serving' },
                    { title: 'Import Maps', pathname: '/import-maps' },
                ]
            },
            {
                title: 'Advanced Features',
                pathname: '/docs/advanced-features',
                submenu: [
                    { title: '`useDeno` Hook', pathname: '/use-deno-hook' },
                    { title: 'Custom `App`', pathname: '/custom-app' },
                    { title: 'Custom `404` Page', pathname: '/custom-404-page' },
                    { title: 'Custom `Loading` Page', pathname: '/custom-loading-page' },
                    { title: 'Asynchronous Import', pathname: '/asynchronous-import' },
                ]
            },
            { title: 'Browser Support', pathname: '/docs/browser-support' },
            { title: 'Deployment', pathname: '/docs/deployment' },
        ]
    },
    {
        name: 'API Reference',
        items: [
            { title: 'CLI', pathname: '/docs/api-reference/cli' },
            { title: 'types.ts', pathname: '/docs/api-reference/types.ts' },
            { title: 'mod.ts', pathname: '/docs/api-reference/mod.ts' },
            { title: 'aleph.config.js', pathname: '/docs/api-reference/aleph.config.js' },
        ]
    }
]

function bashPromptSpan(prompt: string = '$') {
    const span = document.createElement('span')
    span.className = 'bash_prompt'
    span.innerText = prompt + ' '
    return span
}

interface Metadata {
    title: string
    author: string
    date: string
}

export default function Docs({ Page }: { Page?: ComponentType<any> & { meta: Metadata } }) {
    const { pagePath } = useRouter()
    const [opened, setOpened] = useState(() => navMenu.map(m => m.items).flat().filter(item => item.submenu).reduce((m, item) => {
        m[item.pathname] = pagePath.startsWith(item.pathname)
        return m
    }, {} as Record<string, boolean>))
    const [menuOpened, setMenuOpened] = useState(false)
    const editUrl = useMemo(() => {
        const md = pagePath === '/docs' ? pagePath + '/index.md' : pagePath + '.md'
        return 'https://github.com/postui/alephjs.org/edit/master/pages' + md
    }, [pagePath])

    useEffect(() => {
        document.querySelectorAll('.docs .content video').forEach(block => {
            const v = block as HTMLVideoElement
            v.className = 'is-paused'
            v.addEventListener('click', e => {
                if (v.paused) {
                    v.play()
                } else {
                    v.requestFullscreen()
                }
            })
            v.addEventListener('playing', e => v.className = 'is-playing')
            v.addEventListener('pause', e => v.className = 'is-paused')
        })
        document.querySelectorAll('.docs .content pre > code').forEach(block => {
            if (block.className.includes('language-')) {
                hljs.highlightBlock(block)
            }
            if (block.className.includes('language-bash')) {
                for (let i = 0; i < block.childNodes.length; i++) {
                    const child = block.childNodes[i]
                    if (child.nodeName === '#text') {
                        const text = child.textContent!
                        if (text == '$ ') {
                            block.insertBefore(bashPromptSpan(), child)
                            block.removeChild(child)
                        } else {
                            const texts = text.split('\n$ ')
                            const n = texts.length
                            if (n > 1) {
                                for (let j = 0; j < n; j++) {
                                    const t = texts[j]
                                    if (t) {
                                        const node = document.createTextNode(t + '\n')
                                        block.insertBefore(node, child)
                                    }
                                    if (j > 0) {
                                        block.insertBefore(bashPromptSpan(), child)
                                    }
                                }
                                block.removeChild(child)
                            }
                        }
                    }
                }
            }
        })
    }, [Page])

    return (
        <div className={["docs", menuOpened && 'scroll-lock'].filter(Boolean).join(' ')}>
            <Head>
                <title>{Page?.meta.title} - Aleph.js</title>
            </Head>
            <Import from="../style/docs.less" />
            <aside>
                <div className="search">
                    <input
                        placeholder="Search..."
                        // todo: implement search function
                        onChange={util.debounce(() => { alert('Search function is work in progress!') }, 500)}
                    />
                </div>
                <div
                    className={["menu-button", menuOpened && 'open'].filter(Boolean).join(' ')}
                    onClick={e => setMenuOpened(ok => !ok)}
                >
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7" stroke="#999" strokeLinecap="round"></path>
                    </svg>
                    Menu
                </div>
                <nav className={menuOpened ? 'open' : undefined}>
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
                                                            return { ...opened }
                                                        })}
                                                    >
                                                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7" stroke="#999" strokeLinecap="round"></path>
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
                </nav>
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
