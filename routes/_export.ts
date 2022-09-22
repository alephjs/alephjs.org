// Imports route modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var Fe=Object.defineProperty;var p=(n,e)=>{for(var te in e)Fe(n,te,{get:e[te],enumerable:!0})};import*as Qn from"./index.tsx";import*as es from"./docs.tsx";var P={};p(P,{default:()=>Oe});import{Fragment as Re,jsx as m,jsxs as S}from"https://esm.sh/react@18.2.0/jsx-runtime";function ie(n){let e=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre",span:"span"},n.components);return S(Re,{children:[m(e.h1,{children:"Browser Support"}),`
`,S(e.p,{children:[`Aleph.js requires a modern browser to support
`,m(e.a,{href:"https://caniuse.com/#feat=es6-module",children:"native ES module imports"})," and ",m(e.strong,{children:`dynamic
imports`}),":"]}),`
`,S(e.ul,{children:[`
`,m(e.li,{children:"Chrome >= 61"}),`
`,m(e.li,{children:"Edge >= 16"}),`
`,m(e.li,{children:"Firefox >= 60"}),`
`,m(e.li,{children:"Safari >= 11"}),`
`,m(e.li,{children:"Opera >= 48"}),`
`]}),`
`,m(e.h2,{children:"Build Target"}),`
`,S(e.p,{children:["Aleph.js uses ",m(e.strong,{children:"esbuild"}),` to bundle modules at optimization time for production.
You can set the `,m(e.code,{children:"optimization.buildTarget"})," in the server config."]}),`
`,m(e.pre,{children:S(e.code,{className:"hljs language-js",children:[m(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",m(e.span,{className:"hljs-keyword",children:"from"})," ",m(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,m(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,m(e.span,{className:"hljs-attr",children:"optimization"}),`: {
    `,m(e.span,{className:"hljs-attr",children:"buildTarget"}),": ",m(e.span,{className:"hljs-string",children:'"es2020"'}),`,
  },
});
`]})})]})}function Ae(n={}){let{wrapper:e}=n.components||{};return e?m(e,Object.assign({},n,{children:m(ie,n)})):ie(n)}var Oe=Ae;var q={};p(q,{default:()=>Te});import{Fragment as Xe,jsx as y,jsxs as v}from"https://esm.sh/react@18.2.0/jsx-runtime";function he(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",a:"a",blockquote:"blockquote"},n.components);return v(Xe,{children:[y(e.h1,{children:"Deployment on your own host with Deno CLI"}),`
`,v(e.p,{children:["You can run your app in production mode by ",y(e.code,{children:"deno"})," CLI."]}),`
`,y(e.pre,{children:y(e.code,{className:"hljs language-bash",children:`deno run --allow-network --allow-env --allow-read --allow-write server.ts
`})}),`
`,y(e.h2,{children:"Deploy on Deno Deploy"}),`
`,v(e.p,{children:["To deploy your app to ",y(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),", please push your app to ",y(e.a,{href:"https://github.com",children:"Github"})," and create a new project on ",y(e.a,{href:"https://dash.deno.com/new",children:"Deno Deploy"}),"."]}),`
`,v(e.p,{children:["Then link to the Repo and set the entrypoint to ",y(e.code,{children:"server.ts"})]}),`
`,v(e.blockquote,{children:[`
`,v(e.p,{children:["See the ",y(e.a,{href:"https://aleph-hello.deno.dev/",children:"hello-world"})," example on ",y(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),"."]}),`
`]})]})}function Le(n={}){let{wrapper:e}=n.components||{};return e?y(e,Object.assign({},n,{children:y(he,n)})):he(n)}var Te=Le;var H={};p(H,{default:()=>Pe});import{Fragment as Ie,jsx as l,jsxs as g}from"https://esm.sh/react@18.2.0/jsx-runtime";function oe(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",blockquote:"blockquote",em:"em",code:"code",h2:"h2",ul:"ul",li:"li"},n.components);return g(Ie,{children:[l(e.h1,{children:"Aleph.js"}),`
`,g(e.p,{children:[l(e.strong,{children:"Aleph.js"})," (or ",l(e.strong,{children:"Aleph"})," or ",l(e.strong,{children:"\u05D0"})," or ",l(e.strong,{children:"\u963F\u83B1\u592B"}),", ",l("samp",{children:"\u02C8\u0251\u02D0l\u025Bf"}),`) is a
fullstack framework in `,l(e.a,{href:"https://deno.land",children:"Deno"}),". Inspired by ",l(e.a,{href:"https://nextjs.org",children:"Next.js"}),", ",l(e.a,{href:"https://remix.run",children:"Remix"})," and ",l(e.a,{href:"https://vitejs.dev",children:"Vite"}),"."]}),`
`,g(e.blockquote,{children:[`
`,g(e.p,{children:["The name is taken from the book ",l(e.a,{href:"http://phinnweb.org/links/literature/borges/aleph.html",children:l(e.em,{children:"The Aleph"})})," by ",l(e.strong,{children:"Jorge Luis Borges"}),"."]}),`
`]}),`
`,g(e.p,{children:["Aleph.js is modern framework that doesn't need ",l(e.strong,{children:"webpack"}),` or other bundler
since it uses the `,l(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",children:"ES Module"}),` syntax during development. Every module only needs
to be compiled once, when a module changes, Aleph.js just needs to re-compile
that single module. There is no time wasted `,l(e.em,{children:"re-bundling"}),` everytime a change is
made. This, along with Hot Module Replacement (`,l(e.strong,{children:"HMR"}),") and ",l(e.strong,{children:"Fast Refresh"}),`,
leads to instant updates in the browser.`]}),`
`,g(e.p,{children:["Aleph.js uses modern tools to build your app. It transpiles code using ",l(e.a,{href:"https://swc.rs",children:"swc"}),` in
WASM with high performance, and bundles modules with `,l(e.a,{href:"https://github.com/evanw/esbuild",children:"esbuild"}),` at optimization
time extremely fast.`]}),`
`,g(e.p,{children:["Aleph.js works on top of ",l(e.strong,{children:"Deno"}),", a ",l(e.em,{children:"simple"}),", ",l(e.em,{children:"modern"})," and ",l(e.em,{children:"secure"}),` runtime for
JavaScript and TypeScript. All dependencies are imported using URLs, and managed
by Deno cache system. No `,l(e.code,{children:"package.json"})," and ",l(e.code,{children:"node_modules"})," directory needed."]}),`
`,l(e.h2,{children:"Features"}),`
`,g(e.ul,{children:[`
`,l(e.li,{children:"Zero Config"}),`
`,l(e.li,{children:"No build step"}),`
`,l(e.li,{children:"File-system Routing"}),`
`,l(e.li,{children:"Just-in-time Server-side Rendering(SSR)"}),`
`,l(e.li,{children:"Streaming SSR"}),`
`,l(e.li,{children:"Support Typescript/JSX in Deno out of the box"}),`
`,g(e.li,{children:["Built-in ",l(e.a,{href:"https://github.com/unocss/unocss",children:"Unocss"})," (Automatic CSS)"]}),`
`,l(e.li,{children:"Import Maps"}),`
`,l(e.li,{children:"Hot Module Replacement (or HMR)"}),`
`,l(e.li,{children:"Support Middware"}),`
`,l(e.li,{children:"Custom Module Loader like MDX"}),`
`]}),`
`,l(e.h2,{children:"Supported frameworks"}),`
`,g(e.ul,{children:[`
`,l(e.li,{children:l(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/react-app",children:"React"})}),`
`,l(e.li,{children:l(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/react-mdx-app",children:"React with MDX"})}),`
`,l(e.li,{children:l(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/vue-app",children:"Vue"})}),`
`,g(e.li,{children:[l(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/solid-app",children:"Solid"}),`
`,l(e.em,{children:"Experimental"})]}),`
`,g(e.li,{children:[l(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/yew-app",children:"Yew"})," ",l(e.em,{children:"Rust"})]}),`
`]}),`
`,g(e.p,{children:["Plan to support: ",l(e.a,{href:"https://svelte.dev/",children:"Svelte"}),", ",l(e.a,{href:"https://lit.dev/",children:"Lit"}),", etc.."]}),`
`,l(e.h2,{children:"Examples"}),`
`,g(e.p,{children:["Some demo apps deployed to ",l(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),":"]}),`
`,g(e.ul,{children:[`
`,l(e.li,{children:"React App: https://aleph-hello.deno.dev/"}),`
`,l(e.li,{children:"Vue App: https://aleph-vue.deno.dev/"}),`
`,l(e.li,{children:"REST API: https://aleph-api.deno.dev/"}),`
`,l(e.li,{children:"React 18 Suspense SSR: https://aleph-suspense-ssr.deno.dev/"}),`
`,l(e.li,{children:"UnoCSS(tailwind): https://aleph-unocss.deno.dev/"}),`
`,l(e.li,{children:"Monaco Editor: https://aleph-monaco-editor.deno.dev/"}),`
`,l(e.li,{children:"Yew SSR: https://aleph-yew.deno.dev/"}),`
`,l(e.li,{children:"Github OAuth Middleware: https://aleph-github-oauth.deno.dev/"}),`
`]}),`
`,l(e.h2,{children:"Real-world Apps"}),`
`,g(e.ul,{children:[`
`,l(e.li,{children:"Deno Deploy: https://dash.deno.com"}),`
`,g(e.li,{children:[`Meet Me: https://meet-me.deno.dev
(`,l(e.a,{href:"https://github.com/denoland/meet-me",children:"source"}),")"]}),`
`]}),`
`,l(e.h2,{children:"Status"}),`
`,g(e.p,{children:["Currently in ",l(e.strong,{children:"beta"}),", not ready for production."]}),`
`,l(e.h2,{children:"License"}),`
`,g(e.p,{children:["Under the ",l(e.a,{href:"https://opensource.org/licenses/MIT",children:"MIT"})," License."]})]})}function $e(n={}){let{wrapper:e}=n.components||{};return e?l(e,Object.assign({},n,{children:l(oe,n)})):oe(n)}var Pe=$e;var W={};p(W,{default:()=>We});import{Fragment as qe,jsx as f,jsxs as D}from"https://esm.sh/react@18.2.0/jsx-runtime";function de(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",pre:"pre",code:"code"},n.components);return D(qe,{children:[f(e.h1,{children:"Get Started!"}),`
`,D(e.p,{children:["Welcome to use ",f(e.strong,{children:"Aleph.js"}),"!"]}),`
`,D(e.p,{children:["If you are new to Aleph.js you should check out the ",f(e.a,{href:"/docs/",children:"About"})," page."]}),`
`,f(e.h2,{children:"Usage"}),`
`,f(e.p,{children:"Create a new app:"}),`
`,f(e.pre,{children:f(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts
`})}),`
`,D(e.p,{children:["Start the app in ",f(e.code,{children:"development"})," mode:"]}),`
`,f(e.pre,{children:f(e.code,{className:"hljs language-bash",children:`deno task dev
`})}),`
`,D(e.p,{children:["Start the app in ",f(e.code,{children:"production"})," mode:"]}),`
`,f(e.pre,{children:f(e.code,{className:"hljs language-bash",children:`deno task start
`})}),`
`,f(e.p,{children:"Optimize the application (bundling, ssg, etc.):"}),`
`,f(e.pre,{children:f(e.code,{className:"hljs language-bash",children:`deno task opt
`})})]})}function He(n={}){let{wrapper:e}=n.components||{};return e?f(e,Object.assign({},n,{children:f(de,n)})):de(n)}var We=He;var E={};p(E,{default:()=>Ye});import{Fragment as Ee,jsx as C,jsxs as Ue}from"https://esm.sh/react@18.2.0/jsx-runtime";function pe(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return Ue(Ee,{children:[C(e.h1,{children:"Vue"}),`
`,C(e.p,{children:C(e.em,{children:"WIP"})})]})}function Je(n={}){let{wrapper:e}=n.components||{};return e?C(e,Object.assign({},n,{children:C(pe,n)})):pe(n)}var Ye=Je;var U={};p(U,{default:()=>Ve});import{Fragment as Be,jsx as F,jsxs as Ge}from"https://esm.sh/react@18.2.0/jsx-runtime";function me(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return Ge(Be,{children:[F(e.h1,{children:"React with MDX"}),`
`,F(e.p,{children:F(e.em,{children:"WIP"})})]})}function ze(n={}){let{wrapper:e}=n.components||{};return e?F(e,Object.assign({},n,{children:F(me,n)})):me(n)}var Ve=ze;var J={};p(J,{default:()=>en});import{Fragment as Ze,jsx as R,jsxs as Ke}from"https://esm.sh/react@18.2.0/jsx-runtime";function ue(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return Ke(Ze,{children:[R(e.h1,{children:"SolidJS"}),`
`,R(e.p,{children:R(e.em,{children:"WIP"})})]})}function Qe(n={}){let{wrapper:e}=n.components||{};return e?R(e,Object.assign({},n,{children:R(ue,n)})):ue(n)}var en=Qe;var Y={};p(Y,{default:()=>ln});import{Fragment as nn,jsx as A,jsxs as sn}from"https://esm.sh/react@18.2.0/jsx-runtime";function je(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return sn(nn,{children:[A(e.h1,{children:"React"}),`
`,A(e.p,{children:A(e.em,{children:"WIP"})})]})}function an(n={}){let{wrapper:e}=n.components||{};return e?A(e,Object.assign({},n,{children:A(je,n)})):je(n)}var ln=an;var B={};p(B,{default:()=>hn});import{Fragment as rn,jsx as O,jsxs as cn}from"https://esm.sh/react@18.2.0/jsx-runtime";function ge(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return cn(rn,{children:[O(e.h1,{children:"Yew"}),`
`,O(e.p,{children:O(e.em,{children:"WIP"})})]})}function tn(n={}){let{wrapper:e}=n.components||{};return e?O(e,Object.assign({},n,{children:O(ge,n)})):ge(n)}var hn=tn;var G={};p(G,{default:()=>pn});import{Fragment as on,jsx as r,jsxs as k}from"https://esm.sh/react@18.2.0/jsx-runtime";function Ne(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",span:"span",h2:"h2",em:"em",h4:"h4"},n.components);return k(on,{children:[r(e.h1,{children:"Middleware API"}),`
`,k(e.p,{children:["In Aleph.js, a ",r(e.strong,{children:"Middleware"})," is an object with a ",r(e.code,{children:"name"})," and a ",r(e.code,{children:"fetch"}),` method.
The `,r(e.code,{children:"fetch"}),` method will be invoked when a request is received by the server. And
the `,r(e.code,{children:"fetch"})," method will end the request if returns a ",r(e.code,{children:"Response"})," object."]}),`
`,r(e.pre,{children:k(e.code,{className:"hljs language-ts",children:[r(e.span,{className:"hljs-keyword",children:"type"})," ",r(e.span,{className:"hljs-title class_",children:"Middleware"}),` = {
  `,r(e.span,{className:"hljs-attr",children:"name"}),": ",r(e.span,{className:"hljs-built_in",children:"string"}),`;
  `,r(e.span,{className:"hljs-title function_",children:"fetch"}),"(",r(e.span,{className:"hljs-attr",children:"req"}),": ",r(e.span,{className:"hljs-title class_",children:"Request"}),", ",r(e.span,{className:"hljs-attr",children:"context"}),": ",r(e.span,{className:"hljs-title class_",children:"Context"}),"): ",r(e.span,{className:"hljs-title class_",children:"Promise"}),"<",r(e.span,{className:"hljs-title class_",children:"Response"}),"> | ",r(e.span,{className:"hljs-title class_",children:"Response"})," | ",r(e.span,{className:"hljs-built_in",children:"void"}),`;
};
`]})}),`
`,r(e.h2,{children:"Use Middlewares"}),`
`,r(e.p,{children:`Here's a simple plugin example that allows you to add a virtual dist file to the
server:`}),`
`,r(e.pre,{children:k(e.code,{className:"hljs language-ts",children:[r(e.span,{className:"hljs-comment",children:"// server.ts"}),`

`,r(e.span,{className:"hljs-keyword",children:"import"})," foo ",r(e.span,{className:"hljs-keyword",children:"from"})," ",r(e.span,{className:"hljs-string",children:'"./middleware/foo.ts"'}),`;

`,r(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,r(e.span,{className:"hljs-attr",children:"middlewares"}),`: [
    foo,
    {
      `,r(e.span,{className:"hljs-attr",children:"name"}),": ",r(e.span,{className:"hljs-string",children:'"my-middleware"'}),`,
      `,r(e.span,{className:"hljs-title function_",children:"fetch"}),"(",r(e.span,{className:"hljs-params",children:"req"}),`) {
        `,r(e.span,{className:"hljs-keyword",children:"if"})," (req.",r(e.span,{className:"hljs-property",children:"url"})," === ",r(e.span,{className:"hljs-string",children:'"/my-middleware"'}),`) {
          `,r(e.span,{className:"hljs-keyword",children:"return"})," ",r(e.span,{className:"hljs-keyword",children:"new"})," ",r(e.span,{className:"hljs-title class_",children:"Response"}),"(",r(e.span,{className:"hljs-string",children:'"Hello, Middleware!"'}),`);
        }
      },
    },
  ],
});
`]})}),`
`,k(e.h2,{children:["Use ",r(e.code,{children:"Context"})," Object"]}),`
`,r(e.p,{children:r(e.em,{children:"WIP"})}),`
`,r(e.h2,{children:"Examples"}),`
`,r(e.p,{children:`The example plugins below are meant to give you an idea of the different types
of things you can do with the plugin API.`}),`
`,r(e.h4,{children:"Google Analytics"}),`
`,r(e.p,{children:"This example plugin shows how to insert custom scripts to SSR output HTML using middleware."}),`
`,r(e.pre,{children:k(e.code,{className:"hljs language-ts",children:[r(e.span,{className:"hljs-comment",children:"// wIP"}),`
`]})})]})}function dn(n={}){let{wrapper:e}=n.components||{};return e?r(e,Object.assign({},n,{children:r(Ne,n)})):Ne(n)}var pn=dn;var z={};p(z,{default:()=>gn});import{Fragment as mn,jsx as X,jsxs as un}from"https://esm.sh/react@18.2.0/jsx-runtime";function fe(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return un(mn,{children:[X(e.h1,{children:"Server Config"}),`
`,X(e.p,{children:X(e.em,{children:"WIP"})})]})}function jn(n={}){let{wrapper:e}=n.components||{};return e?X(e,Object.assign({},n,{children:X(fe,n)})):fe(n)}var gn=jn;var V={};p(V,{default:()=>xn});import{Fragment as Nn,jsx as t,jsxs as _}from"https://esm.sh/react@18.2.0/jsx-runtime";function xe(n){let e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",span:"span"},n.components);return _(Nn,{children:[t(e.h1,{children:"Import Maps"}),`
`,_(e.p,{children:["To use ",t(e.a,{href:"https://github.com/WICG/import-maps",children:"import maps"}),", create a ",t(e.code,{children:"import_map.json"})," file in the root directory:"]}),`
`,t(e.pre,{children:_(e.code,{className:"hljs language-json",children:[t(e.span,{className:"hljs-punctuation",children:"{"}),`
  `,t(e.span,{className:"hljs-attr",children:'"imports"'}),t(e.span,{className:"hljs-punctuation",children:":"})," ",t(e.span,{className:"hljs-punctuation",children:"{"}),`
    `,t(e.span,{className:"hljs-attr",children:'"@/"'}),t(e.span,{className:"hljs-punctuation",children:":"})," ",t(e.span,{className:"hljs-string",children:'"./"'}),t(e.span,{className:"hljs-punctuation",children:","}),`
    `,t(e.span,{className:"hljs-attr",children:'"react"'}),t(e.span,{className:"hljs-punctuation",children:":"})," ",t(e.span,{className:"hljs-string",children:'"https://esm.sh/react@18.2.0"'}),t(e.span,{className:"hljs-punctuation",children:","}),`
    ...
  `,t(e.span,{className:"hljs-punctuation",children:"}"}),`
