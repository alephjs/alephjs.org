// Imports route modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var Se=Object.defineProperty;var h=(n,e)=>{for(var re in e)Se(n,re,{get:e[re],enumerable:!0})};import*as Kn from"./index.tsx";import*as Qn from"./docs.tsx";var $={};h($,{default:()=>Re});import{Fragment as Ce,jsx as d,jsxs as _}from"https://esm.sh/react@18.2.0/jsx-runtime";function te(n){let e=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre",span:"span"},n.components);return _(Ce,{children:[d(e.h1,{children:"Browser Support"}),`
`,_(e.p,{children:[`Aleph.js requires a modern browser to support
`,d(e.a,{href:"https://caniuse.com/#feat=es6-module",children:"native ES module imports"})," and ",d(e.strong,{children:`dynamic
imports`}),":"]}),`
`,_(e.ul,{children:[`
`,d(e.li,{children:"Chrome >= 61"}),`
`,d(e.li,{children:"Edge >= 16"}),`
`,d(e.li,{children:"Firefox >= 60"}),`
`,d(e.li,{children:"Safari >= 11"}),`
`,d(e.li,{children:"Opera >= 48"}),`
`]}),`
`,d(e.h2,{children:"Build Target"}),`
`,_(e.p,{children:["Aleph.js uses ",d(e.strong,{children:"esbuild"}),` to bundle modules at optimization time for production.
You can set the `,d(e.code,{children:"optimization.buildTarget"})," in the server config."]}),`
`,d(e.pre,{children:_(e.code,{className:"hljs language-js",children:[d(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",d(e.span,{className:"hljs-keyword",children:"from"})," ",d(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,d(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,d(e.span,{className:"hljs-attr",children:"optimization"}),`: {
    `,d(e.span,{className:"hljs-attr",children:"buildTarget"}),": ",d(e.span,{className:"hljs-string",children:'"es2020"'}),`,
  },
});
`]})})]})}function Fe(n={}){let{wrapper:e}=n.components||{};return e?d(e,Object.assign({},n,{children:d(te,n)})):te(n)}var Re=Fe;var T={};h(T,{default:()=>Ae});import{Fragment as Oe,jsx as g,jsxs as y}from"https://esm.sh/react@18.2.0/jsx-runtime";function ce(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",a:"a",blockquote:"blockquote"},n.components);return y(Oe,{children:[g(e.h1,{children:"Deployment on your own host with Deno CLI"}),`
`,y(e.p,{children:["You can run your app in production mode by ",g(e.code,{children:"deno"})," CLI."]}),`
`,g(e.pre,{children:g(e.code,{className:"hljs language-bash",children:`deno run --allow-network --allow-env --allow-read --allow-write server.ts
`})}),`
`,g(e.h2,{children:"Deploy on Deno Deploy"}),`
`,y(e.p,{children:["To deploy your app to ",g(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),", please push your app to ",g(e.a,{href:"https://github.com",children:"Github"})," and create a new project on ",g(e.a,{href:"https://dash.deno.com/new",children:"Deno Deploy"}),"."]}),`
`,y(e.p,{children:["Then link to the Repo and set the entrypoint to ",g(e.code,{children:"server.ts"})]}),`
`,y(e.blockquote,{children:[`
`,y(e.p,{children:["See the ",g(e.a,{href:"https://aleph-hello.deno.dev/",children:"hello-world"})," example on ",g(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),"."]}),`
`]})]})}function Xe(n={}){let{wrapper:e}=n.components||{};return e?g(e,Object.assign({},n,{children:g(ce,n)})):ce(n)}var Ae=Xe;var P={};h(P,{default:()=>$e});import{Fragment as Le,jsx as a,jsxs as m}from"https://esm.sh/react@18.2.0/jsx-runtime";function ie(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",blockquote:"blockquote",em:"em",code:"code",h2:"h2",ul:"ul",li:"li"},n.components);return m(Le,{children:[a(e.h1,{children:"Aleph.js"}),`
`,m(e.p,{children:[a(e.strong,{children:"Aleph.js"})," (or ",a(e.strong,{children:"Aleph"})," or ",a(e.strong,{children:"\u05D0"})," or ",a(e.strong,{children:"\u963F\u83B1\u592B"}),", ",a("samp",{children:"\u02C8\u0251\u02D0l\u025Bf"}),`) is a
fullstack framework in `,a(e.a,{href:"https://deno.land",children:"Deno"}),". Inspired by ",a(e.a,{href:"https://nextjs.org",children:"Next.js"}),", ",a(e.a,{href:"https://remix.run",children:"Remix"})," and ",a(e.a,{href:"https://vitejs.dev",children:"Vite"}),"."]}),`
`,m(e.blockquote,{children:[`
`,m(e.p,{children:["The name is taken from the book ",a(e.a,{href:"http://phinnweb.org/links/literature/borges/aleph.html",children:a(e.em,{children:"The Aleph"})})," by ",a(e.strong,{children:"Jorge Luis Borges"}),"."]}),`
`]}),`
`,m(e.p,{children:["Aleph.js is modern framework that doesn't need ",a(e.strong,{children:"webpack"}),` or other bundler
since it uses the `,a(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",children:"ES Module"}),` syntax during development. Every module only needs
to be compiled once, when a module changes, Aleph.js just needs to re-compile
that single module. There is no time wasted `,a(e.em,{children:"re-bundling"}),` everytime a change is
made. This, along with Hot Module Replacement (`,a(e.strong,{children:"HMR"}),") and ",a(e.strong,{children:"Fast Refresh"}),`,
leads to instant updates in the browser.`]}),`
`,m(e.p,{children:["Aleph.js uses modern tools to build your app. It transpiles code using ",a(e.a,{href:"https://swc.rs",children:"swc"}),` in
WASM with high performance, and bundles modules with `,a(e.a,{href:"https://github.com/evanw/esbuild",children:"esbuild"}),` at optimization
time extremely fast.`]}),`
`,m(e.p,{children:["Aleph.js works on top of ",a(e.strong,{children:"Deno"}),", a ",a(e.em,{children:"simple"}),", ",a(e.em,{children:"modern"})," and ",a(e.em,{children:"secure"}),` runtime for
JavaScript and TypeScript. All dependencies are imported using URLs, and managed
by Deno cache system. No `,a(e.code,{children:"package.json"})," and ",a(e.code,{children:"node_modules"})," directory needed."]}),`
`,a(e.h2,{children:"Features"}),`
`,m(e.ul,{children:[`
`,a(e.li,{children:"Zero Config"}),`
`,a(e.li,{children:"No build step"}),`
`,a(e.li,{children:"File-system Routing"}),`
`,a(e.li,{children:"Just-in-time Server-side Rendering(SSR)"}),`
`,a(e.li,{children:"Streaming SSR"}),`
`,a(e.li,{children:"Support Typescript/JSX in Deno out of the box"}),`
`,m(e.li,{children:["Built-in ",a(e.a,{href:"https://github.com/unocss/unocss",children:"Unocss"})," (automatic CSS)"]}),`
`,a(e.li,{children:"Import Maps"}),`
`,a(e.li,{children:"Hot Module Replacement (or HMR)"}),`
`,a(e.li,{children:"Support Middware"}),`
`,a(e.li,{children:"Custom Module Loader like MDX"}),`
`]}),`
`,a(e.h2,{children:"Supported frameworks"}),`
`,m(e.ul,{children:[`
`,a(e.li,{children:a(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/react-app",children:"React"})}),`
`,a(e.li,{children:a(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/react-mdx-app",children:"React with MDX"})}),`
`,a(e.li,{children:a(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/vue-app",children:"Vue"})}),`
`,m(e.li,{children:[a(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/solid-app",children:"Solid"}),`
`,a(e.em,{children:"Experimental"})]}),`
`,m(e.li,{children:[a(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/yew-app",children:"Yew"})," ",a(e.em,{children:"Rust"})]}),`
`]}),`
`,m(e.p,{children:["Plan to support: ",a(e.a,{href:"https://svelte.dev/",children:"Svelte"}),", ",a(e.a,{href:"https://lit.dev/",children:"Lit"}),", etc.."]}),`
`,a(e.h2,{children:"Examples"}),`
`,m(e.p,{children:["Some demo apps deployed to ",a(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),":"]}),`
`,m(e.ul,{children:[`
`,a(e.li,{children:"React App: https://aleph-hello.deno.dev/"}),`
`,a(e.li,{children:"Vue App: https://aleph-vue.deno.dev/"}),`
`,a(e.li,{children:"REST API: https://aleph-api.deno.dev/"}),`
`,a(e.li,{children:"React 18 Suspense SSR: https://aleph-suspense-ssr.deno.dev/"}),`
`,a(e.li,{children:"UnoCSS(tailwind): https://aleph-unocss.deno.dev/"}),`
`,a(e.li,{children:"Monaco Editor: https://aleph-monaco-editor.deno.dev/"}),`
`,a(e.li,{children:"Yew SSR: https://aleph-yew.deno.dev/"}),`
`,a(e.li,{children:"Github OAuth Middleware: https://aleph-github-oauth.deno.dev/"}),`
`]}),`
`,a(e.h2,{children:"Real-world Apps"}),`
`,m(e.ul,{children:[`
`,a(e.li,{children:"Deno Deploy: https://dash.deno.com"}),`
`,m(e.li,{children:[`Meet Me: https://meet-me.deno.dev
(`,a(e.a,{href:"https://github.com/denoland/meet-me",children:"source"}),")"]}),`
`]}),`
`,a(e.h2,{children:"Status"}),`
`,m(e.p,{children:["Currently in ",a(e.strong,{children:"beta"}),", not ready for production."]}),`
`,a(e.h2,{children:"License"}),`
`,m(e.p,{children:["Under the ",a(e.a,{href:"https://opensource.org/licenses/MIT",children:"MIT"})," License."]})]})}function Ie(n={}){let{wrapper:e}=n.components||{};return e?a(e,Object.assign({},n,{children:a(ie,n)})):ie(n)}var $e=Ie;var W={};h(W,{default:()=>We});import{Fragment as Te,jsx as u,jsxs as M}from"https://esm.sh/react@18.2.0/jsx-runtime";function oe(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",pre:"pre",code:"code"},n.components);return M(Te,{children:[u(e.h1,{children:"Get Started!"}),`
`,M(e.p,{children:["Welcome to use ",u(e.strong,{children:"Aleph.js"}),"!"]}),`
`,M(e.p,{children:["If you are new to Aleph.js you should check out the ",u(e.a,{href:"/docs/",children:"About"})," page."]}),`
`,u(e.h2,{children:"Usage"}),`
`,u(e.p,{children:"Create a new app:"}),`
`,u(e.pre,{children:u(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts
`})}),`
`,M(e.p,{children:["Start the app in ",u(e.code,{children:"development"})," mode:"]}),`
`,u(e.pre,{children:u(e.code,{className:"hljs language-bash",children:`deno task dev
`})}),`
`,M(e.p,{children:["Start the app in ",u(e.code,{children:"production"})," mode:"]}),`
`,u(e.pre,{children:u(e.code,{className:"hljs language-bash",children:`deno task start
`})}),`
`,u(e.p,{children:"Optimize the application (bundling, ssg, etc.):"}),`
`,u(e.pre,{children:u(e.code,{className:"hljs language-bash",children:`deno task opt
`})})]})}function Pe(n={}){let{wrapper:e}=n.components||{};return e?u(e,Object.assign({},n,{children:u(oe,n)})):oe(n)}var We=Pe;var H={};h(H,{default:()=>Ue});import{Fragment as He,jsx as v,jsxs as qe}from"https://esm.sh/react@18.2.0/jsx-runtime";function he(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return qe(He,{children:[v(e.h1,{children:"Vue"}),`
`,v(e.p,{children:v(e.em,{children:"WIP"})})]})}function Ee(n={}){let{wrapper:e}=n.components||{};return e?v(e,Object.assign({},n,{children:v(he,n)})):he(n)}var Ue=Ee;var q={};h(q,{default:()=>Ge});import{Fragment as Je,jsx as k,jsxs as Ye}from"https://esm.sh/react@18.2.0/jsx-runtime";function de(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return Ye(Je,{children:[k(e.h1,{children:"React with MDX"}),`
`,k(e.p,{children:k(e.em,{children:"WIP"})})]})}function Be(n={}){let{wrapper:e}=n.components||{};return e?k(e,Object.assign({},n,{children:k(de,n)})):de(n)}var Ge=Be;var E={};h(E,{default:()=>Ke});import{Fragment as ze,jsx as D,jsxs as Ve}from"https://esm.sh/react@18.2.0/jsx-runtime";function pe(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return Ve(ze,{children:[D(e.h1,{children:"SolidJS"}),`
`,D(e.p,{children:D(e.em,{children:"WIP"})})]})}function Ze(n={}){let{wrapper:e}=n.components||{};return e?D(e,Object.assign({},n,{children:D(pe,n)})):pe(n)}var Ke=Ze;var U={};h(U,{default:()=>sn});import{Fragment as Qe,jsx as S,jsxs as en}from"https://esm.sh/react@18.2.0/jsx-runtime";function me(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return en(Qe,{children:[S(e.h1,{children:"React"}),`
`,S(e.p,{children:S(e.em,{children:"WIP"})})]})}function nn(n={}){let{wrapper:e}=n.components||{};return e?S(e,Object.assign({},n,{children:S(me,n)})):me(n)}var sn=nn;var J={};h(J,{default:()=>tn});import{Fragment as an,jsx as C,jsxs as ln}from"https://esm.sh/react@18.2.0/jsx-runtime";function ue(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return ln(an,{children:[C(e.h1,{children:"Yew"}),`
`,C(e.p,{children:C(e.em,{children:"WIP"})})]})}function rn(n={}){let{wrapper:e}=n.components||{};return e?C(e,Object.assign({},n,{children:C(ue,n)})):ue(n)}var tn=rn;var Y={};h(Y,{default:()=>hn});import{Fragment as cn,jsx as l,jsxs as b}from"https://esm.sh/react@18.2.0/jsx-runtime";function je(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",span:"span",h2:"h2",em:"em",h4:"h4"},n.components);return b(cn,{children:[l(e.h1,{children:"Middleware API"}),`
`,b(e.p,{children:["In Aleph.js, a ",l(e.strong,{children:"Middleware"})," is an object with a ",l(e.code,{children:"name"})," and a ",l(e.code,{children:"fetch"}),` method.
The `,l(e.code,{children:"fetch"}),` method will be invoked when a request is received by the server. And
the `,l(e.code,{children:"fetch"})," method will end the request if returns a ",l(e.code,{children:"Response"})," object."]}),`
`,l(e.pre,{children:b(e.code,{className:"hljs language-ts",children:[l(e.span,{className:"hljs-keyword",children:"type"})," ",l(e.span,{className:"hljs-title class_",children:"Middleware"}),` = {
  `,l(e.span,{className:"hljs-attr",children:"name"}),": ",l(e.span,{className:"hljs-built_in",children:"string"}),`;
  `,l(e.span,{className:"hljs-title function_",children:"fetch"}),"(",l(e.span,{className:"hljs-attr",children:"req"}),": ",l(e.span,{className:"hljs-title class_",children:"Request"}),", ",l(e.span,{className:"hljs-attr",children:"context"}),": ",l(e.span,{className:"hljs-title class_",children:"Context"}),"): ",l(e.span,{className:"hljs-title class_",children:"Promise"}),"<",l(e.span,{className:"hljs-title class_",children:"Response"}),"> | ",l(e.span,{className:"hljs-title class_",children:"Response"})," | ",l(e.span,{className:"hljs-built_in",children:"void"}),`;
};
`]})}),`
`,l(e.h2,{children:"Use Middlewares"}),`
`,l(e.p,{children:`Here's a simple plugin example that allows you to add a virtual dist file to the
server:`}),`
`,l(e.pre,{children:b(e.code,{className:"hljs language-ts",children:[l(e.span,{className:"hljs-comment",children:"// server.ts"}),`

`,l(e.span,{className:"hljs-keyword",children:"import"})," foo ",l(e.span,{className:"hljs-keyword",children:"from"})," ",l(e.span,{className:"hljs-string",children:'"./middleware/foo.ts"'}),`;

`,l(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,l(e.span,{className:"hljs-attr",children:"middlewares"}),`: [
    foo,
    {
      `,l(e.span,{className:"hljs-attr",children:"name"}),": ",l(e.span,{className:"hljs-string",children:'"my-middleware"'}),`,
      `,l(e.span,{className:"hljs-title function_",children:"fetch"}),"(",l(e.span,{className:"hljs-params",children:"req"}),`) {
        `,l(e.span,{className:"hljs-keyword",children:"if"})," (req.",l(e.span,{className:"hljs-property",children:"url"})," === ",l(e.span,{className:"hljs-string",children:'"/my-middleware"'}),`) {
          `,l(e.span,{className:"hljs-keyword",children:"return"})," ",l(e.span,{className:"hljs-keyword",children:"new"})," ",l(e.span,{className:"hljs-title class_",children:"Response"}),"(",l(e.span,{className:"hljs-string",children:'"Hello, Middleware!"'}),`);
        }
      },
    },
  ],
});
`]})}),`
`,b(e.h2,{children:["Use ",l(e.code,{children:"Context"})," Object"]}),`
`,l(e.p,{children:l(e.em,{children:"WIP"})}),`
`,l(e.h2,{children:"Examples"}),`
`,l(e.p,{children:`The example plugins below are meant to give you an idea of the different types
of things you can do with the plugin API.`}),`
`,l(e.h4,{children:"Google Analytics"}),`
`,l(e.p,{children:"This example plugin shows how to insert custom scripts to SSR output HTML using middleware."}),`
`,l(e.pre,{children:b(e.code,{className:"hljs language-ts",children:[l(e.span,{className:"hljs-comment",children:"// wIP"}),`
`]})})]})}function on(n={}){let{wrapper:e}=n.components||{};return e?l(e,Object.assign({},n,{children:l(je,n)})):je(n)}var hn=on;var B={};h(B,{default:()=>un});import{Fragment as dn,jsx as F,jsxs as pn}from"https://esm.sh/react@18.2.0/jsx-runtime";function ge(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return pn(dn,{children:[F(e.h1,{children:"Server Config"}),`
`,F(e.p,{children:F(e.em,{children:"WIP"})})]})}function mn(n={}){let{wrapper:e}=n.components||{};return e?F(e,Object.assign({},n,{children:F(ge,n)})):ge(n)}var un=mn;var G={};h(G,{default:()=>fn});import{Fragment as jn,jsx as r,jsxs as R}from"https://esm.sh/react@18.2.0/jsx-runtime";function fe(n){let e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",span:"span"},n.components);return R(jn,{children:[r(e.h1,{children:"Import Maps"}),`
`,R(e.p,{children:["Aleph.js supports ",r(e.a,{href:"https://github.com/WICG/import-maps",children:"import maps"}),". To use import maps, create a ",r(e.code,{children:"import_map.json"})," file in the root directory:"]}),`
`,r(e.pre,{children:R(e.code,{className:"hljs language-json",children:[r(e.span,{className:"hljs-punctuation",children:"{"}),`
  `,r(e.span,{className:"hljs-attr",children:'"imports"'}),r(e.span,{className:"hljs-punctuation",children:":"})," ",r(e.span,{className:"hljs-punctuation",children:"{"}),`
    `,r(e.span,{className:"hljs-attr",children:'"@/"'}),r(e.span,{className:"hljs-punctuation",children:":"})," ",r(e.span,{className:"hljs-string",children:'"./"'}),r(e.span,{className:"hljs-punctuation",children:","}),`
    `,r(e.span,{className:"hljs-attr",children:'"react"'}),r(e.span,{className:"hljs-punctuation",children:":"})," ",r(e.span,{className:"hljs-string",children:'"https://esm.sh/react@18.2.0"'}),r(e.span,{className:"hljs-punctuation",children:","}),`
    ...
  `,r(e.span,{className:"hljs-punctuation",children:"}"}),`
