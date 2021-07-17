import util from 'aleph/shared/util.ts'
import { useRouter } from 'aleph/react'
import hljs from 'highlight'
import bash from 'highlight-languages/bash'
import javascript from 'highlight-languages/javascript'
import json from 'highlight-languages/json'
import typescript from 'highlight-languages/typescript'
import xml from 'highlight-languages/xml'
import React, { ComponentType, Fragment, useEffect, useMemo, useState } from 'react'

hljs.registerLanguage('json', json)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('xml', xml) // depended by jsx
hljs.registerLanguage('bash', (hljs: any) => {
  const l = bash(hljs)
  l.keywords.built_in = 'cd deno aleph land'
  return l
})

const about = 'The Documentation for Aleph.js'
const ogImage = 'https://alephjs.org/twitter_card.jpg'
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
          { title: 'Built-in CSS Support', path: '/built-in-css-support' },
          { title: 'SSR & SSG', path: '/ssr-and-ssg' },
          { title: 'Static File Serving', path: '/static-file-serving' },
          { title: 'HMR with Fast Refresh', path: '/hmr-with-fast-refresh' },
          { title: 'Import From NPM', path: '/import-from-npm' },
          { title: 'Import Maps', path: '/import-maps' },
        ]
      },
      {
        title: 'Advanced Features',
        path: '/docs/advanced-features',
        submenu: [
          { title: '`useDeno` Hook', path: '/use-deno-hook' },
          { title: 'Dynamic Importing', path: '/dynamic-importing' },
          { title: 'Custom `App`', path: '/custom-app' },
          { title: 'Custom Error Page', path: '/custom-error-page' },
          { title: 'Custom Server', path: '/custom-server' },
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
      { title: 'Framework API', path: '/docs/api-reference/framework-api' },
      { title: 'Plugin API', path: '/docs/api-reference/plugin-api' },
      {
        title: 'Config',
        path: '/docs/api-reference/config',
        submenu: [
          { title: 'Introduction', path: '/' },
          { title: 'Framework', path: '/framework' },
          { title: 'Base Path', path: '/basepath' },
          { title: 'Build', path: '/build' },
          { title: 'Configuring CSS', path: '/css' },
          { title: 'SSR Options', path: '/ssr' },
          { title: 'I18N', path: '/i18n' },
          { title: 'Server', path: '/server' },
          { title: 'Environment Variables', path: '/env' },
          { title: 'Plugins', path: '/plugins' },
        ]
      },
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
  const [serachWords, setSerachWords] = useState('')
  const navLinks = useMemo<[[string, string] | null, [string, string] | null]>(() => {
    const all: [string, string][] = []
    navMenu.forEach(g => g.items.forEach(item => {
      if (item.submenu) {
        item.submenu.forEach(({ title, path }) => {
          all.push([title, item.path + (path === '/' ? '' : path)])
        })
      } else {
        all.push([item.title, item.path])
      }
    }))
    const index = all.findIndex(([_, path]) => path === currentPath)
    return [all[index - 1] || null, all[index + 1] || null]
  }, [currentPath])
  const editUrl = useMemo(() => {
    const md = routePath === '/docs' ? routePath + '/index.md' : routePath + '.md'
    return 'https://github.com/alephjs/alephjs.org/edit/master/pages' + md
  }, [routePath])
  const title = [Page?.meta.title, !Page?.meta.title.endsWith('Aleph.js') && 'Aleph.js'].filter(Boolean).join(' - ')
  const filteredNavMenu = useMemo(() => {
    if (serachWords === '') {
      return navMenu
    }
    return navMenu.map(g => {
      const includes = (item: any) => item.title.toLowerCase().includes(serachWords)
      return {
        ...g, items: g.items.filter(item => {
          return includes(item) || item.submenu?.some(includes)
        }).map(item => ({ ...item, submenu: item.submenu?.filter(subItem => includes(item) || includes(subItem)) }))
      }
    }).filter(g => g.items.length > 0)
  }, [serachWords])

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
            onChange={util.debounce((e: any) => setSerachWords(e.target.value.trim().toLowerCase()), 150)}
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
          {filteredNavMenu.map(g => (
            <Fragment key={g.name}>
              <h2>{g.name}</h2>
              <ul>
                {g.items.map(item => {
                  if (item.submenu) {
                    return (
                      <Fragment key={item.title + item.path}>
                        <li>
                          <label
                            className={serachWords || extended[item.path] ? 'open' : 'close'}
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
                        {(serachWords || extended[item.path]) && item.submenu.map(({ title, path }) => (
                          <li className="indent" key={title + path}>
                            <a
                              rel="nav"
                              href={item.path + (path === '/' ? '' : path)}
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
        {Page && (
          <nav className="doc-page-nav">
            <div className="page-nav-link">
              {navLinks[0] && (
                <>
                  <span>
                    <svg
                      viewBox="0 0 45.035156 44.982422"
                      style={{
                        width: '1em',
                        height: '1em'
                      }}
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.517578 44.982422 C19.423813 44.982422 16.505873 44.384772 13.763672 43.189453 C11.021471 42.029291 8.630870 40.429698 6.591797 38.390625 C4.552724 36.351552 2.953131 33.960951 1.792969 31.218750 C0.597650 28.511705 0.000000 25.593766 0.000000 22.464844 C0.000000 19.371078 0.597650 16.453139 1.792969 13.710938 C2.953131 11.003893 4.552724 8.630870 6.591797 6.591797 C8.630870 4.552724 11.021471 2.935553 13.763672 1.740234 C16.505873 0.580072 19.423813 -0.000000 22.517578 -0.000000 C25.611344 -0.000000 28.529283 0.580072 31.271484 1.740234 C34.013686 2.935553 36.404287 4.552724 38.443359 6.591797 C40.482432 8.630870 42.082025 11.003893 43.242188 13.710938 C44.437506 16.453139 45.035156 19.371078 45.035156 22.464844 C45.035156 25.593766 44.437506 28.511705 43.242188 31.218750 C42.082025 33.960951 40.482432 36.351552 38.443359 38.390625 C36.404287 40.429698 34.013686 42.029291 31.271484 43.189453 C28.529283 44.384772 25.611344 44.982422 22.517578 44.982422 Z M22.517578 40.500000 C25.013684 40.500000 27.351552 40.025395 29.531250 39.076172 C31.710948 38.126948 33.618156 36.834969 35.252930 35.200195 C36.887703 33.565422 38.179683 31.658214 39.128906 29.478516 C40.042973 27.298817 40.500000 24.960950 40.500000 22.464844 C40.500000 20.003894 40.042973 17.666027 39.128906 15.451172 C38.179683 13.271473 36.887703 11.373055 35.252930 9.755859 C33.618156 8.138664 31.710948 6.855473 29.531250 5.906250 C27.351552 4.957027 25.013684 4.482422 22.517578 4.482422 C20.021472 4.482422 17.683605 4.957027 15.503906 5.906250 C13.324208 6.855473 11.417000 8.138664 9.782227 9.755859 C8.147453 11.373055 6.855473 13.271473 5.906250 15.451172 C4.992183 17.666027 4.535156 20.003894 4.535156 22.464844 C4.535156 24.960950 4.992183 27.298817 5.906250 29.478516 C6.855473 31.658214 8.147453 33.565422 9.782227 35.200195 C11.417000 36.834969 13.324208 38.126948 15.503906 39.076172 C17.683605 40.025395 20.021472 40.500000 22.517578 40.500000 Z M18.931641 20.250000 L31.535156 20.250000 C32.132815 20.250000 32.651365 20.469724 33.090820 20.909180 C33.530276 21.348635 33.750000 21.867185 33.750000 22.464844 C33.750000 23.097659 33.530276 23.633787 33.090820 24.073242 C32.651365 24.512698 32.132815 24.732422 31.535156 24.732422 L18.931641 24.732422 L24.679688 30.427734 C24.855470 30.638673 25.004882 30.875975 25.127930 31.139648 C25.250977 31.403322 25.312500 31.693358 25.312500 32.009766 C25.312500 32.642581 25.092776 33.178709 24.653320 33.618164 C24.213865 34.057619 23.677738 34.277344 23.044922 34.277344 C22.728514 34.277344 22.438478 34.215821 22.174805 34.092773 C21.911131 33.969726 21.673829 33.820313 21.462891 33.644531 L11.917969 24.046875 C11.707030 23.871093 11.548829 23.642580 11.443359 23.361328 C11.337890 23.080077 11.285156 22.781252 11.285156 22.464844 C11.285156 22.148436 11.337890 21.858400 11.443359 21.594727 C11.548829 21.331053 11.707030 21.093751 11.917969 20.882812 L21.462891 11.337891 C21.673829 11.162108 21.911131 11.012696 22.174805 10.889648 C22.438478 10.766601 22.728514 10.705078 23.044922 10.705078 C23.677738 10.705078 24.213865 10.924802 24.653320 11.364258 C25.092776 11.803713 25.312500 12.339841 25.312500 12.972656 C25.312500 13.253908 25.250977 13.535155 25.127930 13.816406 C25.004882 14.097658 24.855470 14.326171 24.679688 14.501953 Z M49.517578 44.982422" fill="currentColor" />
                    </svg>
                  </span>
                  <a href={navLinks[0][1]}>{navLinks[0][0]}</a>
                </>
              )}
            </div>
            <div className="page-nav-link">
              {navLinks[1] && (
                <>
                  <a href={navLinks[1][1]}>{navLinks[1][0]}</a>
                  <span>
                    <svg
                      viewBox="0 0 45.035156 44.982422"
                      style={{
                        width: '1em',
                        height: '1em',
                        transform: 'rotate(180deg)'
                      }}
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.517578 44.982422 C19.423813 44.982422 16.505873 44.384772 13.763672 43.189453 C11.021471 42.029291 8.630870 40.429698 6.591797 38.390625 C4.552724 36.351552 2.953131 33.960951 1.792969 31.218750 C0.597650 28.511705 0.000000 25.593766 0.000000 22.464844 C0.000000 19.371078 0.597650 16.453139 1.792969 13.710938 C2.953131 11.003893 4.552724 8.630870 6.591797 6.591797 C8.630870 4.552724 11.021471 2.935553 13.763672 1.740234 C16.505873 0.580072 19.423813 -0.000000 22.517578 -0.000000 C25.611344 -0.000000 28.529283 0.580072 31.271484 1.740234 C34.013686 2.935553 36.404287 4.552724 38.443359 6.591797 C40.482432 8.630870 42.082025 11.003893 43.242188 13.710938 C44.437506 16.453139 45.035156 19.371078 45.035156 22.464844 C45.035156 25.593766 44.437506 28.511705 43.242188 31.218750 C42.082025 33.960951 40.482432 36.351552 38.443359 38.390625 C36.404287 40.429698 34.013686 42.029291 31.271484 43.189453 C28.529283 44.384772 25.611344 44.982422 22.517578 44.982422 Z M22.517578 40.500000 C25.013684 40.500000 27.351552 40.025395 29.531250 39.076172 C31.710948 38.126948 33.618156 36.834969 35.252930 35.200195 C36.887703 33.565422 38.179683 31.658214 39.128906 29.478516 C40.042973 27.298817 40.500000 24.960950 40.500000 22.464844 C40.500000 20.003894 40.042973 17.666027 39.128906 15.451172 C38.179683 13.271473 36.887703 11.373055 35.252930 9.755859 C33.618156 8.138664 31.710948 6.855473 29.531250 5.906250 C27.351552 4.957027 25.013684 4.482422 22.517578 4.482422 C20.021472 4.482422 17.683605 4.957027 15.503906 5.906250 C13.324208 6.855473 11.417000 8.138664 9.782227 9.755859 C8.147453 11.373055 6.855473 13.271473 5.906250 15.451172 C4.992183 17.666027 4.535156 20.003894 4.535156 22.464844 C4.535156 24.960950 4.992183 27.298817 5.906250 29.478516 C6.855473 31.658214 8.147453 33.565422 9.782227 35.200195 C11.417000 36.834969 13.324208 38.126948 15.503906 39.076172 C17.683605 40.025395 20.021472 40.500000 22.517578 40.500000 Z M18.931641 20.250000 L31.535156 20.250000 C32.132815 20.250000 32.651365 20.469724 33.090820 20.909180 C33.530276 21.348635 33.750000 21.867185 33.750000 22.464844 C33.750000 23.097659 33.530276 23.633787 33.090820 24.073242 C32.651365 24.512698 32.132815 24.732422 31.535156 24.732422 L18.931641 24.732422 L24.679688 30.427734 C24.855470 30.638673 25.004882 30.875975 25.127930 31.139648 C25.250977 31.403322 25.312500 31.693358 25.312500 32.009766 C25.312500 32.642581 25.092776 33.178709 24.653320 33.618164 C24.213865 34.057619 23.677738 34.277344 23.044922 34.277344 C22.728514 34.277344 22.438478 34.215821 22.174805 34.092773 C21.911131 33.969726 21.673829 33.820313 21.462891 33.644531 L11.917969 24.046875 C11.707030 23.871093 11.548829 23.642580 11.443359 23.361328 C11.337890 23.080077 11.285156 22.781252 11.285156 22.464844 C11.285156 22.148436 11.337890 21.858400 11.443359 21.594727 C11.548829 21.331053 11.707030 21.093751 11.917969 20.882812 L21.462891 11.337891 C21.673829 11.162108 21.911131 11.012696 22.174805 10.889648 C22.438478 10.766601 22.728514 10.705078 23.044922 10.705078 C23.677738 10.705078 24.213865 10.924802 24.653320 11.364258 C25.092776 11.803713 25.312500 12.339841 25.312500 12.972656 C25.312500 13.253908 25.250977 13.535155 25.127930 13.816406 C25.004882 14.097658 24.855470 14.326171 24.679688 14.501953 Z M49.517578 44.982422" fill="currentColor" />
                    </svg>
                  </span>
                </>
              )}
            </div>
          </nav>
        )}
        {(Page && Page.meta.editable !== false) && (
          <p className="edit-link">
            Authors:
            {Array.isArray(Page.meta.authors) && Page.meta.authors.map(name => (
              <a
                href={`https://github.com/${name}`}
                target="_blank"
                className="author"
                key={name}
              >@{name}</a>
            ))}
            <span> | </span>
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