`,t(e.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,_(e.p,{children:["Add the ",t(e.code,{children:"importMap"})," option in the ",t(e.code,{children:"deno.json"})," file:"]}),`
`,t(e.pre,{children:_(e.code,{className:"hljs language-json",children:[t(e.span,{className:"hljs-punctuation",children:"{"}),`
  `,t(e.span,{className:"hljs-attr",children:'"importMap"'}),t(e.span,{className:"hljs-punctuation",children:":"})," ",t(e.span,{className:"hljs-string",children:'"import_map.json"'}),`
`,t(e.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,t(e.p,{children:"then in your code:"}),`
`,t(e.pre,{children:_(e.code,{className:"hljs language-tsx",children:[t(e.span,{className:"hljs-keyword",children:"import"})," { useState } ",t(e.span,{className:"hljs-keyword",children:"from"})," ",t(e.span,{className:"hljs-string",children:'"react"'}),`;
`,t(e.span,{className:"hljs-keyword",children:"import"})," ",t(e.span,{className:"hljs-title class_",children:"Logo"})," ",t(e.span,{className:"hljs-keyword",children:"from"})," ",t(e.span,{className:"hljs-string",children:'"@/components/logo.tsx"'}),`;

`,t(e.span,{className:"hljs-keyword",children:"export"})," ",t(e.span,{className:"hljs-keyword",children:"default"})," ",t(e.span,{className:"hljs-keyword",children:"function"})," ",t(e.span,{className:"hljs-title function_",children:"App"}),"(",t(e.span,{className:"hljs-params"}),`) {
  `,t(e.span,{className:"hljs-keyword",children:"return"})," ",t(e.span,{className:"xml",children:_(e.span,{className:"hljs-tag",children:["<",t(e.span,{className:"hljs-name",children:"Logo"})," />"]})}),`;
}
`]})})]})}function fn(n={}){let{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(xe,n)})):xe(n)}var xn=fn;var Z={};p(Z,{default:()=>wn});import{Fragment as yn,jsx as d,jsxs as M}from"https://esm.sh/react@18.2.0/jsx-runtime";function ye(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",ul:"ul",li:"li"},n.components);return M(yn,{children:[d(e.h1,{children:"Static File Serving"}),`
`,M(e.p,{children:["Aleph.js will serve any static files in the project directory. Files inside the project directory can then be referenced by your code by using the base URL (",d(e.code,{children:"/"}),")."]}),`
`,M(e.p,{children:["For example, if you add an image ",d(e.code,{children:"assets/logo.png"}),", the following code will access the image:"]}),`
`,d(e.pre,{children:M(e.code,{className:"hljs language-jsx",children:[d(e.span,{className:"hljs-keyword",children:"export"})," ",d(e.span,{className:"hljs-keyword",children:"default"})," ",d(e.span,{className:"hljs-keyword",children:"function"})," ",d(e.span,{className:"hljs-title function_",children:"Logo"}),"(",d(e.span,{className:"hljs-params"}),`) {
  `,d(e.span,{className:"hljs-keyword",children:"return"}),` (
    `,d(e.span,{className:"xml",children:M(e.span,{className:"hljs-tag",children:["<",d(e.span,{className:"hljs-name",children:"img"})," ",d(e.span,{className:"hljs-attr",children:"src"}),"=",d(e.span,{className:"hljs-string",children:'"/assets/logo.png"'})," ",d(e.span,{className:"hljs-attr",children:"alt"}),"=",d(e.span,{className:"hljs-string",children:'"Logo"'})," />"]})}),`
  )
}
`]})}),`
`,d(e.p,{children:"You can also serve other static assets such as:"}),`
`,M(e.ul,{children:[`
`,d(e.li,{children:d(e.code,{children:"favicon.ico"})}),`
`,d(e.li,{children:d(e.code,{children:"manifest.json"})}),`
`,d(e.li,{children:d(e.code,{children:"robots.txt"})}),`
`,d(e.li,{children:"Google Site Verification, etc"}),`
`]})]})}function bn(n={}){let{wrapper:e}=n.components||{};return e?d(e,Object.assign({},n,{children:d(ye,n)})):ye(n)}var wn=bn;var K={};p(K,{default:()=>kn});import{Fragment as _n,jsx as a,jsxs as u}from"https://esm.sh/react@18.2.0/jsx-runtime";function be(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li",strong:"strong"},n.components);return u(_n,{children:[a(e.h1,{children:"Routing"}),`
`,u(e.p,{children:["Aleph.js has a file-system based router. When a file (",a(e.code,{children:".js"}),", ",a(e.code,{children:".jsx"}),", ",a(e.code,{children:".ts"}),`,
`,a(e.code,{children:".tsx"}),", and ",a(e.code,{children:".mjs"}),") is added to the ",a(e.code,{children:"routes"}),` directory, it is automatically
available as a route.`]}),`
`,u(e.p,{children:["You can configure the ",a(e.code,{children:"router"})," in ",a(e.code,{children:"server.ts"}),"."]}),`
`,a(e.pre,{children:u(e.code,{className:"hljs language-js",children:[a(e.span,{className:"hljs-comment",children:"// server.ts"}),`