`,r(e.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,r(e.p,{children:"then in your code:"}),`
`,r(e.pre,{children:R(e.code,{className:"hljs language-tsx",children:[r(e.span,{className:"hljs-keyword",children:"import"})," ",r(e.span,{className:"hljs-title class_",children:"React"})," ",r(e.span,{className:"hljs-keyword",children:"from"})," ",r(e.span,{className:"hljs-string",children:'"react"'}),`;
`,r(e.span,{className:"hljs-keyword",children:"import"})," ",r(e.span,{className:"hljs-title class_",children:"Logo"})," ",r(e.span,{className:"hljs-keyword",children:"from"})," ",r(e.span,{className:"hljs-string",children:'"@/components/logo.tsx"'}),`;

`,r(e.span,{className:"hljs-keyword",children:"export"})," ",r(e.span,{className:"hljs-keyword",children:"default"})," ",r(e.span,{className:"hljs-keyword",children:"function"})," ",r(e.span,{className:"hljs-title function_",children:"App"}),"(",r(e.span,{className:"hljs-params"}),`) {
  `,r(e.span,{className:"hljs-keyword",children:"return"})," ",r(e.span,{className:"xml",children:R(e.span,{className:"hljs-tag",children:["<",r(e.span,{className:"hljs-name",children:"Logo"})," />"]})}),`;
}
`]})})]})}function gn(n={}){let{wrapper:e}=n.components||{};return e?r(e,Object.assign({},n,{children:r(fe,n)})):fe(n)}var fn=gn;var z={};h(z,{default:()=>yn});import{Fragment as Nn,jsx as i,jsxs as w}from"https://esm.sh/react@18.2.0/jsx-runtime";function Ne(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",ul:"ul",li:"li"},n.components);return w(Nn,{children:[i(e.h1,{children:"Static File Serving"}),`
`,w(e.p,{children:["Aleph.js will serve any static files in the project directory. Files inside the project directory can then be referenced by your code by using the base URL (",i(e.code,{children:"/"}),")."]}),`
`,w(e.p,{children:["For example, if you add an image ",i(e.code,{children:"assets/logo.png"}),", the following code will access the image:"]}),`
`,i(e.pre,{children:w(e.code,{className:"hljs language-jsx",children:[i(e.span,{className:"hljs-keyword",children:"export"})," ",i(e.span,{className:"hljs-keyword",children:"default"})," ",i(e.span,{className:"hljs-keyword",children:"function"})," ",i(e.span,{className:"hljs-title function_",children:"Logo"}),"(",i(e.span,{className:"hljs-params"}),`) {
  `,i(e.span,{className:"hljs-keyword",children:"return"}),` (
    `,i(e.span,{className:"xml",children:w(e.span,{className:"hljs-tag",children:["<",i(e.span,{className:"hljs-name",children:"img"})," ",i(e.span,{className:"hljs-attr",children:"src"}),"=",i(e.span,{className:"hljs-string",children:'"/assets/logo.png"'})," ",i(e.span,{className:"hljs-attr",children:"alt"}),"=",i(e.span,{className:"hljs-string",children:'"Logo"'})," />"]})}),`
  )
}
`]})}),`
`,i(e.p,{children:"You can also serve other static assets such as:"}),`
`,w(e.ul,{children:[`
`,i(e.li,{children:i(e.code,{children:"favicon.ico"})}),`
`,i(e.li,{children:i(e.code,{children:"manifest.json"})}),`
`,i(e.li,{children:i(e.code,{children:"robots.txt"})}),`
`,i(e.li,{children:"Google Site Verification, etc"}),`
`]})]})}function xn(n={}){let{wrapper:e}=n.components||{};return e?i(e,Object.assign({},n,{children:i(Ne,n)})):Ne(n)}var yn=xn;var V={};h(V,{default:()=>_n});import{Fragment as bn,jsx as s,jsxs as p}from"https://esm.sh/react@18.2.0/jsx-runtime";function xe(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li",strong:"strong"},n.components);return p(bn,{children:[s(e.h1,{children:"Routing"}),`
`,p(e.p,{children:["Aleph.js has a file-system based router. When a file (",s(e.code,{children:".js"}),", ",s(e.code,{children:".jsx"}),", ",s(e.code,{children:".ts"}),`,
`,s(e.code,{children:".tsx"}),", and ",s(e.code,{children:".mjs"}),") is added to the ",s(e.code,{children:"routes"}),` directory, it is automatically
available as a route.`]}),`
`,p(e.p,{children:["You can configruate the ",s(e.code,{children:"router"})," in ",s(e.code,{children:"server.ts"}),"."]}),`
`,s(e.pre,{children:p(e.code,{className:"hljs language-js",children:[s(e.span,{className:"hljs-comment",children:"// server.ts"}),`

