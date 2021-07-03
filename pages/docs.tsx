/// <reference lib="dom" />

import { useRouter } from 'framework/react'
import util from 'aleph/shared/util.ts'
import hljs from 'highlight'
import bash from 'highlight-languages/bash'
import xml from 'highlight-languages/xml'
import json from 'highlight-languages/json'
import javascript from 'highlight-languages/javascript'
import typescript from 'highlight-languages/typescript'
import React, { ComponentType, Fragment, useEffect, useMemo, useState } from 'react'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('json', json)
hljs.registerLanguage('xml', xml) // depended by jsx
hljs.registerLanguage('bash', (hljs: any) => {
  const l = bash(hljs)
  l.keywords.built_in = 'cd deno aleph land'
  return l
})

const ogImage = 'https://alephjs.org/twitter_card.jpg'
const about = 'The Documentation of Aleph.js.'
const navMenu = [
  {
    name: 'Documentation',
    items: [
      { title: 'About Aleph.js', path: '/docs' },
      { title: 'Get Started', path: '/docs/get-started' },
      {
        title: 'Basic Features',
        path: '/docs/basic-features',
        submenu: [
          { title: 'Pages', path: '/pages' },
          { title: 'APIs', path: '/api-routes' },
          { title: 'Routing', path: '/routing' },
          { title: 'SSR & SSG', path: '/ssr-and-ssg' },
          { title: 'HMR with Fast Refresh', path: '/hmr-with-fast-refresh' },
          { title: 'Built-in CSS Support', path: '/built-in-css-support' },
          { title: 'Static File Serving', path: '/static-file-serving' },
          { title: 'Import From NPM', path: '/import-from-npm' },
          { title: 'Import Maps', path: '/import-maps' },
        ]
      },
      {
        title: 'Advanced Features',
        path: '/docs/advanced-features',
        submenu: [
          { title: '`useDeno` Hook', path: '/use-deno-hook' },
          { title: 'Dynamic Import', path: '/dynamic-import' },
          { title: 'Custom `App`', path: '/custom-app' },
          { title: 'Custom Page Meta', path: '/custom-page-meta' },
          { title: 'Custom Error Page', path: '/custom-error-page' },
          { title: 'JSX Magic', path: '/jsx-magic' },
          { title: 'Using Plugins', path: '/using-plugins' },
        ]
      },
      {
        title: 'Plugins',
        path: '/docs/plugins',
        submenu: [
          { title: 'Official Plugins', path: '/official-plugins' },
          { title: 'Community Plugins', path: '/community-plugins' },
        ]
      },
      { title: 'Browser Support', path: '/docs/browser-support' },
      { title: 'Deployment', path: '/docs/deployment' },
    ]
  },
  {
    name: 'API Reference',
    items: [
      { title: 'CLI', path: '/docs/api-reference/cli' },
      { title: 'Config', path: '/docs/api-reference/config' },
      { title: 'Framework API', path: '/docs/api-reference/framework-api' },
      { title: 'Plugin API', path: '/docs/api-reference/plugin-api' },
    ]
  },
  {
    name: 'Design',
    items: [
      { title: 'Artworks', path: '/docs/design/artworks' },
      { title: 'Theme', path: '/docs/design/theme' },
    ]
  },
]

interface Metadata {
  title: string
  authors: string[]
  keywords?: string[]
  editable?: boolean
}

export default function Docs({ Page }: { Page?: ComponentType<any> & { meta: Metadata } }) {
  const { pathname: currentPath, routePath } = useRouter()
  const [extended, setExtended] = useState(() => navMenu.map(m => m.items).flat().filter(item => item.submenu).reduce((m, item) => {
    m[item.path] = routePath.startsWith(item.path)
    return m
  }, {} as Record<string, boolean>))
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const editUrl = useMemo(() => {
    const md = routePath === '/docs' ? routePath + '/index.md' : routePath + '.md'
    return 'https://github.com/alephjs/alephjs.org/edit/master/pages' + md
  }, [routePath])
  const title = [Page?.meta.title, !Page?.meta.title.endsWith('Aleph.js') && 'Aleph.js'].filter(Boolean).join(' - ')

  useEffect(() => {
    document.querySelectorAll('.docs .content pre > code').forEach(block => {
      if (block.className.includes('language-')) {
        hljs.highlightElement(block)
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
                  } else if (j == 0) {
                    const node = document.createTextNode('\n')
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
    document.querySelectorAll('.docs .content video').forEach(block => {
      const v = block as HTMLVideoElement
      v.className = 'is-paused'
      v.addEventListener('click', () => {
        if (v.paused) {
          v.play()
        } else {
          v.requestFullscreen()
        }
      })
      v.addEventListener('playing', () => v.className = 'is-playing')
      v.addEventListener('pause', () => v.className = 'is-paused')
    })
  }, [Page])

  return (
    <div className={['docs', menuIsOpen && 'scroll-lock'].filter(Boolean).join(' ')}>
      <head>
        <title>{title}</title>
        <meta name="description" content={about} />
        {Page?.meta.keywords && (
          <meta name="keywords" content={Page?.meta.keywords.join(',')} />
        )}
        <meta name="og:title" content={title} />
        <meta name="og:description" content={about} />
        <meta name="og:image" content={ogImage} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={about} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alephjs" />
        <link rel="stylesheet" href="~/style/docs.css" />
      </head>
      <aside>
        <div className="search">
          <input
            placeholder="Search..."
            // todo: implement search function
            onChange={util.debounce(() => { alert('Search function is work in progress!') }, 500)}
          />
        </div>
        <div
          className={['menu-button', menuIsOpen && 'open'].filter(Boolean).join(' ')}
          onClick={e => setMenuIsOpen(ok => !ok)}
        >
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7" stroke="#999" strokeLinecap="round"></path>
          </svg>
          Menu
        </div>
        <nav className={menuIsOpen ? 'open' : undefined}>
          {navMenu.map(g => (
            <Fragment key={g.name}>
              <h2>{g.name}</h2>
              <ul>
                {g.items.map(item => {
                  if (item.submenu) {
                    return (
                      <Fragment key={item.title + item.path}>
                        <li>
                          <label
                            className={extended[item.path] ? 'open' : 'close'}
                            onClick={() => setExtended(extended => {
                              extended[item.path] = !extended[item.path]
                              return { ...extended }
                            })}
                          >
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7" stroke="#999" strokeLinecap="round"></path>
                            </svg>
                            {item.title}
                          </label>
                        </li>
                        {extended[item.path] && item.submenu.map(({ title, path }) => (
                          <li className="indent" key={title + path}>
                            <a
                              rel="nav"
                              className={currentPath === item.path + path ? 'active' : undefined}
                              href={item.path + path}
                              onClick={() => setMenuIsOpen(false)}
                            >{title}</a>
                          </li>
                        ))}
                      </Fragment>
                    )
                  } else {
                    return (
                      <li key={item.title + item.path}>
                        <a
                          rel="nav"
                          className={currentPath === item.path ? 'active' : undefined}
                          href={item.path}
                          onClick={() => setMenuIsOpen(false)}
                        >{item.title}</a>
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
        {Page && <Page className="doc-page" />}
        {(Page && Page.meta.editable !== false) && (
          <p className="edit-link">
            <a href={editUrl} target="_blank">Edit this page on Github</a>
          </p>
        )}
        {!(Page && Page.meta.editable !== false) && (
          <div className="bottom-space" />
        )}
      </div>
    </div >
  )
}

function bashPromptSpan(prompt: string = '$') {
  const span = document.createElement('span')
  span.className = 'bash_prompt'
  span.innerText = prompt + ' '
  return span
}