`,a(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",a(e.span,{className:"hljs-keyword",children:"from"})," ",a(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,a(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,a(e.span,{className:"hljs-attr",children:"router"}),`: {
    `,a(e.span,{className:"hljs-comment",children:"// use glob pattern to match routes"}),`
    `,a(e.span,{className:"hljs-attr",children:"glob"}),": ",a(e.span,{className:"hljs-string",children:'"./routes/**/*.{ts,tsx,mdx}"'}),`,

    `,a(e.span,{className:"hljs-comment",children:"// or use dir prefix and extnames"}),`
    `,a(e.span,{className:"hljs-attr",children:"dir"}),": ",a(e.span,{className:"hljs-string",children:'"./routes"'}),`,
    `,a(e.span,{className:"hljs-attr",children:"exts"}),": [",a(e.span,{className:"hljs-string",children:'"ts"'}),", ",a(e.span,{className:"hljs-string",children:'".tsx"'}),", ",a(e.span,{className:"hljs-string",children:'".mdx"'}),`],
  },
});
`]})}),`
`,a(e.h3,{children:"Index Routes"}),`
`,u(e.p,{children:["The router will automatically route files named ",a(e.code,{children:"index"}),` to the root of the
directory.`]}),`
`,u(e.ul,{children:[`
`,u(e.li,{children:[a(e.code,{children:"routes/index.tsx"})," \u2192 ",a(e.code,{children:"/"})]}),`
`,u(e.li,{children:[a(e.code,{children:"routes/blog/index.tsx"})," \u2192 ",a(e.code,{children:"/blog"})]}),`
`]}),`
`,a(e.h3,{children:"Dynamic Routes"}),`
`,u(e.p,{children:[`To match a dynamic segment, you can use bracket syntax or start the segment with
`,a(e.strong,{children:"$"}),":"]}),`
`,u(e.ul,{children:[`
`,u(e.li,{children:[a(e.code,{children:"routes/blog/$slug.tsx"})," \u2192 ",a(e.code,{children:"/blog/:slug"})," (",a(e.code,{children:"/blog/hello-world"}),")"]}),`
`,u(e.li,{children:[a(e.code,{children:"routes/$username/settings.tsx"})," \u2192 ",a(e.code,{children:"/:username/settings"})," (",a(e.code,{children:"/foo/settings"}),")"]}),`
`,u(e.li,{children:[a(e.code,{children:"routes/post/$all+.tsx"})," \u2192 ",a(e.code,{children:"/post/*"})," (",a(e.code,{children:"/post/2020/id/title"}),")"]}),`
`]}),`
`,a(e.h3,{children:"Nested Routes"}),`
`,a(e.p,{children:"Aleph.js supports nested route structures like:"}),`
`,u(e.ul,{children:[`
`,a(e.li,{children:a(e.code,{children:"routes/blog.tsx"})}),`
`,a(e.li,{children:a(e.code,{children:"routes/blog/$slug.tsx"})}),`
`]}),`
`,u(e.p,{children:["In the example, routes in ",a(e.code,{children:"/blog/:slug"}),` will be rendered under the
`,a(e.code,{children:"routes/blog.tsx"}),", that is useful to create a ",a(e.strong,{children:"layout"})," for routes:"]}),`
`,a(e.pre,{children:u(e.code,{className:"hljs language-jsx",children:[a(e.span,{className:"hljs-comment",children:"// routes/blog.tsx"}),`