`,s(e.span,{className:"hljs-keyword",children:"import"})," { server } ",s(e.span,{className:"hljs-keyword",children:"from"})," ",s(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,s(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,s(e.span,{className:"hljs-attr",children:"router"}),`: {
    `,s(e.span,{className:"hljs-comment",children:"// use glob"}),`
    `,s(e.span,{className:"hljs-attr",children:"glob"}),": ",s(e.span,{className:"hljs-string",children:'"./routes/**/*.{tsx,jsx,mdx}"'}),`,

    `,s(e.span,{className:"hljs-comment",children:"// use dir prefix and exts"}),`
    `,s(e.span,{className:"hljs-attr",children:"dir"}),": ",s(e.span,{className:"hljs-string",children:'"./routes"'}),`,
    `,s(e.span,{className:"hljs-attr",children:"exts"}),": [",s(e.span,{className:"hljs-string",children:'".tsx"'}),", ",s(e.span,{className:"hljs-string",children:'".jsx"'}),", ",s(e.span,{className:"hljs-string",children:'".mdx"'}),`],
  },
});
`]})}),`
`,s(e.h3,{children:"Index Routes"}),`
`,p(e.p,{children:["The router will automatically route files named ",s(e.code,{children:"index"}),` to the root of the
directory.`]}),`
`,p(e.ul,{children:[`
`,p(e.li,{children:[s(e.code,{children:"pages/index.tsx"})," \u2192 ",s(e.code,{children:"/"})]}),`
`,p(e.li,{children:[s(e.code,{children:"pages/blog/index.tsx"})," \u2192 ",s(e.code,{children:"/blog"})]}),`
`]}),`
`,s(e.h3,{children:"Dynamic Routes"}),`
`,p(e.p,{children:[`To match a dynamic segment, you can use bracket syntax or start the segment with
`,s(e.strong,{children:"$"}),":"]}),`
`,p(e.ul,{children:[`
`,p(e.li,{children:[s(e.code,{children:"pages/blog/$slug.tsx"})," \u2192 ",s(e.code,{children:"/blog/:slug"})," (",s(e.code,{children:"/blog/hello-world"}),")"]}),`
`,p(e.li,{children:[s(e.code,{children:"pages/$username/settings.tsx"})," \u2192 ",s(e.code,{children:"/:username/settings"})," (",s(e.code,{children:"/foo/settings"}),")"]}),`
`,p(e.li,{children:[s(e.code,{children:"pages/post/$all+.tsx"})," \u2192 ",s(e.code,{children:"/post/*"})," (",s(e.code,{children:"/post/2020/id/title"}),")"]}),`
`]}),`
`,s(e.h3,{children:"Nested Routes"}),`
`,s(e.p,{children:"Aleph.js supports nested route structures like:"}),`
`,p(e.ul,{children:[`
`,s(e.li,{children:s(e.code,{children:"pages/blog.tsx"})}),`
`,s(e.li,{children:s(e.code,{children:"pages/blog/$slug.tsx"})}),`
`]}),`
`,p(e.p,{children:["In the example, routes in ",s(e.code,{children:"/blog/:slug"}),` will be rendered under the
`,s(e.code,{children:"pages/blog.tsx"}),", that is useful to create a ",s(e.strong,{children:"layout"})," for pages:"]}),`
`,s(e.pre,{children:p(e.code,{className:"hljs language-jsx",children:[s(e.span,{className:"hljs-keyword",children:"import"})," ",s(e.span,{className:"hljs-title class_",children:"BlogHeader"})," ",s(e.span,{className:"hljs-keyword",children:"from"})," ",s(e.span,{className:"hljs-string",children:'"../components/blog-header.tsx"'}),`;

