// Imports route modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var Re=Object.defineProperty;var h=(n,e)=>{for(var se in e)Re(n,se,{get:e[se],enumerable:!0})};import*as Tn from"./index.tsx";import*as Pn from"./docs.tsx";var D={};h(D,{default:()=>Oe});import{Fragment as Ae,jsx as f,jsxs as C}from"https://esm.sh/react@18.2.0/jsx-runtime";function le(n){let e=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre"},n.components);return C(Ae,{children:[f(e.h1,{children:"Browser Support"}),`
`,C(e.p,{children:[`Aleph.js requires a modern browser to support
`,f(e.a,{href:"https://caniuse.com/#feat=es6-module",children:"native ES module imports"})," and ",f(e.strong,{children:`dynamic
imports`}),":"]}),`
`,C(e.ul,{children:[`
`,f(e.li,{children:"Chrome >= 61"}),`
`,f(e.li,{children:"Edge >= 16"}),`
`,f(e.li,{children:"Firefox >= 60"}),`
`,f(e.li,{children:"Safari >= 11"}),`
`,f(e.li,{children:"Opera >= 48"}),`
`]}),`
`,f(e.h2,{children:"Build Target"}),`
`,C(e.p,{children:["Aleph.js uses ",f(e.strong,{children:"esbuild"}),` to bundle modules at optimization time for production.
You can set the `,f(e.code,{children:"optimization.buildTarget"})," in the server config."]}),`
`,f(e.pre,{children:f(e.code,{className:"language-js",children:`import { serve } from "aleph/server";