`,a(e.span,{className:"hljs-keyword",children:"import"})," ",a(e.span,{className:"hljs-title class_",children:"BlogHeader"})," ",a(e.span,{className:"hljs-keyword",children:"from"})," ",a(e.span,{className:"hljs-string",children:'"../components/blog-header.tsx"'}),`;

`,a(e.span,{className:"hljs-keyword",children:"export"})," ",a(e.span,{className:"hljs-keyword",children:"default"})," ",a(e.span,{className:"hljs-keyword",children:"function"})," ",a(e.span,{className:"hljs-title function_",children:"Blog"}),"(",a(e.span,{className:"hljs-params",children:"{ children }"}),`) {
  `,a(e.span,{className:"hljs-keyword",children:"return"}),` (
    `,u(e.span,{className:"xml",children:[a(e.span,{className:"hljs-tag",children:"<>"}),`
      `,u(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"BlogHeader"})," />"]}),`
      `,u(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"div"})," ",a(e.span,{className:"hljs-attr",children:"className"}),"=",a(e.span,{className:"hljs-string",children:'"blog-body"'}),">"]}),`
        {children}
      `,u(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"div"}),">"]}),`
    `,a(e.span,{className:"hljs-tag",children:"</>"})]}),`
  );
}
`]})})]})}function vn(n={}){let{wrapper:e}=n.components||{};return e?a(e,Object.assign({},n,{children:a(be,n)})):be(n)}var kn=vn;var Q={};p(Q,{default:()=>Dn});import{Fragment as Mn,jsx as i,jsxs as x}from"https://esm.sh/react@18.2.0/jsx-runtime";function we(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",pre:"pre",code:"code",span:"span",h2:"h2"},n.components);return x(Mn,{children:[i(e.h1,{children:"Import From NPM"}),`
`,x(e.p,{children:["Aleph.js uses ",i(e.strong,{children:"ESM"})," imports syntax in Deno. To import modules from ",i(e.strong,{children:"NPM"}),`,
you can use `,i(e.a,{href:"https://esm.sh",children:"esm.sh"})," CDN that is maintained by Aleph.js team."]}),`
`,i(e.pre,{children:x(e.code,{className:"hljs language-jsx",children:[i(e.span,{className:"hljs-keyword",children:"import"})," useSWR ",i(e.span,{className:"hljs-keyword",children:"from"})," ",i(e.span,{className:"hljs-string",children:'"https://esm.sh/swr"'}),`;