`,s(e.span,{className:"hljs-keyword",children:"export"})," ",s(e.span,{className:"hljs-keyword",children:"default"})," ",s(e.span,{className:"hljs-keyword",children:"function"})," ",s(e.span,{className:"hljs-title function_",children:"Blog"}),"(",s(e.span,{className:"hljs-params",children:"{ children }"}),`) {
  `,s(e.span,{className:"hljs-keyword",children:"return"}),` (
    `,p(e.span,{className:"xml",children:[s(e.span,{className:"hljs-tag",children:"<>"}),`
      `,p(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"BlogHeader"})," />"]}),`
      `,p(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"div"})," ",s(e.span,{className:"hljs-attr",children:"className"}),"=",s(e.span,{className:"hljs-string",children:'"blog-body"'}),">"]}),`
        {children}
      `,p(e.span,{className:"hljs-tag",children:["</",s(e.span,{className:"hljs-name",children:"div"}),">"]}),`
    `,s(e.span,{className:"hljs-tag",children:"</>"})]}),`
  );
}
`]})})]})}function wn(n={}){let{wrapper:e}=n.components||{};return e?s(e,Object.assign({},n,{children:s(xe,n)})):xe(n)}var _n=wn;var Z={};h(Z,{default:()=>kn});import{Fragment as Mn,jsx as t,jsxs as f}from"https://esm.sh/react@18.2.0/jsx-runtime";function ye(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",pre:"pre",code:"code",span:"span",h2:"h2"},n.components);return f(Mn,{children:[t(e.h1,{children:"Import From NPM"}),`
`,f(e.p,{children:["Aleph.js uses ",t(e.strong,{children:"ESM"})," imports syntax in Deno. To import modules from ",t(e.strong,{children:"NPM"}),", you can use ",t(e.a,{href:"https://esm.sh",children:"esm.sh"})," CDN that is maintained by Aleph.js team."]}),`
`,t(e.pre,{children:f(e.code,{className:"hljs language-jsx",children:[t(e.span,{className:"hljs-keyword",children:"import"})," useSWR ",t(e.span,{className:"hljs-keyword",children:"from"})," ",t(e.span,{className:"hljs-string",children:"'https://esm.sh/swr'"}),`