serve({
  optimization: {
    buildTarget: "es2020",
  },
});
`})})]})}function Ne(n={}){let{wrapper:e}=n.components||{};return e?f(e,Object.assign({},n,{children:f(le,n)})):le(n)}var Oe=Ne;var k={};h(k,{default:()=>Pe});import{Fragment as Xe,jsx as b,jsxs as S}from"https://esm.sh/react@18.2.0/jsx-runtime";function ie(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",a:"a",blockquote:"blockquote"},n.components);return S(Xe,{children:[b(e.h1,{children:"Deployment on your own host with Deno CLI"}),`
`,S(e.p,{children:["You can run your app in production mode by ",b(e.code,{children:"deno"})," CLI."]}),`
`,b(e.pre,{children:b(e.code,{className:"language-bash",children:`deno run --allow-network --allow-env --allow-read --allow-write server.ts
`})}),`
`,b(e.h2,{children:"Deploy on Deno Deploy"}),`
`,S(e.p,{children:["To deploy your app to ",b(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),", please push your app to ",b(e.a,{href:"https://github.com",children:"Github"})," and create a new project on ",b(e.a,{href:"https://dash.deno.com/new",children:"Deno Deploy"}),"."]}),`
`,S(e.p,{children:["Then link to the Repo and set the entrypoint to ",b(e.code,{children:"server.ts"})]}),`
`,S(e.blockquote,{children:[`
`,S(e.p,{children:["See the ",b(e.a,{href:"https://aleph-hello.deno.dev/",children:"hello-world"})," example on ",b(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),"."]}),`
`]})]})}function Te(n={}){let{wrapper:e}=n.components||{};return e?b(e,Object.assign({},n,{children:b(ie,n)})):ie(n)}var Pe=Te;var R={};h(R,{default:()=>Fe});import{Fragment as Le,jsx as r,jsxs as d}from"https://esm.sh/react@18.2.0/jsx-runtime";function ce(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",blockquote:"blockquote",em:"em",code:"code",h2:"h2",ul:"ul",li:"li"},n.components);return d(Le,{children:[r(e.h1,{children:"Aleph.js"}),`
`,d(e.p,{children:[r(e.strong,{children:"Aleph.js"})," (or ",r(e.strong,{children:"Aleph"})," or ",r(e.strong,{children:"\u05D0"})," or ",r(e.strong,{children:"\u963F\u83B1\u592B"}),", ",r("samp",{children:"\u02C8\u0251\u02D0l\u025Bf"}),`) is a
fullstack framework in `,r(e.a,{href:"https://deno.land",children:"Deno"}),". inspired by ",r(e.a,{href:"https://nextjs.org",children:"Next.js"}),", ",r(e.a,{href:"https://remix.run",children:"Remix"})," and ",r(e.a,{href:"https://vitejs.dev",children:"Vite"}),"."]}),`
`,d(e.blockquote,{children:[`
`,d(e.p,{children:["The name is taken from the book ",r(e.a,{href:"http://phinnweb.org/links/literature/borges/aleph.html",children:r(e.em,{children:"The Aleph"})})," by ",r(e.strong,{children:"Jorge Luis Borges"}),"."]}),`
`]}),`
`,d(e.p,{children:["Aleph.js is modern framework that doesn't need ",r(e.strong,{children:"webpack"}),` or other bundler
since it uses the `,r(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",children:"ES Module"}),` syntax during development. Every module only needs
to be compiled once, when a module changes, Aleph.js just needs to re-compile
that single module. There is no time wasted `,r(e.em,{children:"re-bundling"}),` everytime a change is
made. This, along with Hot Module Replacement (`,r(e.strong,{children:"HMR"}),") and ",r(e.strong,{children:"Fast Refresh"}),`,
leads to instant updates in the browser.`]}),`
`,d(e.p,{children:["Aleph.js uses modern tools to build your app. It transpiles code using ",r(e.a,{href:"https://swc.rs",children:"swc"}),` in
WASM with high performance, and bundles modules with `,r(e.a,{href:"https://github.com/evanw/esbuild",children:"esbuild"}),` at optimization
time extremely fast.`]}),`
`,d(e.p,{children:["Aleph.js works on top of ",r(e.strong,{children:"Deno"}),", a ",r(e.em,{children:"simple"}),", ",r(e.em,{children:"modern"})," and ",r(e.em,{children:"secure"}),` runtime for
JavaScript and TypeScript. All dependencies are imported using URLs, and managed
by Deno cache system. No `,r(e.code,{children:"package.json"})," and ",r(e.code,{children:"node_modules"})," directory needed."]}),`
`,r(e.h2,{children:"Features"}),`
`,d(e.ul,{children:[`
`,r(e.li,{children:"Zero Config"}),`
`,r(e.li,{children:"No build step"}),`
`,r(e.li,{children:"File-system Routing"}),`
`,r(e.li,{children:"Just-in-time Server-side Rendering(SSR)"}),`
`,r(e.li,{children:"Streaming SSR"}),`
`,r(e.li,{children:"Support Typescript/JSX in Deno out of the box"}),`
`,d(e.li,{children:["Built-in ",r(e.a,{href:"https://github.com/unocss/unocss",children:"Unocss"})," (automatic CSS)"]}),`
`,r(e.li,{children:"Import Maps"}),`
`,r(e.li,{children:"Hot Module Replacement (or HMR)"}),`
`,r(e.li,{children:"Support Middware"}),`
`,r(e.li,{children:"Custom Module Loader like MDX"}),`
`]}),`
`,r(e.h2,{children:"Supported frameworks"}),`
`,d(e.ul,{children:[`
`,r(e.li,{children:r(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/react-app",children:"React"})}),`
`,r(e.li,{children:r(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/react-mdx-app",children:"React with MDX"})}),`
`,r(e.li,{children:r(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/vue-app",children:"Vue"})}),`
`,d(e.li,{children:[r(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/solid-app",children:"Solid"}),`
`,r(e.em,{children:"Experimental"})]}),`
`,d(e.li,{children:[r(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/yew-app",children:"Yew"})," ",r(e.em,{children:"Rust"})]}),`
`]}),`
`,d(e.p,{children:["Plan to support: ",r(e.a,{href:"https://svelte.dev/",children:"Svelte"}),", ",r(e.a,{href:"https://lit.dev/",children:"Lit"}),", etc.."]}),`
`,r(e.h2,{children:"Examples"}),`
`,d(e.p,{children:["Some demo apps deployed to ",r(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),":"]}),`
`,d(e.ul,{children:[`
`,d(e.li,{children:["React App: ",r(e.a,{href:"https://aleph-hello.deno.dev/",children:"https://aleph-hello.deno.dev/"})]}),`
`,d(e.li,{children:["Vue App: ",r(e.a,{href:"https://aleph-vue.deno.dev/",children:"https://aleph-vue.deno.dev/"})]}),`
`,d(e.li,{children:["REST API: ",r(e.a,{href:"https://aleph-api.deno.dev/",children:"https://aleph-api.deno.dev/"})]}),`
`,d(e.li,{children:["React 18 Suspense SSR: ",r(e.a,{href:"https://aleph-suspense-ssr.deno.dev/",children:"https://aleph-suspense-ssr.deno.dev/"})]}),`
`,d(e.li,{children:["UnoCSS(tailwind): ",r(e.a,{href:"https://aleph-unocss.deno.dev/",children:"https://aleph-unocss.deno.dev/"})]}),`
`,d(e.li,{children:["Monaco Editor: ",r(e.a,{href:"https://aleph-monaco-editor.deno.dev/",children:"https://aleph-monaco-editor.deno.dev/"})]}),`
`,d(e.li,{children:["Yew SSR: ",r(e.a,{href:"https://aleph-yew.deno.dev/",children:"https://aleph-yew.deno.dev/"})]}),`
`,d(e.li,{children:["Github OAuth Middleware: ",r(e.a,{href:"https://aleph-github-oauth.deno.dev/",children:"https://aleph-github-oauth.deno.dev/"})]}),`
`]}),`
`,r(e.h2,{children:"Real-world Apps"}),`
`,d(e.ul,{children:[`
`,d(e.li,{children:["Deno Deploy: ",r(e.a,{href:"https://dash.deno.com",children:"https://dash.deno.com"})]}),`
`,d(e.li,{children:["Meet Me: ",r(e.a,{href:"https://meet-me.deno.dev",children:"https://meet-me.deno.dev"}),`
(`,r(e.a,{href:"https://github.com/denoland/meet-me",children:"source"}),")"]}),`
`]}),`
`,r(e.h2,{children:"Status"}),`
`,d(e.p,{children:["Currently in ",r(e.strong,{children:"beta"}),", not ready for production."]}),`
`,r(e.h2,{children:"License"}),`
`,d(e.p,{children:["Under the ",r(e.a,{href:"https://opensource.org/licenses/MIT",children:"MIT"})," License."]})]})}function $e(n={}){let{wrapper:e}=n.components||{};return e?r(e,Object.assign({},n,{children:r(ce,n)})):ce(n)}var Fe=$e;var A={};h(A,{default:()=>He});import{Fragment as Ie,jsx as u,jsxs as M}from"https://esm.sh/react@18.2.0/jsx-runtime";function de(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",pre:"pre",code:"code"},n.components);return M(Ie,{children:[u(e.h1,{children:"Get Started!"}),`
`,M(e.p,{children:["Welcome to use ",u(e.strong,{children:"Aleph.js"}),"!"]}),`
`,M(e.p,{children:["If you are new to Aleph.js you should check out the ",u(e.a,{href:"/docs/",children:"About"})," page."]}),`
`,u(e.h2,{children:"Usage"}),`
`,u(e.p,{children:"Create a new app:"}),`
`,u(e.pre,{children:u(e.code,{className:"language-bash",children:`deno run -A -r https://alephjs.org/init.ts
`})}),`
`,M(e.p,{children:["Start the app in ",u(e.code,{children:"development"})," mode:"]}),`
`,u(e.pre,{children:u(e.code,{className:"language-bash",children:`deno task dev
`})}),`
`,M(e.p,{children:["Start the app in ",u(e.code,{children:"production"})," mode:"]}),`
`,u(e.pre,{children:u(e.code,{className:"language-bash",children:`deno task start
`})}),`
`,u(e.p,{children:"Optimize the application (bundling, ssg, etc.):"}),`
`,u(e.pre,{children:u(e.code,{className:"language-bash",children:`deno task opt
`})})]})}function qe(n={}){let{wrapper:e}=n.components||{};return e?u(e,Object.assign({},n,{children:u(de,n)})):de(n)}var He=qe;var O={};h(O,{default:()=>Je});import{jsx as N}from"https://esm.sh/react@18.2.0/jsx-runtime";function ae(n){let e=Object.assign({h1:"h1"},n.components);return N(e.h1,{children:"Vue"})}function Ee(n={}){let{wrapper:e}=n.components||{};return e?N(e,Object.assign({},n,{children:N(ae,n)})):ae(n)}var Je=Ee;var T={};h(T,{default:()=>Ue});import{jsx as X}from"https://esm.sh/react@18.2.0/jsx-runtime";function he(n){let e=Object.assign({h1:"h1"},n.components);return X(e.h1,{children:"React with MDX"})}function We(n={}){let{wrapper:e}=n.components||{};return e?X(e,Object.assign({},n,{children:X(he,n)})):he(n)}var Ue=We;var L={};h(L,{default:()=>ze});import{jsx as P}from"https://esm.sh/react@18.2.0/jsx-runtime";function pe(n){let e=Object.assign({h1:"h1"},n.components);return P(e.h1,{children:"SolidJS"})}function Be(n={}){let{wrapper:e}=n.components||{};return e?P(e,Object.assign({},n,{children:P(pe,n)})):pe(n)}var ze=Be;var F={};h(F,{default:()=>Ve});import{jsx as $}from"https://esm.sh/react@18.2.0/jsx-runtime";function ue(n){let e=Object.assign({h1:"h1"},n.components);return $(e.h1,{children:"React"})}function Ge(n={}){let{wrapper:e}=n.components||{};return e?$(e,Object.assign({},n,{children:$(ue,n)})):ue(n)}var Ve=Ge;var q={};h(q,{default:()=>Ze});import{jsx as I}from"https://esm.sh/react@18.2.0/jsx-runtime";function me(n){let e=Object.assign({h1:"h1"},n.components);return I(e.h1,{children:"Yew"})}function Ye(n={}){let{wrapper:e}=n.components||{};return e?I(e,Object.assign({},n,{children:I(me,n)})):me(n)}var Ze=Ye;var H={};h(H,{default:()=>en});import{Fragment as Ke,jsx as t,jsxs as a}from"https://esm.sh/react@18.2.0/jsx-runtime";function ge(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",h2:"h2",a:"a",h4:"h4",ul:"ul",li:"li",blockquote:"blockquote",em:"em"},n.components);return a(Ke,{children:[t(e.h1,{children:"Middleware API"}),`
`,a(e.p,{children:["In Aleph.js, a ",t(e.strong,{children:"Plugin"})," is an object with a ",t(e.code,{children:"name"})," and a ",t(e.code,{children:"setup"}),` method. The
`,t(e.code,{children:"setup"}),` method will be invoked once before the Aleph server runtime is
initialized.`]}),`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`type Plugin = {
  name: string;
  setup(aleph: Aleph): Promise<void> | void;
}
`})}),`
`,t(e.h2,{children:"Writing First Aleph Plugin"}),`
`,t(e.p,{children:`Here's a simple plugin example that allows you to add a virtual dist file to the
server:`}),`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`// aleph.config.ts

import type { Config, Plugin } from 'https://deno.land/x/aleph/types.d.ts'

const helloPlugin: Plugin = {
  name: 'hello-plugin',
  setup: aleph => {
    aleph.addDist(
      'hello.js',
      (new TextEncoder()).encode('console.log("Hello World!")'),
    )
  },
}