`,i(e.span,{className:"hljs-keyword",children:"export"})," ",i(e.span,{className:"hljs-keyword",children:"default"})," ",i(e.span,{className:"hljs-keyword",children:"function"})," ",i(e.span,{className:"hljs-title function_",children:"About"}),"(",i(e.span,{className:"hljs-params"}),`) {
  `,i(e.span,{className:"hljs-keyword",children:"const"})," { data, error } = ",i(e.span,{className:"hljs-title function_",children:"useSWR"}),"(",i(e.span,{className:"hljs-string",children:'"/api/user"'}),`, fetcher);

  `,i(e.span,{className:"hljs-keyword",children:"if"}),` (error) {
    `,i(e.span,{className:"hljs-keyword",children:"return"})," ",x(e.span,{className:"xml",children:[x(e.span,{className:"hljs-tag",children:["<",i(e.span,{className:"hljs-name",children:"div"}),">"]}),"failed to load",x(e.span,{className:"hljs-tag",children:["</",i(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`;
  }
  `,i(e.span,{className:"hljs-keyword",children:"if"}),` (!data) {
    `,i(e.span,{className:"hljs-keyword",children:"return"})," ",x(e.span,{className:"xml",children:[x(e.span,{className:"hljs-tag",children:["<",i(e.span,{className:"hljs-name",children:"div"}),">"]}),"loading...",x(e.span,{className:"hljs-tag",children:["</",i(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`;
  }
  `,i(e.span,{className:"hljs-keyword",children:"return"})," ",x(e.span,{className:"xml",children:[x(e.span,{className:"hljs-tag",children:["<",i(e.span,{className:"hljs-name",children:"div"}),">"]}),"hello {data.name}!",x(e.span,{className:"hljs-tag",children:["</",i(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`;
}
`]})}),`
`,i(e.h2,{children:"Using NPM Specifier"}),`
`,i(e.p,{children:"The NPM Specifier is extremely new added in Deno 1.25"}),`
`,i(e.pre,{children:x(e.code,{className:"hljs language-js",children:[i(e.span,{className:"hljs-keyword",children:"import"})," express ",i(e.span,{className:"hljs-keyword",children:"from"})," ",i(e.span,{className:"hljs-string",children:'"npm:express@5"'}),`;
`]})}),`
`,i(e.p,{children:"These npm specifiers have the following format:"}),`
`,i(e.pre,{children:x(e.code,{className:"hljs language-lua",children:["npm:<",i(e.span,{className:"hljs-built_in",children:"package"}),"-name>[@<version-requirement>][/<",i(e.span,{className:"hljs-built_in",children:"sub"}),"-",i(e.span,{className:"hljs-built_in",children:"path"}),`>]
`]})})]})}function Sn(n={}){let{wrapper:e}=n.components||{};return e?i(e,Object.assign({},n,{children:i(we,n)})):we(n)}var Dn=Sn;var ee={};p(ee,{default:()=>An});import{Fragment as Cn,jsx as s,jsxs as h}from"https://esm.sh/react@18.2.0/jsx-runtime";import{Link as Fn}from"aleph/react";function _e(n){let e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",blockquote:"blockquote",h2:"h2",ul:"ul",li:"li",a:"a"},n.components);return h(Cn,{children:[s(e.h1,{children:"Server"}),`
`,s(e.p,{children:`In Aleph.js, the server handles all incoming requests, everything is
just-in-time, includes static files, server-side rendering, data fetching, and
module transpile.`}),`
`,s(e.pre,{children:h(e.code,{className:"hljs language-jsx",children:[s(e.span,{className:"hljs-comment",children:"// server.ts"}),`