`,t(e.span,{className:"hljs-keyword",children:"export"})," ",t(e.span,{className:"hljs-keyword",children:"default"})," ",t(e.span,{className:"hljs-keyword",children:"function"})," ",t(e.span,{className:"hljs-title function_",children:"About"}),"(",t(e.span,{className:"hljs-params"}),`) {
  `,t(e.span,{className:"hljs-keyword",children:"const"})," { data, error } = ",t(e.span,{className:"hljs-title function_",children:"useSWR"}),"(",t(e.span,{className:"hljs-string",children:"'/api/user'"}),`, fetcher)

  `,t(e.span,{className:"hljs-keyword",children:"if"}),` (error) {
    `,t(e.span,{className:"hljs-keyword",children:"return"})," ",f(e.span,{className:"xml",children:[f(e.span,{className:"hljs-tag",children:["<",t(e.span,{className:"hljs-name",children:"div"}),">"]}),"failed to load",f(e.span,{className:"hljs-tag",children:["</",t(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`
  }
  `,t(e.span,{className:"hljs-keyword",children:"if"}),` (!data) {
    `,t(e.span,{className:"hljs-keyword",children:"return"})," ",f(e.span,{className:"xml",children:[f(e.span,{className:"hljs-tag",children:["<",t(e.span,{className:"hljs-name",children:"div"}),">"]}),"loading...",f(e.span,{className:"hljs-tag",children:["</",t(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`
  }
  `,t(e.span,{className:"hljs-keyword",children:"return"})," ",f(e.span,{className:"xml",children:[f(e.span,{className:"hljs-tag",children:["<",t(e.span,{className:"hljs-name",children:"div"}),">"]}),"hello {data.name}!",f(e.span,{className:"hljs-tag",children:["</",t(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`
}
`]})}),`
`,t(e.h2,{children:"Next"}),`
`,t(e.p,{children:"Deno is adding built-in npm support: https://deno.com/blog/changes#compatibility-with-node-and-npm"})]})}function vn(n={}){let{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(ye,n)})):ye(n)}var kn=vn;var K={};h(K,{default:()=>Cn});import{Fragment as Dn,jsx as o,jsxs as j}from"https://esm.sh/react@18.2.0/jsx-runtime";function be(n){let e=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",pre:"pre",span:"span",h2:"h2",a:"a"},n.components);return j(Dn,{children:[o(e.h1,{children:"CSS Support"}),`
`,j(e.p,{children:["Aleph.js use the ",o(e.code,{children:"index.html"})," as page entry, that means you can add any ",o(e.strong,{children:"CSS"})," files with ",o(e.code,{children:"link"})]}),`
`,o(e.pre,{children:j(e.code,{className:"hljs language-html",children:[j(e.span,{className:"hljs-tag",children:["<",o(e.span,{className:"hljs-name",children:"html"}),">"]}),`
  `,j(e.span,{className:"hljs-tag",children:["<",o(e.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,j(e.span,{className:"hljs-tag",children:["<",o(e.span,{className:"hljs-name",children:"title"}),">"]}),"Hello, World!",j(e.span,{className:"hljs-tag",children:["</",o(e.span,{className:"hljs-name",children:"title"}),">"]}),`
    `,j(e.span,{className:"hljs-tag",children:["<",o(e.span,{className:"hljs-name",children:"link"})," ",o(e.span,{className:"hljs-attr",children:"rel"}),"=",o(e.span,{className:"hljs-string",children:'"stylesheet"'})," ",o(e.span,{className:"hljs-attr",children:"href"}),"=",o(e.span,{className:"hljs-string",children:'"./style/app.css"'}),">"]}),`
  `,j(e.span,{className:"hljs-tag",children:["</",o(e.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,j(e.span,{className:"hljs-tag",children:["<",o(e.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,j(e.span,{className:"hljs-tag",children:["<",o(e.span,{className:"hljs-name",children:"h1"}),">"]}),"Hello, World!",j(e.span,{className:"hljs-tag",children:["</",o(e.span,{className:"hljs-name",children:"h1"}),">"]}),`
  `,j(e.span,{className:"hljs-tag",children:["</",o(e.span,{className:"hljs-name",children:"body"}),">"]}),`