export default <Config> {
  plugins: [helloPlugin],
}
`})}),`
`,a(e.p,{children:["then you can download the ",t(e.code,{children:"hello.js"}),` file from
`,t(e.a,{href:"http://localhost:8080/_aleph/hello.js",children:"http://localhost:8080/_aleph/hello.js"})]}),`
`,a(e.h2,{children:["Using ",t(e.code,{children:"Aleph"})," Object"]}),`
`,a(e.p,{children:["The ",t(e.code,{children:"Aleph"}),` object is the server runtime reference of Aleph.js, that allows you
to hack into the server runtime lifecycle.`]}),`
`,t(e.h4,{children:"Properties"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[t(e.strong,{children:t(e.code,{children:"mode"})})," specifies the build mode that should be ",t(e.strong,{children:"'development'"}),` or
`,t(e.strong,{children:"'production'"}),".",`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`{
  name: 'plugin-name',
  setup: aleph => {
    if (aleph.mode === 'development') {
      console.log('development mode')
    }
  }
}
`})}),`
`]}),`
`,a(e.li,{children:[t(e.strong,{children:t(e.code,{children:"workingDir"})})," shows the application absolute path that is a ",t(e.strong,{children:"read-only"}),`
property.`,`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`{
  name: 'plugin-name',
  setup: async aleph => {
    const fp = path.join(aleph.workingDir, 'data.json')
    const data = JSON.parse(await Deno.readFile(fp))
  }
}
`})}),`
`]}),`
`,a(e.li,{children:[t(e.strong,{children:t(e.code,{children:"config"})})," is an object parsed from ",t(e.strong,{children:"'aleph.config.ts'"}),`, you can update it to
add more options, check `,t(e.a,{href:"/docs/api-reference/config",children:"Config"}),` to get more
usage.`,`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`{
  name: 'plugin-name',
  setup: async aleph => {
    aleph.config.env['foo'] = await getEnv('foo')
    aleph.config.server.headers['X-Foo'] = 'bar'
  }
}
`})}),`
`]}),`
`]}),`
`,t(e.h4,{children:"Methods"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[t(e.strong,{children:t(e.code,{children:"fetchModule"})})," fetches and caches the module source content.",`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`{
  name: 'plugin-name',
  setup: async aleph => {
    const { content } = aleph.fetchModule(specifier)
  }
}
`})}),`
`]}),`
`,a(e.li,{children:[t(e.strong,{children:t(e.code,{children:"resolveImport"})})," resolves module import URL.",`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`{
  name: 'plugin-name',
  setup: async aleph => {
    const bundleMode = true
    const forceRefresh = true
    const mod = aleph.addModule('https://deno.land/x/aleph/hello.ts', 'export default { ... }')
    aleph.resolveImport(mod, '/app.tsx') // './-/deno.land/x/aleph/hello.js#XXX'
    aleph.resolveImport(mod, '/app.tsx', !bundleMode, forceRefresh) // './-/deno.land/x/aleph/hello.bundling.js#XXX-TIME'
    aleph.resolveImport(mod, '/app.tsx', bundleMode) // './-/deno.land/x/aleph/hello.bundling.js'
  }
}
`})}),`
`]}),`
`,a(e.li,{children:[t(e.strong,{children:t(e.code,{children:"addDist"})})," adds a virtual dist file to the server, then access it from ",t(e.code,{children:"/_aleph/$NAME"}),".",`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`{
  name: 'plugin-name',
  setup: async aleph => {
    aleph.addDist('hello.js', (new TextEncoder).encode('console.log("Hello World!")'))
  }
}
`})}),`
`]}),`
`,a(e.li,{children:[t(e.strong,{children:t(e.code,{children:"addModule"})})," adds a virtual module to the server, that can be a page, API, or CSS.",`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`{
  name: 'plugin-name',
  setup: async aleph => {
    // adds a virtual module
    aleph.addModule('https://deno.land/x/aleph/hello.ts', 'export default { ... }')
    // adds a virtual module as API
    aleph.addModule('api/hello.ts', 'export const handler = (req) => { ... }')
    // adds a virtual module as Page
    aleph.addModule('pages/hello.tsx', 'export default function Hello() { ... }')
    // adds a virtual style module
    aleph.addModule('style/app.css', 'body { font-family: sans-serif; }')
  }
}
`})}),`
`,a(e.blockquote,{children:[`
`,a(e.p,{children:["The available module type: ",t(e.code,{children:"js"}),", ",t(e.code,{children:"jsx"}),", ",t(e.code,{children:"ts"}),", ",t(e.code,{children:"tsx"})," and ",t(e.code,{children:"css"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,t(e.h4,{children:"Lifecycle Hooks"}),`
`,a(e.ul,{children:[`
`,a(e.li,{children:[t(e.strong,{children:t(e.code,{children:"onResolve"})})," customizes how Aleph does path resolution.",`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`{
  name: 'plugin-name',
  setup: async aleph => {
    aleph.onResolve(/.(md|markdown)$/, specifier => {
      return {
        // rewrite the import specifier to other
        specifier: specifier,
        // allows modules as page when it is in the \`pages/\` dir
        asPage: true,
        // allows modules to be updated at runtime during development
        acceptHMR: true,
        // don't download/compile remote modules, let browser handles it
        external: false,
        // defines any data that will be passed to the next \`onResolve\` hook
        data: {} as any
      }
    })
  }
}
`})}),`
`]}),`
`,a(e.li,{children:[t(e.strong,{children:t(e.code,{children:"onLoad"})}),` allows you to load any content as a JS module, for example load
`,t(e.em,{children:"markdown"})," as pages.",`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`{
  name: 'plugin-name',
  setup: async aleph => {
    // the \`data\` is passed from previous \`onResolve\` hook
    aleph.onLoad(/.(md|markdown)$/, async ({ specifier, data }) => {
      // loads and caches content as \`Uint8Array\` by the specifier
      const { content } = await aleph.loadModule(specifier)
      return {
        // specifies the output code type (Available type: \`css\` | \`js\` | \`jsx\` | \`ts\` | \`tsx\`)
        type: 'js',
        // defines transformed code in above type
        code: mdjs(content),
        // provides source map if available
        map: undefined,
      }
    })
  }
}
`})}),`
`]}),`
`,a(e.li,{children:[t(e.strong,{children:t(e.code,{children:"onTransform"})})," injects code to compiled modules, you need to return an object with modified ",t(e.code,{children:"code"})," or ",t(e.code,{children:"undefined"})," to keep raw code.",`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`{
  name: 'plugin-name',
  setup: async aleph => {
    // inject code to the \`main.js\`
    aleph.onTransform('main', ({ module, code, map }) => {
      return {
        code: code + '\\nconsole.log(":)")',
        map: undefined, // provides source map if available
      }
    })
    // inject code to modules when the HMR is available
    aleph.onTransform('hmr', ({ module, code, map }) => {
      return {
        code: code + '\\nimport.meta.hot.accept(__REACT_REFRESH__)',
        map: undefined, // provides source map if available
      }
    })
    // inject code to page modules
    aleph.onTransform(/pages\\//, ({ module, code, map, bundleMode }) => {
      return {
        code: code + \`\\nconsole.log("current module is \${module.specifier}")\`,
        map: undefined, // provides source map if available
      }
    })
  }
}
`})}),`
`]}),`
`,a(e.li,{children:[t(e.strong,{children:t(e.code,{children:"onRender"})})," modifies the ",t(e.strong,{children:"SSR"})," output HTML and data.",`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`{
  name: 'plugin-name',
  setup: async aleph => {
    aleph.onRender(({ path, html, data }) => {
      html.head.push('<link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Crimson+Pro" />')
    })
  }
}
`})}),`
`]}),`
`]}),`
`,t(e.h2,{children:"Examples"}),`
`,t(e.p,{children:"The example plugins below are meant to give you an idea of the different types of things you can do with the plugin API."}),`
`,t(e.h4,{children:"WASM loader"}),`
`,a(e.p,{children:["This example plugin is a loader allows you to import ",t(e.code,{children:".wasm"})," files into JS module."]}),`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`import type { Plugin } from 'https://deno.land/x/aleph/types.d.ts'

export default <Plugin> {
  name: 'wasm-loader',
  setup: aleph => {
    aleph.onLoad(/\\.wasm$/i, async ({ specifier }) => {
      const { content } = await aleph.fetchModule(specifier)
      return {
        code: [
          \`const wasmBytes = new Uint8Array([\${content.join(',')}])\`,
          'const wasmModule = new WebAssembly.Module(wasmBytes)',
          'const { exports } = new WebAssembly.Instance(wasmModule)',
          'export default exports',
        ].join('\\n'),
      }
    })
  },
}
`})}),`
`,a(e.p,{children:["Now you can import ",t(e.code,{children:".wasm"})," files as ES Module:"]}),`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`import wasm from '../lib/42.wasm'

const answer = wasm.main() // 42
`})}),`
`,t(e.h4,{children:"Tailwind JIT for JSX"}),`
`,t(e.p,{children:"Aleph's compiler will record the static class names in JSX files, with that you can create css on demand for tailwind very easily."}),`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`import { basename } from 'https://deno.land/std/path/mod.ts'
import type { Plugin } from 'https://deno.land/x/aleph/types.d.ts'

export default <Plugin> {
  name: 'tailwind-loader',
  setup: aleph => {
    aleph.onTransform(/\\.(j|t)sx$/i, async ({ module, code, bundleMode }) => {
      const { specifier, deps, sourceHash, jsxStaticClassNames } = module
      if (jsxStaticClassNames?.length) {
        const url = specifier.replace(/\\.(j|t)sx$/i, '') + '.tailwind.css'
        const css = tailwindJITCompile(jsxStaticClassNames)
        const cssModule = await aleph.addModule(url, css, true)

        return {
          // import tailwind css
          code: \`import "\${aleph.resolveImport(cssModule, specifier, bundleMode, true)}";\\n\${code}\`,
          // support SSR
          extraDeps: [{ specifier: url, virtual: true }],
        }
      }
    })
  }
}
`})}),`
`,t(e.h4,{children:"Google Analytics"}),`
`,t(e.p,{children:"This example plugin shows how to insert custom scripts to SSR output HTML."}),`
`,t(e.pre,{children:t(e.code,{className:"language-ts",children:`import { basename } from 'https://deno.land/std/path/mod.ts'
import type { Plugin } from 'https://deno.land/x/aleph/types.d.ts'

export default <Plugin> {
  name: 'google-analytics-plugin',
  setup: aleph => {
    const id = Deno.env.get('GTAID')
    if (id && aleph.mode === 'production') {
      aleph.onRender(({ html }) => {
        html.scripts.push(
          {
            src: \`https://www.googletagmanager.com/gtag/js?id=\${encodeURIComponent(id)}\`,
            async: true
          },
          \`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', \${JSON.stringify(id)});
          \`
        )
      })
    }
  }
}
`})})]})}function Qe(n={}){let{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(ge,n)})):ge(n)}var en=Qe;var E={};h(E,{default:()=>on});import{Fragment as nn,jsx as o,jsxs as c}from"https://esm.sh/react@18.2.0/jsx-runtime";function fe(n){let e=Object.assign({h1:"h1",p:"p",code:"code",h4:"h4",strong:"strong",pre:"pre",ul:"ul",li:"li",em:"em",a:"a",blockquote:"blockquote"},n.components);return c(nn,{children:[o(e.h1,{children:"Config"}),`
`,c(e.p,{children:["For custom advanced behavior of Aleph.js, add an ",o(e.code,{children:"aleph.config.ts"})," file in the root of your project directory."]}),`
`,o(e.h4,{children:"Framework"}),`
`,c(e.p,{children:["Aleph.js is a fullstack framework in Deno. Currently we only support ",o(e.strong,{children:"React"})," as the frontend renderer."]}),`
`,o(e.pre,{children:o(e.code,{className:"language-ts",children:`import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  framework: 'react'
}
`})}),`
`,o(e.h4,{children:"Base Path"}),`
`,c(e.p,{children:[o(e.code,{children:"basePath"})," allows you to set a path prefix for the application."]}),`
`,o(e.pre,{children:o(e.code,{className:"language-ts",children:`import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  basePath: '/docs'
}
`})}),`
`,o(e.h4,{children:"Build"}),`
`,c(e.p,{children:[o(e.code,{children:"build"})," specifies the options for ",o(e.strong,{children:"Build"})," command."]}),`
`,c(e.ul,{children:[`
`,c(e.li,{children:[o(e.strong,{children:"target"}),": ",o(e.code,{children:"string"})," specifies the build target in production mode (default is ",o(e.strong,{children:"'es2015'"}),", available targets: ",o(e.strong,{children:"'es2015'"})," - ",o(e.strong,{children:"'es2021'"}),", and ",o(e.strong,{children:"'esnext'"}),")."]}),`
`,c(e.li,{children:[o(e.strong,{children:"browsers"}),": ",o(e.code,{children:"Record<string, number>"})," adds the target browsers for esbuild (supported browsers: ",o(e.strong,{children:"'chrome'"})," | ",o(e.strong,{children:"'edge'"})," | ",o(e.strong,{children:"'firefox'"})," | ",o(e.strong,{children:"'ios'"})," | ",o(e.strong,{children:"'safari'"}),")."]}),`
`,c(e.li,{children:[o(e.strong,{children:"outputDir"}),": ",o(e.code,{children:"string"})," specifies the output directory for ",o(e.em,{children:"build"})," command (default is ",o(e.strong,{children:"'/dist'"}),")."]}),`
`]}),`
`,o(e.pre,{children:o(e.code,{className:"language-ts",children:`import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  build: {
    target: 'es2015',
    browsers: { chrome: 90, safari: 12 },
    outputDir: '/dist',
  }
}
`})}),`
`,o(e.h4,{children:"Configuring CSS"}),`
`,c(e.p,{children:[o(e.code,{children:"css"})," specifies the css processing options."]}),`
`,c(e.ul,{children:[`
`,c(e.li,{children:[o(e.strong,{children:"cache"}),": ",o(e.code,{children:"boolean"})," caches remote css to local if it equals ",o(e.code,{children:"true"}),"."]}),`
`,c(e.li,{children:[o(e.strong,{children:"postcss"}),": ",o(e.code,{children:"{ plugins: PostCSSPlugin[] }"})," specifies the postcss plugins. The ",o(e.code,{children:"PostCSSPlugin"})," can be a name string that is imported from ",o(e.a,{href:"https://esm.sh",children:"esm.sh"}),"."]}),`
`,c(e.li,{children:[o(e.strong,{children:"modules"}),": ",o(e.code,{children:"CSSModulesOptions"})," specifies CSS modules behavior, the options are passed on to ",o(e.a,{href:"https://github.com/madyankin/postcss-modules",children:"postcss-modules"}),"."]}),`
`]}),`
`,o(e.pre,{children:o(e.code,{className:"language-ts",children:`import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  css: {
    cache: true,
    postcss: { plugins: [ 'autoprefixer' ] },
    modules: {
      scopeBehaviour: 'global', // can be 'global' or 'local'
    }
  }
}
`})}),`
`,o(e.h4,{children:"SSR Options"}),`
`,c(e.p,{children:[o(e.code,{children:"ssr"})," enables ",o(e.strong,{children:"SSR"})," feature for your project, default is enable for all pages."]}),`
`,o(e.pre,{children:o(e.code,{className:"language-ts",children:`import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  ssr: true
}
`})}),`
`,c(e.p,{children:["Mix ",o(e.strong,{children:"SSR"})," and ",o(e.strong,{children:"SPA"}),":"]}),`
`,o(e.pre,{children:o(e.code,{className:"language-ts",children:`export default <Config>{
  ssr: {
    include: [/.html$/],
    exclude: [/^\\/admin\\//],
  }
}
`})}),`
`,c(e.p,{children:["Pure ",o(e.strong,{children:"SPA"})," mode:"]}),`
`,o(e.pre,{children:o(e.code,{className:"language-ts",children:`export default <Config>{
  ssr: false
}
`})}),`
`,o(e.h4,{children:"I18N"}),`
`,c(e.p,{children:[o(e.code,{children:"i18n"})," enables multiple locales for the routing."]}),`
`,o(e.pre,{children:o(e.code,{className:"language-ts",children:`import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  }
}
`})}),`
`,c(e.blockquote,{children:[`
`,c(e.p,{children:["Check ",o(e.a,{href:"/docs/basic-features/routing#i18n-routing",children:"I18n routing"})," documentation for ",o(e.strong,{children:"I18N"})," support."]}),`
`]}),`
`,o(e.h4,{children:"Server Options"}),`
`,c(e.p,{children:[o(e.code,{children:"server"})," specifies the options for ",o(e.strong,{children:"Aleph Server"}),"."]}),`
`,c(e.ul,{children:[`
`,c(e.li,{children:[o(e.strong,{children:"middlewares:"})," ",o(e.code,{children:"APIMiddleware[]"})," a list of ",o(e.em,{children:"Middleware"})," for API requests."]}),`
`,c(e.li,{children:[o(e.strong,{children:"headers"}),": ",o(e.code,{children:"Record<string, string>"})," appends custom headers for server requests."]}),`
`,c(e.li,{children:[o(e.strong,{children:"rewrites"}),": ",o(e.code,{children:"Record<string, string>"})," specifies the server rewrite map."]}),`
`,c(e.li,{children:[o(e.strong,{children:"compress"}),": ",o(e.code,{children:"boolean"})," enables compression(gzip/brotli) for static files and SSR content (default is ",o(e.strong,{children:"true"})," for production mode)."]}),`
`]}),`
`,o(e.pre,{children:o(e.code,{className:"language-ts",children:`import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  server: {
    middlewares: [
      ({ response, data }, next) => {
        response.headers.set('server', 'Aleph.js')
        data.set('foo', 'bar')
        next()
      }
    ],
    headers: {
      'Server': 'Custom'
    },
    rewrites: {
      '/p/[id]': '/blog/[id]'
    },
    compress: true
  }
}
`})}),`
`,o(e.h4,{children:"Plugins"}),`
`,c(e.p,{children:[o(e.code,{children:"plugins"})," provides some plugins to extend Aleph.js runtime."]}),`
`,o(e.pre,{children:o(e.code,{className:"language-ts",children:`import markdown from 'https://deno.land/x/aleph/plugins/markdown.ts'
import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  plugins: [
    markdown()
  ]
}
`})}),`
`,c(e.blockquote,{children:[`
`,c(e.p,{children:["To find Aleph plugins, check our  ",o(e.a,{href:"/docs/plugins/official-plugins",children:"Official Plugins"})," and ",o(e.a,{href:"/docs/plugins/community-plugins",children:"Community Plugins"}),"."]}),`
`]})]})}function tn(n={}){let{wrapper:e}=n.components||{};return e?o(e,Object.assign({},n,{children:o(fe,n)})):fe(n)}var on=tn;var W={};h(W,{default:()=>ln});import{Fragment as rn,jsx as x,jsxs as J}from"https://esm.sh/react@18.2.0/jsx-runtime";function xe(n){let e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",strong:"strong"},n.components);return J(rn,{children:[x(e.h1,{children:"Import Maps"}),`
`,J(e.p,{children:["Aleph.js supports ",x(e.a,{href:"https://github.com/WICG/import-maps",children:"import maps"}),". To use import maps, create a ",x(e.code,{children:"import_map.json"})," file in the root directory:"]}),`
`,x(e.pre,{children:x(e.code,{className:"language-json",children:`{
  "imports": {
    "@/": "./",
    "react": "https://esm.sh/react@17.0.2",
    ...
  }
}
`})}),`
`,x(e.p,{children:"then in your code:"}),`
`,x(e.pre,{children:x(e.code,{className:"language-tsx",children:`import React from "react";
import Logo from "@/components/logo.tsx";

export default function Hi() {
  return <Logo />;
}
`})}),`
`,J(e.p,{children:["If you are using ",x(e.strong,{children:"VS Code"}),", please add below settings to ",x(e.code,{children:".vscode/settings.json"}),":"]}),`
`,x(e.pre,{children:x(e.code,{className:"language-json",children:`{
  "deno.enable": true,
  "deno.unstable": true,
  "deno.importMap": "./import_map.json"
}
`})})]})}function sn(n={}){let{wrapper:e}=n.components||{};return e?x(e,Object.assign({},n,{children:x(xe,n)})):xe(n)}var ln=sn;var U={};h(U,{default:()=>an});import{Fragment as cn,jsx as m,jsxs as _}from"https://esm.sh/react@18.2.0/jsx-runtime";function be(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",ul:"ul",li:"li"},n.components);return _(cn,{children:[m(e.h1,{children:"Static File Serving"}),`
`,_(e.p,{children:["Aleph.js will serve any static files in the ",m(e.code,{children:"public"})," directory. Files inside the ",m(e.code,{children:"public"})," directory can then be referenced by your code by using the base URL (",m(e.code,{children:"/"}),")."]}),`
`,_(e.p,{children:["For example, if you add an image ",m(e.code,{children:"public/logo.png"}),", the following code will access the image:"]}),`
`,m(e.pre,{children:m(e.code,{className:"language-jsx",children:`import React from "https://esm.sh/react"

export default function Logo() {
  return (
    <img src="/logo.png" alt="Logo" />
  )
}
`})}),`
`,m(e.p,{children:"You can also serve other static assets such as:"}),`
`,_(e.ul,{children:[`
`,m(e.li,{children:m(e.code,{children:"favicon.ico"})}),`
`,m(e.li,{children:m(e.code,{children:"manifest.json"})}),`
`,m(e.li,{children:m(e.code,{children:"robots.txt"})}),`
`,m(e.li,{children:"Google Site Verification, etc"}),`
`]})]})}function dn(n={}){let{wrapper:e}=n.components||{};return e?m(e,Object.assign({},n,{children:m(be,n)})):be(n)}var an=dn;var B={};h(B,{default:()=>un});import{Fragment as hn,jsx as i,jsxs as y}from"https://esm.sh/react@18.2.0/jsx-runtime";function ye(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li",strong:"strong"},n.components);return y(hn,{children:[i(e.h1,{children:"Routing"}),`
`,y(e.p,{children:["Aleph.js has a file-system based router. When a file (",i(e.code,{children:".js"}),", ",i(e.code,{children:".jsx"}),", ",i(e.code,{children:".ts"}),`,
`,i(e.code,{children:".tsx"}),", and ",i(e.code,{children:".mjs"}),") is added to the ",i(e.code,{children:"routes"}),` directory, it is automatically
available as a route. You can configruate the `,i(e.code,{children:"router"})," in ",i(e.code,{children:"server.ts"}),"."]}),`
`,i(e.pre,{children:i(e.code,{className:"language-js",children:`// server.ts

import { server } from "aleph/server";

serve({
  router: {
    // use glob
    glob: "./routes/**/*.{tsx,jsx,mdx}",

    // use dir prefix and exts
    dir: "./routes",
    exts: [".tsx", ".jsx", ".mdx"],
  },
});
`})}),`
`,i(e.h3,{children:"Index Routes"}),`
`,y(e.p,{children:["The router will automatically route files named ",i(e.code,{children:"index"}),` to the root of the
directory.`]}),`
`,y(e.ul,{children:[`
`,y(e.li,{children:[i(e.code,{children:"pages/index.tsx"})," \u2192 ",i(e.code,{children:"/"})]}),`
`,y(e.li,{children:[i(e.code,{children:"pages/blog/index.tsx"})," \u2192 ",i(e.code,{children:"/blog"})]}),`
`]}),`
`,i(e.h3,{children:"Dynamic Routes"}),`
`,y(e.p,{children:[`To match a dynamic segment, you can use bracket syntax or start the segment with
`,i(e.strong,{children:"$"}),":"]}),`
`,y(e.ul,{children:[`
`,y(e.li,{children:[i(e.code,{children:"pages/blog/$slug.tsx"})," \u2192 ",i(e.code,{children:"/blog/:slug"})," (",i(e.code,{children:"/blog/hello-world"}),")"]}),`
`,y(e.li,{children:[i(e.code,{children:"pages/$username/settings.tsx"})," \u2192 ",i(e.code,{children:"/:username/settings"})," (",i(e.code,{children:"/foo/settings"}),")"]}),`
`,y(e.li,{children:[i(e.code,{children:"pages/post/$all+.tsx"})," \u2192 ",i(e.code,{children:"/post/*"})," (",i(e.code,{children:"/post/2020/id/title"}),")"]}),`
`]}),`
`,i(e.h3,{children:"Nested Routes"}),`
`,i(e.p,{children:"Aleph.js supports nested route structures like:"}),`
`,y(e.ul,{children:[`
`,i(e.li,{children:i(e.code,{children:"pages/blog.tsx"})}),`
`,i(e.li,{children:i(e.code,{children:"pages/blog/$slug.tsx"})}),`
`]}),`
`,y(e.p,{children:["In the example, routes in ",i(e.code,{children:"/blog/:slug"}),` will be rendered under the
`,i(e.code,{children:"pages/blog.tsx"}),", that is useful to create a ",i(e.strong,{children:"layout"})," for pages:"]}),`
`,i(e.pre,{children:i(e.code,{className:"language-jsx",children:`import BlogHeader from "../components/blog-header.tsx";

export default function Blog({ children }) {
  return (
    <>
      <BlogHeader />
      <div className="blog-body">
        {children}
      </div>
    </>
  );
}
`})})]})}function pn(n={}){let{wrapper:e}=n.components||{};return e?i(e,Object.assign({},n,{children:i(ye,n)})):ye(n)}var un=pn;var z={};h(z,{default:()=>fn});import{Fragment as mn,jsx as v,jsxs as je}from"https://esm.sh/react@18.2.0/jsx-runtime";function we(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",pre:"pre",code:"code"},n.components);return je(mn,{children:[v(e.h1,{children:"Import From NPM"}),`
`,je(e.p,{children:["Aleph.js uses ",v(e.strong,{children:"ESM"})," imports syntax in Deno. To import modules from ",v(e.strong,{children:"NPM"}),", you can use ",v(e.a,{href:"https://esm.sh",children:"esm.sh"})," CDN that is maintained by Aleph.js team."]}),`
`,v(e.pre,{children:v(e.code,{className:"language-jsx",children:`import useSWR from 'https://esm.sh/swr'

export default function About() {
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) {
    return <div>failed to load</div>
  }
  if (!data) {
    return <div>loading...</div>
  }
  return <div>hello {data.name}!</div>
}
`})})]})}function gn(n={}){let{wrapper:e}=n.components||{};return e?v(e,Object.assign({},n,{children:v(we,n)})):we(n)}var fn=gn;var G={};h(G,{default:()=>yn});import{Fragment as xn,jsx as s,jsxs as j}from"https://esm.sh/react@18.2.0/jsx-runtime";function ve(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",pre:"pre",code:"code",h2:"h2",a:"a",em:"em"},n.components);return j(xn,{children:[s(e.h1,{children:"CSS Support"}),`
`,j(e.p,{children:["Aleph.js allows you to import ",s(e.strong,{children:"CSS"})," files with ESM syntax:"]}),`
`,s(e.pre,{children:s(e.code,{className:"language-javascript",children:`import '../style.css'
`})}),`
`,s(e.p,{children:"or external styles:"}),`
`,s(e.pre,{children:s(e.code,{className:"language-javascript",children:`import 'https://esm.sh/tailwindcss/dist/tailwind.min.css'
`})}),`
`,s(e.h2,{children:"How It Works"}),`
`,j(e.p,{children:["Aleph's built-in CSS Loader transpiles ",s(e.code,{children:".css"})," file as JS module that will be ignored in Deno runtime and be applied in browser."]}),`
`,s(e.pre,{children:s(e.code,{className:"language-javascript",children:`import '../style.css';
`})}),`
`,s(e.p,{children:"will become:"}),`
`,s(e.pre,{children:s(e.code,{className:"language-javascript",children:`import '../style.css.js'
`})}),`
`,j(e.p,{children:["the ",s(e.code,{children:"style.css.js"})," file looks like:"]}),`
`,s(e.pre,{children:s(e.code,{className:"language-javascript",children:`import { applyCSS } from 'https://deno.land/x/aleph/framework/core/style.ts'
applyCSS('/style/app.css', \`\${CSS_CODE}\`)

// Support HMR in development mode.
import.meta.hot.accept()
`})}),`
`,j(e.h2,{children:["Using ",s(e.code,{children:"link"})," Tag"]}),`
`,j(e.p,{children:[s(e.strong,{children:"If you import CSS files using ESM syntax above, these CSS files will not be removed when page(component) unmounted."})," To improve this, Aleph's compiler checks all the ",s(e.code,{children:"link"})," JSX elements with ",s(e.code,{children:'rel="stylesheet"'})," then transpiles them as ES modules, and these CSS files will be ",s(e.strong,{children:"cleaned up"})," automatically when current page(component) unmounted (we call it ",s(e.a,{href:"/docs/advanced-features/jsx-magic",children:"JSX Magic"}),")."]}),`
`,s(e.pre,{children:s(e.code,{className:"language-tsx",children:`import React from 'https://esm.sh/react'

export default function App() {
  return (
    <>
      <link rel="stylesheet" href="../style/app.css" />
      <h1>Hi :)</h1>
    </>
  )
}
`})}),`
`,s(e.h2,{children:"Inline CSS"}),`
`,j(e.p,{children:["Aleph.js supports ",s(e.em,{children:"Inline CSS"}),", that means you can write CSS in ",s(e.code,{children:".tsx"})," files directly, this concept is called ",s(e.strong,{children:"CSS-in-JS"}),":"]}),`
`,s(e.pre,{children:s(e.code,{className:"language-tsx",children:`import React from 'https://esm.sh/react'

export default function App() {
  const color = 'black'
  return (
    <>
      <style>{\`
        h1 {
          font-size: 2em;
          color: \${color};
        }
      \`}</style>
      <h1>Hi :)</h1>
    </>
  )
}
`})}),`
`,s(e.h2,{children:"CSS Modules"}),`
`,j(e.p,{children:["Any CSS file ending with ",s(e.code,{children:".module.css"})," is considered a ",s(e.a,{href:"https://github.com/css-modules/css-modules",children:"CSS modules"})," file:"]}),`
`,s(e.pre,{children:s(e.code,{className:"language-tsx",children:`import React from 'https://esm.sh/react'
import styles from '../style/app.module.css'

export default function App() {
  return (
    <>
      <h1 className={styles.title}>Hi :)</h1>
    </>
  )
}
`})}),`
`,j(e.p,{children:["With Aleph's ",s(e.a,{href:"/docs/advanced-features/jsx-magic",children:"JSX Magic"})," you can use the scoped class names via ",s(e.code,{children:"$CLASSNAME"})," magic trick that gives you a better developer experience, when the CSS Modules is loaded by the ",s(e.code,{children:"link"})," tag."]}),`
`,s(e.pre,{children:s(e.code,{className:"language-tsx",children:`import React from 'https://esm.sh/react'

export default function App() {
  return (
    <>
      <link rel="stylesheet" href="../style/app.module.css" />
      <h1 className="$title">Hi :)</h1>
    </>
  )
}
`})}),`
`,j(e.p,{children:["CSS modules behavior can be configured via the ",s(e.code,{children:"css.modules"})," options, the options are passed on to ",s(e.a,{href:"https://github.com/madyankin/postcss-modules",children:"postcss-modules"}),"."]}),`
`,s(e.pre,{children:s(e.code,{className:"language-ts",children:`// aleph.config.ts

export default <Config>{
  css: {
    modules: {
      scopeBehaviour: 'global', // can be 'global' or 'local'
    }
  }
}
`})}),`
`,s(e.h2,{children:"PostCSS"}),`
`,j(e.p,{children:["If the ",s(e.code,{children:"aleph.config.ts"})," contains valid ",s(e.code,{children:"css.postcss"})," config, it will be automatically applied to all imported CSS."]}),`
`,s(e.pre,{children:s(e.code,{className:"language-ts",children:`// aleph.config.ts

export default <Config>{
  css: {
    postcss: {
      plugins: ['postcss-nested', 'autoprefixer']
    }
  }
}
`})}),`
`,s(e.h2,{children:"Global Stylesheet"}),`
`,j(e.p,{children:["To add a global stylesheet to your application, import the CSS files in ",s(e.code,{children:"app.tsx"}),"."]}),`
`,s(e.h2,{children:"CSS Imports (@import)"}),`
`,j(e.p,{children:["Aleph.js use ",s(e.strong,{children:"esbuild"})," to bundle your css code that means you can use ",s(e.code,{children:"@import"})," syntax safety. Or you can put the imported CSS files into the ",s(e.code,{children:"public"})," directory then import them with ",s(e.em,{children:"absolute"})," URLs."]})]})}function bn(n={}){let{wrapper:e}=n.components||{};return e?s(e,Object.assign({},n,{children:s(ve,n)})):ve(n)}var yn=bn;var V={};h(V,{default:()=>vn});import{Fragment as jn,jsx as p,jsxs as w}from"https://esm.sh/react@18.2.0/jsx-runtime";function Se(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",ul:"ul",li:"li",code:"code",h2:"h2",blockquote:"blockquote",a:"a",h3:"h3"},n.components);return w(jn,{children:[p(e.h1,{children:"Hot Module Replacement"}),`
`,w(e.p,{children:["Hot Module Replacement (or HMR) allows modules to be updated at runtime without the need for a full refresh during ",p(e.strong,{children:"development"}),". To support this, Aleph.js's built-in ",p(e.strong,{children:"HMR"})," module creates a ",p(e.strong,{children:"WebSocket"})," connection to the dev server on the client, and the server listens for file changes. Once the HMR client gets an update signal from the server, Aleph.js will re-import the updated module."]}),`
`,p(e.p,{children:"For a CSS module, the old style will be removed after the new one is applied. For a React Component, Fast Refresh will re-render the component view without losing component state."}),`
`,p(e.p,{children:"Aleph.js supports full HMR out-of-the-box for the following served files:"}),`
`,w(e.ul,{children:[`
`,w(e.li,{children:[p(e.strong,{children:"JSX"}),"/",p(e.strong,{children:"TSX"})," in ",p(e.code,{children:"pages"})," and ",p(e.code,{children:"components"})," directory"]}),`
`,w(e.li,{children:["Files loaded by loader plugin with ",p(e.code,{children:"acceptHMR"})," enabled"]}),`
`]}),`
`,p(e.h2,{children:"What Is Fast Refresh"}),`
`,w(e.blockquote,{children:[`
`,w(e.p,{children:[`It's a reimplementation of "hot reloading" with full support from React. It's originally `,p(e.a,{href:"https://twitter.com/dan_abramov/status/1169687758849400832",children:"shipped for React Native"}),", but most of the implementation is platform-independent. The plan is to use it across the board, as a replacement for purely userland solutions (like react-hot-loader). ",p(e.a,{href:"https://github.com/facebook/react/issues/16604#issuecomment-528663101",children:"\xB9"})]}),`
`]}),`
`,p("video",{src:"/fast-refresh.mp4",loop:!0,autoplay:!0,muted:!0}),`
`,p(e.h3,{children:"Limits"}),`
`,w(e.ul,{children:[`
`,p(e.li,{children:"Fast Refresh only supports functional components with hooks."}),`
`,w(e.li,{children:["Functional components using default exports must be named: ",p(e.code,{children:"export default function ComponentName() { ... }"}),"."]}),`
`]})]})}function wn(n={}){let{wrapper:e}=n.components||{};return e?p(e,Object.assign({},n,{children:p(Se,n)})):Se(n)}var vn=wn;var Z={};h(Z,{default:()=>Mn});import{jsx as Y}from"https://esm.sh/react@18.2.0/jsx-runtime";function Me(n){let e=Object.assign({h1:"h1"},n.components);return Y(e.h1,{children:"Server"})}function Sn(n={}){let{wrapper:e}=n.components||{};return e?Y(e,Object.assign({},n,{children:Y(Me,n)})):Me(n)}var Mn=Sn;var K={};h(K,{default:()=>Dn});import{Fragment as Cn,jsx as l,jsxs as g}from"https://esm.sh/react@18.2.0/jsx-runtime";function Ce(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",em:"em",code:"code",pre:"pre",h2:"h2",a:"a",blockquote:"blockquote"},n.components);return g(Cn,{children:[l(e.h1,{children:"Server-side Rendering"}),`
`,g(e.p,{children:["By default, Aleph.js ",l(e.strong,{children:"pre-renders"})," every page. This means that Aleph.js generates HTML for each page in advance, instead of rendering it with client-side JavaScript. Pre-rendering can result in better performance and SEO."]}),`
`,g(e.p,{children:["Each generated HTML page only needs a small amount of JavaScript. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called ",l(e.em,{children:"hydration"}),".)"]}),`
`,g(e.p,{children:["You can disable ",l(e.strong,{children:"SSR"})," functionality in ",l(e.code,{children:"aleph.config.ts"}),":"]}),`
`,l(e.pre,{children:l(e.code,{className:"language-ts",children:`export default <Config>{
  ssr: false, // SPA mode
  ...
}
`})}),`
`,l(e.p,{children:"or specify exclude paths:"}),`
`,l(e.pre,{children:l(e.code,{className:"language-ts",children:`export default <Config>{
  ssr: {
    exclude: [
      /^\\/admin\\//,
      /^\\/dashboard\\//
    ]
  },
  ...
}
`})}),`
`,l(e.h2,{children:"SSR Options"}),`
`,g(e.p,{children:["If you export an object called ",l(e.code,{children:"ssr"})," with a ",l(e.code,{children:"props"})," function from a page, Aleph.js will pre-render this page using the returned props by the ",l(e.code,{children:"props"})," function at build time. The ",l(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/Request",children:l(e.code,{children:"Request"})})," object is passed as the first parameter of the function. (This is equal to ",l(e.code,{children:"getStaticProps"})," of Next.js)"]}),`
`,g(e.p,{children:["The ",l(e.code,{children:"paths"})," in the ",l(e.code,{children:"ssr"})," options returns a static paths if the page is a dynamic route. (This is equal to ",l(e.code,{children:"getStaticPaths"})," of Next.js)"]}),`
`,l(e.pre,{children:l(e.code,{className:"language-tsx",children:`import React from 'https://esm.sh/react'
import type { SSROptions } from 'https://deno.land/x/aleph/types.d.ts'

export const ssr: SSROptions = {
  props: async req => {
    return {
      $revalidate: 1, // revalidate props after 1 second
      username: await auth(req.headers.get('Auth-Token')),
      serverTime: Date.now()
    }
  },
  paths: async () => {
    return []
  }
}

export default function Page(props) {
  return (
    <p>Welcome back {props.username}, the server time is {props.serverTime}</p>
  )
}
`})}),`
`,g(e.p,{children:["We don't provide the ",l(e.code,{children:"getServerSideProps"})," of Next.js, instead we allow the ",l(e.code,{children:"ssr.props"})," access to ",l(e.code,{children:"Request"}),", with ",l(e.code,{children:"$revalidate"})," in the returned props equals ",l(e.code,{children:"true"})," or ",l(e.code,{children:"0"}),", you can complete same thing."]}),`
`,l(e.pre,{children:l(e.code,{className:"language-ts",children:`export const ssr: SSROptions = {
  props: async req => {
    return {
      $revalidate: 0, // revalidate props each request
      username: await auth(req.headers.get('Auth-Token'))
    }
  }
}
`})}),`
`,g(e.h2,{children:[l(e.code,{children:"useDeno"})," hook"]}),`
`,g(e.p,{children:["Aleph.js also provides an ",l(e.code,{children:"useDeno"})," hook to mix the ",l(e.strong,{children:"Deno"})," runtime in your component:"]}),`
`,l(e.pre,{children:l(e.code,{className:"language-tsx",children:`import React from 'https://esm.sh/react'
import { useDeno } from 'https://deno.land/x/aleph/framework/react/mod.ts'

export default function Page() {
  const version = useDeno(() => {
    return Deno.version
  })

  return (
    <p>Powered by Deno v{version.deno}</p>
  )
}
`})}),`
`,g(e.blockquote,{children:[`
`,g(e.p,{children:["To learn more ",l(e.code,{children:"useDeno"}),", check the ",g(e.a,{href:"/docs/advanced-features/use-deno-hook",children:[l(e.code,{children:"useDeno"})," Hook"]})," documentation."]}),`
`]}),`
`,l(e.h2,{children:"Static Site Generation (SSG)"}),`
`,g(e.p,{children:["Aleph.js can export your app as a ",l(e.strong,{children:"static site"})," with rendered htmls, which can be served on any server or CDN."]}),`
`,l(e.pre,{children:l(e.code,{className:"language-bash",children:`$ aleph build
`})}),`
`,g(e.p,{children:["For ",l(e.strong,{children:"dynamic routes"})," with SSR, your can define the ",l(e.strong,{children:"static paths"})," in the ",l(e.code,{children:"ssr"})," options:"]}),`
`,l(e.pre,{children:l(e.code,{className:"language-tsx",children:`// pages/post/[id].tsx

import type { SSROptions } from 'https://deno.land/x/aleph/types.d.ts'

export const ssr: SSROptions = {
  paths: async () => {
    const posts = await (await fetch('https://.../api/posts')).json()
    return posts.map(({ id }) => \`/post/\${id}\`)
  }
}

export default function Post() {
  return (
    <div>...</div>
  )
}
`})}),`
`,g(e.blockquote,{children:[`
`,g(e.p,{children:["See the ",l(e.a,{href:"https://alephjs-hello-world.vercel.app/",children:"hello-world"})," example on ",l(e.a,{href:"https://vercel.com",children:"Vercel"}),"."]}),`
`]})]})}function _n(n={}){let{wrapper:e}=n.components||{};return e?l(e,Object.assign({},n,{children:l(Ce,n)})):Ce(n)}var Dn=_n;var ee={};h(ee,{default:()=>Rn});import{jsx as Q}from"https://esm.sh/react@18.2.0/jsx-runtime";function _e(n){let e=Object.assign({h1:"h1"},n.components);return Q(e.h1,{children:"Unocss"})}function kn(n={}){let{wrapper:e}=n.components||{};return e?Q(e,Object.assign({},n,{children:Q(_e,n)})):_e(n)}var Rn=kn;var te={};h(te,{default:()=>Nn});import{jsx as ne}from"https://esm.sh/react@18.2.0/jsx-runtime";function De(n){let e=Object.assign({h1:"h1"},n.components);return ne(e.h1,{children:"Vue"})}function An(n={}){let{wrapper:e}=n.components||{};return e?ne(e,Object.assign({},n,{children:ne(De,n)})):De(n)}var Nn=An;var re={};h(re,{default:()=>Xn});import{jsx as oe}from"https://esm.sh/react@18.2.0/jsx-runtime";function ke(n){let e=Object.assign({h1:"h1"},n.components);return oe(e.h1,{children:"React"})}function On(n={}){let{wrapper:e}=n.components||{};return e?oe(e,Object.assign({},n,{children:oe(ke,n)})):ke(n)}var Xn=On;var st={"/":Tn,"/docs":Pn,"/docs/browser-support":D,"/docs/deployment":k,"/docs/index":R,"/docs/get-started":A,"/docs/framework/vue":O,"/docs/framework/react-mdx":T,"/docs/framework/solid":L,"/docs/framework/react":F,"/docs/framework/yew":q,"/docs/api-reference/middleware":H,"/docs/api-reference/server-config":E,"/docs/basic-concepts/import-maps":W,"/docs/basic-concepts/static-file-serving":U,"/docs/basic-concepts/routing":B,"/docs/basic-concepts/import-from-npm":z,"/docs/basic-concepts/css-support":G,"/docs/basic-concepts/hmr":V,"/docs/basic-concepts/server":Z,"/docs/basic-concepts/ssr":K,"/docs/basic-concepts/unocss":ee,"/docs/api-reference/framework/vue":te,"/docs/api-reference/framework/react":re,depGraph:{"modules":[{"specifier":"./routes/docs/browser-support.md"},{"specifier":"./routes/docs/deployment.md"},{"specifier":"./routes/docs/index.md"},{"specifier":"./routes/docs/get-started.md"},{"specifier":"./routes/docs/framework/vue.md"},{"specifier":"./routes/docs/framework/react-mdx.md"},{"specifier":"./routes/docs/framework/solid.md"},{"specifier":"./routes/docs/framework/react.md"},{"specifier":"./routes/docs/framework/yew.md"},{"specifier":"./routes/docs/api-reference/middleware.md"},{"specifier":"./routes/docs/api-reference/server-config.md"},{"specifier":"./routes/docs/basic-concepts/import-maps.md"},{"specifier":"./routes/docs/basic-concepts/static-file-serving.md"},{"specifier":"./routes/docs/basic-concepts/routing.md"},{"specifier":"./routes/docs/basic-concepts/import-from-npm.md"},{"specifier":"./routes/docs/basic-concepts/css-support.md"},{"specifier":"./routes/docs/basic-concepts/hmr.md"},{"specifier":"./routes/docs/basic-concepts/server.md"},{"specifier":"./routes/docs/basic-concepts/ssr.md"},{"specifier":"./routes/docs/basic-concepts/unocss.md"},{"specifier":"./routes/docs/api-reference/framework/vue.md"},{"specifier":"./routes/docs/api-reference/framework/react.md"}]}};export{st as default};