`,s(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",s(e.span,{className:"hljs-keyword",children:"from"})," ",s(e.span,{className:"hljs-string",children:'"aleph/server"'}),`

`,s(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,s(e.span,{className:"hljs-attr",children:"port"}),": ",s(e.span,{className:"hljs-number",children:"8080"}),`,
  `,s(e.span,{className:"hljs-attr",children:"router"}),`: {
    `,s(e.span,{className:"hljs-attr",children:"glob"}),": ",s(e.span,{className:"hljs-string",children:'"./routes/**/*.{ts,tsx}"'}),`,
  }
  `,s(e.span,{className:"hljs-attr",children:"middlewares"}),": [ ",s(e.span,{className:"hljs-comment",children:"/* ... */"}),` ]
  `,s(e.span,{className:"hljs-attr",children:"uncoss"}),": { ",s(e.span,{className:"hljs-comment",children:"/* ... */"}),` }
  `,s(e.span,{className:"hljs-attr",children:"ssr"}),": ",h(e.span,{className:"hljs-function",children:["(",s(e.span,{className:"hljs-params",children:"ctx"}),") =>"]}),` {
    `,s(e.span,{className:"hljs-keyword",children:"return"})," ",s(e.span,{className:"hljs-title function_",children:"renderToString"}),"(",s(e.span,{className:"xml",children:h(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"App"}),"/>"]})}),`)
  }
})
`]})}),`
`,h(e.blockquote,{children:[`
`,h(e.p,{children:["Normally you don't need to configure the server by using Aleph's template created by the ",s(e.code,{children:"init"}),` script.
To learn more server configuration, check out the
`,s(Fn,{to:"/docs/api-reference/server-config",children:"Server Config API"}),"."]}),`
`]}),`
`,s(e.h2,{children:s(e.code,{children:"index.html"})}),`
`,h(e.p,{children:["Aleph.js uses ",s(e.code,{children:"index.html"}),` (in the project root directory) as the page html
output template, you can add your own tags to it, like `,s(e.code,{children:"<meta>"}),", ",s(e.code,{children:"<script>"}),`,
`,s(e.code,{children:"<link>"}),", etc."]}),`
`,s(e.pre,{children:h(e.code,{className:"hljs language-html",children:[h(e.span,{className:"hljs-meta",children:["<!DOCTYPE ",s(e.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,h(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"html"})," ",s(e.span,{className:"hljs-attr",children:"lang"}),"=",s(e.span,{className:"hljs-string",children:'"en"'}),">"]}),`

`,h(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,h(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"meta"})," ",s(e.span,{className:"hljs-attr",children:"charset"}),"=",s(e.span,{className:"hljs-string",children:'"UTF-8"'}),">"]}),`
  `,h(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"meta"})," ",s(e.span,{className:"hljs-attr",children:"name"}),"=",s(e.span,{className:"hljs-string",children:'"viewport"'})," ",s(e.span,{className:"hljs-attr",children:"content"}),"=",s(e.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'}),">"]}),`
  `,h(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"link"})," ",s(e.span,{className:"hljs-attr",children:"rel"}),"=",s(e.span,{className:"hljs-string",children:'"icon"'})," ",s(e.span,{className:"hljs-attr",children:"href"}),"=",s(e.span,{className:"hljs-string",children:'"./assets/logo.svg"'}),">"]}),`
  `,h(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"link"})," ",s(e.span,{className:"hljs-attr",children:"rel"}),"=",s(e.span,{className:"hljs-string",children:'"stylesheet"'})," ",s(e.span,{className:"hljs-attr",children:"href"}),"=",s(e.span,{className:"hljs-string",children:'"./style/app.css"'}),">"]}),`
`,h(e.span,{className:"hljs-tag",children:["</",s(e.span,{className:"hljs-name",children:"head"}),">"]}),`

`,h(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"body"}),">"]}),`
  `,h(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"div"})," ",s(e.span,{className:"hljs-attr",children:"id"}),"=",s(e.span,{className:"hljs-string",children:'"root"'})," ",s(e.span,{className:"hljs-attr",children:"data-ssr-root"}),">"]}),h(e.span,{className:"hljs-tag",children:["</",s(e.span,{className:"hljs-name",children:"div"}),">"]}),`
  `,h(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"script"})," ",s(e.span,{className:"hljs-attr",children:"type"}),"=",s(e.span,{className:"hljs-string",children:'"module"'})," ",s(e.span,{className:"hljs-attr",children:"src"}),"=",s(e.span,{className:"hljs-string",children:'"./main.ts"'}),">"]}),h(e.span,{className:"hljs-tag",children:["</",s(e.span,{className:"hljs-name",children:"script"}),">"]}),`
  `,h(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"script"}),">"]}),h(e.span,{className:"javascript",children:[s(e.span,{className:"hljs-variable language_",children:"console"}),".",s(e.span,{className:"hljs-title function_",children:"log"}),"(",s(e.span,{className:"hljs-string",children:'"Hello world!"'}),")"]}),h(e.span,{className:"hljs-tag",children:["</",s(e.span,{className:"hljs-name",children:"script"}),">"]}),`
`,h(e.span,{className:"hljs-tag",children:["</",s(e.span,{className:"hljs-name",children:"body"}),">"]}),`

`,h(e.span,{className:"hljs-tag",children:["</",s(e.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,h(e.ul,{children:[`
`,h(e.li,{children:["The attribute ",s(e.code,{children:"data-ssr-root"}),` is to point out the root element for server-side
rendering.`]}),`
`,h(e.li,{children:["Aleph.js will transpile modules for browsers automatically, you can safely add non-JS modules like ",s(e.code,{children:"JSX"})," or ",s(e.code,{children:"TS"}),"."]}),`
`,h(e.li,{children:["CSS files will be bundled using ",s(e.a,{href:"https://lightningcss.dev/",children:"lightningcss"})]}),`
`]})]})}function Rn(n={}){let{wrapper:e}=n.components||{};return e?s(e,Object.assign({},n,{children:s(_e,n)})):_e(n)}var An=Rn;var ne={};p(ne,{default:()=>Ln});import{Fragment as On,jsx as c,jsxs as N}from"https://esm.sh/react@18.2.0/jsx-runtime";function ve(n){let e=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",pre:"pre",span:"span",h2:"h2",a:"a"},n.components);return N(On,{children:[c(e.h1,{children:"CSS Support"}),`
`,N(e.p,{children:["Aleph.js uses the ",c(e.code,{children:"index.html"}),` as the page entry template, that means you can
add any `,c(e.strong,{children:"CSS"})," files with ",c(e.code,{children:"link"})," tag:"]}),`
`,c(e.pre,{children:N(e.code,{className:"hljs language-html",children:[N(e.span,{className:"hljs-tag",children:["<",c(e.span,{className:"hljs-name",children:"html"}),">"]}),`
  `,N(e.span,{className:"hljs-tag",children:["<",c(e.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,N(e.span,{className:"hljs-tag",children:["<",c(e.span,{className:"hljs-name",children:"title"}),">"]}),"Hello, World!",N(e.span,{className:"hljs-tag",children:["</",c(e.span,{className:"hljs-name",children:"title"}),">"]}),`
    `,N(e.span,{className:"hljs-tag",children:["<",c(e.span,{className:"hljs-name",children:"link"})," ",c(e.span,{className:"hljs-attr",children:"rel"}),"=",c(e.span,{className:"hljs-string",children:'"stylesheet"'})," ",c(e.span,{className:"hljs-attr",children:"href"}),"=",c(e.span,{className:"hljs-string",children:'"./style/app.css"'}),">"]}),`
  `,N(e.span,{className:"hljs-tag",children:["</",c(e.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,N(e.span,{className:"hljs-tag",children:["<",c(e.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,N(e.span,{className:"hljs-tag",children:["<",c(e.span,{className:"hljs-name",children:"h1"}),">"]}),"Hello, World!",N(e.span,{className:"hljs-tag",children:["</",c(e.span,{className:"hljs-name",children:"h1"}),">"]}),`
  `,N(e.span,{className:"hljs-tag",children:["</",c(e.span,{className:"hljs-name",children:"body"}),">"]}),`