`,j(e.span,{className:"hljs-tag",children:["</",o(e.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,j(e.h2,{children:["CSS Imports (",o(e.code,{children:"@import"}),")"]}),`
`,j(e.p,{children:["Aleph.js uses ",o(e.a,{href:"https://lightningcss.dev/",children:"lightningcss"})," to bundle your CSS code that means you can use ",o(e.code,{children:"@import"})," syntax safety."]})]})}function Sn(n={}){let{wrapper:e}=n.components||{};return e?o(e,Object.assign({},n,{children:o(be,n)})):be(n)}var Cn=Sn;var Q={};h(Q,{default:()=>On});import{Fragment as Fn,jsx as c,jsxs as x}from"https://esm.sh/react@18.2.0/jsx-runtime";function we(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",span:"span",h2:"h2",blockquote:"blockquote",a:"a",h3:"h3",ul:"ul",li:"li"},n.components);return x(Fn,{children:[c(e.h1,{children:"Hot Module Replacement"}),`
`,x(e.p,{children:["Hot Module Replacement (or HMR) allows modules to be updated at runtime without the need for a full refresh during ",c(e.strong,{children:"development"}),". To support this, Aleph.js's built-in ",c(e.strong,{children:"HMR"})," module creates a ",c(e.strong,{children:"WebSocket"})," connection to the dev server on the client, and the server listens for file changes. Once the HMR client gets an update signal from the server, Aleph.js will re-import the updated module."]}),`
`,c(e.p,{children:"For a CSS module, the old style will be removed after the new one is applied. For a React Component, Fast Refresh will re-render the component view without losing component state."}),`
`,x(e.p,{children:["You can use the ",c(e.code,{children:"hot"})," api to handle the module update event."]}),`
`,c(e.pre,{children:x(e.code,{className:"hljs language-js",children:[c(e.span,{className:"hljs-keyword",children:"import"}),".",c(e.span,{className:"hljs-property",children:"meta"}),".",c(e.span,{className:"hljs-property",children:"hot"}),"?.",c(e.span,{className:"hljs-title function_",children:"accept"}),"(",x(e.span,{className:"hljs-function",children:["(",c(e.span,{className:"hljs-params",children:"mod"}),")=>"]}),`{
  `,c(e.span,{className:"hljs-comment",children:"// update UI"}),`
})