`,N(e.span,{className:"hljs-tag",children:["</",c(e.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,N(e.h2,{children:["CSS Imports (",c(e.code,{children:"@import"}),")"]}),`
`,N(e.p,{children:["Aleph.js uses ",c(e.a,{href:"https://lightningcss.dev/",children:"lightningcss"}),` to bundle your CSS code
when you use `,c(e.code,{children:"@import"})," to import other CSS files."]}),`
`,c(e.pre,{children:N(e.code,{className:"hljs language-css",children:[c(e.span,{className:"hljs-keyword",children:"@import"})," url(",c(e.span,{className:"hljs-string",children:'"./reset.css"'}),`);

`,c(e.span,{className:"hljs-selector-tag",children:"body"}),` {
  `,c(e.span,{className:"hljs-attribute",children:"font-family"}),": ",c(e.span,{className:"hljs-string",children:'"Roboto"'}),`, sans-serif;
}
`]})}),`
`,c(e.h2,{children:"Draft syntax"}),`
`,N(e.p,{children:["Aleph.js supports ",c(e.a,{href:"https://www.w3.org/TR/css-nesting-1/",children:"Nesting"}),` and
`,c(e.a,{href:"https://www.w3.org/TR/mediaqueries-5/#custom-mq",children:"Custom media queries"}),` draft
spec`]}),`
`,c(e.pre,{children:N(e.code,{className:"hljs language-css",children:[c(e.span,{className:"hljs-keyword",children:"@custom-media"})," --modern (",c(e.span,{className:"hljs-attribute",children:"color"}),"), (",c(e.span,{className:"hljs-attribute",children:"hover"}),`);

`,c(e.span,{className:"hljs-selector-class",children:".foo"}),` {
  `,c(e.span,{className:"hljs-attribute",children:"background"}),`: yellow;

  &`,c(e.span,{className:"hljs-selector-class",children:".bar"}),` {
    `,c(e.span,{className:"hljs-attribute",children:"color"}),`: green;
  }
}

`,c(e.span,{className:"hljs-keyword",children:"@media"})," (--modern) ",c(e.span,{className:"hljs-keyword",children:"and"})," (",c(e.span,{className:"hljs-attribute",children:"width"})," > ",c(e.span,{className:"hljs-number",children:"1024px"}),`) {
  `,c(e.span,{className:"hljs-selector-class",children:".a"}),` {
    `,c(e.span,{className:"hljs-attribute",children:"color"}),`: green;
  }
}
`]})})]})}function Xn(n={}){let{wrapper:e}=n.components||{};return e?c(e,Object.assign({},n,{children:c(ve,n)})):ve(n)}var Ln=Xn;var se={};p(se,{default:()=>$n});import{Fragment as Tn,jsx as o,jsxs as w}from"https://esm.sh/react@18.2.0/jsx-runtime";function ke(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",span:"span",h2:"h2",blockquote:"blockquote",a:"a",h3:"h3",ul:"ul",li:"li"},n.components);return w(Tn,{children:[o(e.h1,{children:"Hot Module Replacement"}),`
`,w(e.p,{children:["Hot Module Replacement (or HMR) allows modules to be updated at runtime without the need for a full refresh during ",o(e.strong,{children:"development"}),". To support this, Aleph.js's built-in ",o(e.strong,{children:"HMR"})," module creates a ",o(e.strong,{children:"WebSocket"})," connection to the dev server on the client, and the server listens for file changes. Once the HMR client gets an update signal from the server, Aleph.js will re-import the updated module."]}),`
`,o(e.p,{children:"For a CSS module, the old style will be removed after the new one is applied. For a React Component, Fast Refresh will re-render the component view without losing component state."}),`
`,w(e.p,{children:["You can use the ",o(e.code,{children:"hot"})," api to handle the module update event."]}),`
`,o(e.pre,{children:w(e.code,{className:"hljs language-js",children:[o(e.span,{className:"hljs-keyword",children:"import"}),".",o(e.span,{className:"hljs-property",children:"meta"}),".",o(e.span,{className:"hljs-property",children:"hot"}),"?.",o(e.span,{className:"hljs-title function_",children:"accept"}),"(",w(e.span,{className:"hljs-function",children:["(",o(e.span,{className:"hljs-params",children:"mod"}),")=>"]}),`{
  `,o(e.span,{className:"hljs-comment",children:"// update UI"}),`
})