`,c(e.span,{className:"hljs-comment",children:"// just reload the page when the module is updated"}),`
`,c(e.span,{className:"hljs-keyword",children:"import"}),".",c(e.span,{className:"hljs-property",children:"meta"}),".",c(e.span,{className:"hljs-property",children:"hot"}),"?.",c(e.span,{className:"hljs-title function_",children:"decline"}),`()
`]})}),`
`,c(e.h2,{children:"React Fast Refresh"}),`
`,x(e.blockquote,{children:[`
`,x(e.p,{children:[`It's a reimplementation of "hot reloading" with full support from React. It's originally `,c(e.a,{href:"https://twitter.com/dan_abramov/status/1169687758849400832",children:"shipped for React Native"}),", but most of the implementation is platform-independent. The plan is to use it across the board, as a replacement for purely userland solutions (like react-hot-loader). ",c(e.a,{href:"https://github.com/facebook/react/issues/16604#issuecomment-528663101",children:"\xB9"})]}),`
`]}),`
`,c("video",{src:"/fast-refresh.mp4",loop:!0,autoplay:!0,muted:!0}),`
`,c(e.h3,{children:"Limits"}),`
`,x(e.ul,{children:[`
`,c(e.li,{children:"Fast Refresh only supports functional components with hooks."}),`
`,x(e.li,{children:["Functional components using default exports must be named: ",c(e.code,{children:"export default function ComponentName() { ... }"}),"."]}),`
`]})]})}function Rn(n={}){let{wrapper:e}=n.components||{};return e?c(e,Object.assign({},n,{children:c(we,n)})):we(n)}var On=Rn;var ee={};h(ee,{default:()=>In});import{Fragment as Xn,jsx as O,jsxs as An}from"https://esm.sh/react@18.2.0/jsx-runtime";function _e(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return An(Xn,{children:[O(e.h1,{children:"Server"}),`
`,O(e.p,{children:O(e.em,{children:"WIP"})})]})}function Ln(n={}){let{wrapper:e}=n.components||{};return e?O(e,Object.assign({},n,{children:O(_e,n)})):_e(n)}var In=Ln;var ne={};h(ne,{default:()=>Pn});import{Fragment as $n,jsx as N,jsxs as X}from"https://esm.sh/react@18.2.0/jsx-runtime";function Me(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",em:"em",code:"code",pre:"pre",span:"span"},n.components);return X($n,{children:[N(e.h1,{children:"Server-side Rendering"}),`
`,X(e.p,{children:["By default, Aleph.js ",N(e.strong,{children:"pre-renders"})," every page. This means that Aleph.js generates HTML for each page in advance, instead of rendering it with client-side JavaScript. Pre-rendering can result in better performance and SEO."]}),`
`,X(e.p,{children:["Each generated HTML page only needs a small amount of JavaScript. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called ",N(e.em,{children:"hydration"}),".)"]}),`
`,X(e.p,{children:["You can disable ",N(e.strong,{children:"SSR"})," functionality in ",N(e.code,{children:"server.ts"}),":"]}),`
`,N(e.pre,{children:X(e.code,{className:"hljs language-ts",children:[N(e.span,{className:"hljs-title function_",children:"server"}),`({
  `,N(e.span,{className:"hljs-attr",children:"ssr"}),": ",N(e.span,{className:"hljs-literal",children:"true"}),`
})
`]})})]})}function Tn(n={}){let{wrapper:e}=n.components||{};return e?N(e,Object.assign({},n,{children:N(Me,n)})):Me(n)}var Pn=Tn;var se={};h(se,{default:()=>En});import{Fragment as Wn,jsx as A,jsxs as Hn}from"https://esm.sh/react@18.2.0/jsx-runtime";function ve(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return Hn(Wn,{children:[A(e.h1,{children:"Unocss"}),`
`,A(e.p,{children:A(e.em,{children:"WIP"})})]})}function qn(n={}){let{wrapper:e}=n.components||{};return e?A(e,Object.assign({},n,{children:A(ve,n)})):ve(n)}var En=qn;var ae={};h(ae,{default:()=>Bn});import{Fragment as Un,jsx as L,jsxs as Jn}from"https://esm.sh/react@18.2.0/jsx-runtime";function ke(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return Jn(Un,{children:[L(e.h1,{children:"Vue"}),`
`,L(e.p,{children:L(e.em,{children:"WIP"})})]})}function Yn(n={}){let{wrapper:e}=n.components||{};return e?L(e,Object.assign({},n,{children:L(ke,n)})):ke(n)}var Bn=Yn;var le={};h(le,{default:()=>Zn});import{Fragment as Gn,jsx as I,jsxs as zn}from"https://esm.sh/react@18.2.0/jsx-runtime";function De(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return zn(Gn,{children:[I(e.h1,{children:"React"}),`
`,I(e.p,{children:I(e.em,{children:"WIP"})})]})}function Vn(n={}){let{wrapper:e}=n.components||{};return e?I(e,Object.assign({},n,{children:I(De,n)})):De(n)}var Zn=Vn;var _s={"/":Kn,"/docs":Qn,"/docs/browser-support":$,"/docs/deployment":T,"/docs/index":P,"/docs/get-started":W,"/docs/framework/vue":H,"/docs/framework/react-mdx":q,"/docs/framework/solid":E,"/docs/framework/react":U,"/docs/framework/yew":J,"/docs/api-reference/middleware":Y,"/docs/api-reference/server-config":B,"/docs/basic-concepts/import-maps":G,"/docs/basic-concepts/static-file-serving":z,"/docs/basic-concepts/routing":V,"/docs/basic-concepts/import-from-npm":Z,"/docs/basic-concepts/css-support":K,"/docs/basic-concepts/hmr":Q,"/docs/basic-concepts/server":ee,"/docs/basic-concepts/ssr":ne,"/docs/basic-concepts/unocss":se,"/docs/api-reference/framework/vue":ae,"/docs/api-reference/framework/react":le,depGraph:{"modules":[{"specifier":"./routes/docs/browser-support.md"},{"specifier":"./routes/docs/deployment.md"},{"specifier":"./routes/docs/index.md"},{"specifier":"./routes/docs/get-started.md"},{"specifier":"./routes/docs/framework/vue.md"},{"specifier":"./routes/docs/framework/react-mdx.md"},{"specifier":"./routes/docs/framework/solid.md"},{"specifier":"./routes/docs/framework/react.md"},{"specifier":"./routes/docs/framework/yew.md"},{"specifier":"./routes/docs/api-reference/middleware.md"},{"specifier":"./routes/docs/api-reference/server-config.md"},{"specifier":"./routes/docs/basic-concepts/import-maps.md"},{"specifier":"./routes/docs/basic-concepts/static-file-serving.md"},{"specifier":"./routes/docs/basic-concepts/routing.md"},{"specifier":"./routes/docs/basic-concepts/import-from-npm.md"},{"specifier":"./routes/docs/basic-concepts/css-support.md"},{"specifier":"./routes/docs/basic-concepts/hmr.md"},{"specifier":"./routes/docs/basic-concepts/server.md"},{"specifier":"./routes/docs/basic-concepts/ssr.md"},{"specifier":"./routes/docs/basic-concepts/unocss.md"},{"specifier":"./routes/docs/api-reference/framework/vue.md"},{"specifier":"./routes/docs/api-reference/framework/react.md"}]}};export{_s as default};