`,o(e.span,{className:"hljs-comment",children:"// just reload the page when the module is updated"}),`
`,o(e.span,{className:"hljs-keyword",children:"import"}),".",o(e.span,{className:"hljs-property",children:"meta"}),".",o(e.span,{className:"hljs-property",children:"hot"}),"?.",o(e.span,{className:"hljs-title function_",children:"decline"}),`()
`]})}),`
`,o(e.h2,{children:"React Fast Refresh"}),`
`,w(e.blockquote,{children:[`
`,w(e.p,{children:[`It's a reimplementation of "hot reloading" with full support from React. It's originally `,o(e.a,{href:"https://twitter.com/dan_abramov/status/1169687758849400832",children:"shipped for React Native"}),", but most of the implementation is platform-independent. The plan is to use it across the board, as a replacement for purely userland solutions (like react-hot-loader). ",o(e.a,{href:"https://github.com/facebook/react/issues/16604#issuecomment-528663101",children:"\xB9"})]}),`
`]}),`
`,o("video",{src:"/assets/fast-refresh.mp4",loop:!0,autoplay:!0,muted:!0,controls:!0}),`
`,o(e.h3,{children:"Limits"}),`
`,w(e.ul,{children:[`
`,o(e.li,{children:"Fast Refresh only supports functional components with hooks."}),`
`,w(e.li,{children:["Functional components using default exports must be named: ",o(e.code,{children:"export default function ComponentName() {}"}),"."]}),`
`]})]})}function In(n={}){let{wrapper:e}=n.components||{};return e?o(e,Object.assign({},n,{children:o(ke,n)})):ke(n)}var $n=In;var ae={};p(ae,{default:()=>Hn});import{Fragment as Pn,jsx as b,jsxs as L}from"https://esm.sh/react@18.2.0/jsx-runtime";function Me(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",em:"em",code:"code",pre:"pre",span:"span"},n.components);return L(Pn,{children:[b(e.h1,{children:"Server-side Rendering"}),`
`,L(e.p,{children:["By default, Aleph.js ",b(e.strong,{children:"pre-renders"})," every page. This means that Aleph.js generates HTML for each page in advance, instead of rendering it with client-side JavaScript. Pre-rendering can result in better performance and SEO."]}),`
`,L(e.p,{children:["Each generated HTML page only needs a small amount of JavaScript. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called ",b(e.em,{children:"hydration"}),".)"]}),`
`,L(e.p,{children:["You can disable ",b(e.strong,{children:"SSR"})," functionality in ",b(e.code,{children:"server.ts"}),":"]}),`
`,b(e.pre,{children:L(e.code,{className:"hljs language-ts",children:[b(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,b(e.span,{className:"hljs-attr",children:"ssr"}),": ",b(e.span,{className:"hljs-literal",children:"true"}),`
})
`]})})]})}function qn(n={}){let{wrapper:e}=n.components||{};return e?b(e,Object.assign({},n,{children:b(Me,n)})):Me(n)}var Hn=qn;var le={};p(le,{default:()=>Un});import{Fragment as Wn,jsx as j,jsxs as $}from"https://esm.sh/react@18.2.0/jsx-runtime";function Se(n){let e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",span:"span"},n.components);return $(Wn,{children:[j(e.h1,{children:"Unocss"}),`
`,$(e.p,{children:["Aleph.js uses ",j(e.a,{href:"https://github.com/unocss/unocss/",children:"Unocss"}),` as the Atomic CSS
engine. To enable unocss, add `,j(e.code,{children:"presets"})," to the ",j(e.code,{children:"unocss"})," option in ",j(e.code,{children:"server.ts"}),":"]}),`
`,j(e.pre,{children:$(e.code,{className:"hljs language-js",children:[j(e.span,{className:"hljs-keyword",children:"import"})," presetUno ",j(e.span,{className:"hljs-keyword",children:"from"})," ",j(e.span,{className:"hljs-string",children:'"https://esm.sh/@unocss/preset-uno"'}),`;
`,j(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",j(e.span,{className:"hljs-keyword",children:"from"})," ",j(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,j(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,j(e.span,{className:"hljs-attr",children:"unocss"}),`: {
    `,j(e.span,{className:"hljs-attr",children:"presets"}),": [",j(e.span,{className:"hljs-title function_",children:"presetUno"}),`()],
  },
});
`]})}),`
`,$(e.p,{children:["Check out the ",j(e.a,{href:"https://github.com/unocss/unocss/#presets",children:"available presets"}),` or
Unocss `,j(e.a,{href:"https://github.com/unocss/unocss/#configurations",children:"configurations"}),"."]})]})}function En(n={}){let{wrapper:e}=n.components||{};return e?j(e,Object.assign({},n,{children:j(Se,n)})):Se(n)}var Un=En;var re={};p(re,{default:()=>Gn});import{Fragment as Jn,jsx as T,jsxs as Yn}from"https://esm.sh/react@18.2.0/jsx-runtime";function De(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return Yn(Jn,{children:[T(e.h1,{children:"Vue"}),`
`,T(e.p,{children:T(e.em,{children:"WIP"})})]})}function Bn(n={}){let{wrapper:e}=n.components||{};return e?T(e,Object.assign({},n,{children:T(De,n)})):De(n)}var Gn=Bn;var ce={};p(ce,{default:()=>Kn});import{Fragment as zn,jsx as I,jsxs as Vn}from"https://esm.sh/react@18.2.0/jsx-runtime";function Ce(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return Vn(zn,{children:[I(e.h1,{children:"React"}),`
`,I(e.p,{children:I(e.em,{children:"WIP"})})]})}function Zn(n={}){let{wrapper:e}=n.components||{};return e?I(e,Object.assign({},n,{children:I(Ce,n)})):Ce(n)}var Kn=Zn;var ks={"/":Qn,"/docs":es,"/docs/browser-support":P,"/docs/deployment":q,"/docs/index":H,"/docs/get-started":W,"/docs/framework/vue":E,"/docs/framework/react-mdx":U,"/docs/framework/solid":J,"/docs/framework/react":Y,"/docs/framework/yew":B,"/docs/api-reference/middleware":G,"/docs/api-reference/server-config":z,"/docs/basic-concepts/import-maps":V,"/docs/basic-concepts/static-file-serving":Z,"/docs/basic-concepts/routing":K,"/docs/basic-concepts/import-from-npm":Q,"/docs/basic-concepts/server":ee,"/docs/basic-concepts/css-support":ne,"/docs/basic-concepts/hmr":se,"/docs/basic-concepts/ssr":ae,"/docs/basic-concepts/unocss":le,"/docs/api-reference/framework/vue":re,"/docs/api-reference/framework/react":ce,depGraph:{"modules":[{"specifier":"./routes/docs/browser-support.md"},{"specifier":"./routes/docs/deployment.md"},{"specifier":"./routes/docs/index.md"},{"specifier":"./routes/docs/get-started.md"},{"specifier":"./routes/docs/framework/vue.md"},{"specifier":"./routes/docs/framework/react-mdx.md"},{"specifier":"./routes/docs/framework/solid.md"},{"specifier":"./routes/docs/framework/react.md"},{"specifier":"./routes/docs/framework/yew.md"},{"specifier":"./routes/docs/api-reference/middleware.md"},{"specifier":"./routes/docs/api-reference/server-config.md"},{"specifier":"./routes/docs/basic-concepts/import-maps.md"},{"specifier":"./routes/docs/basic-concepts/static-file-serving.md"},{"specifier":"./routes/docs/basic-concepts/routing.md"},{"specifier":"./routes/docs/basic-concepts/import-from-npm.md"},{"specifier":"./routes/docs/basic-concepts/server.mdx"},{"specifier":"./routes/docs/basic-concepts/css-support.md"},{"specifier":"./routes/docs/basic-concepts/hmr.md"},{"specifier":"./routes/docs/basic-concepts/ssr.md"},{"specifier":"./routes/docs/basic-concepts/unocss.md"},{"specifier":"./routes/docs/api-reference/framework/vue.md"},{"specifier":"./routes/docs/api-reference/framework/react.md"}]}};export{ks as default};
